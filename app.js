// Interview Prep Tracker — App Logic v3
// Features: Supabase auth + per-user persistence, streak, overdue, difficulty, chart
// Falls back to localStorage if not logged in or offline

(async function () {
  // --- Auth state ---
  let currentUser = null;
  let state = { completed: {}, notes: {}, customTasks: {}, difficulties: {}, startDate: null, currentWeek: 1 };
  let currentWeek = 1;
  let saveTimeout = null;

  // --- Auth functions ---

  async function initAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      currentUser = session.user;
    }
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        currentUser = session.user;
        showApp();
        init();
      } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        showAuth();
      }
    });

    if (currentUser) {
      showApp();
      await init();
    } else {
      showAuth();
    }
  }

  function showAuth() {
    document.getElementById('authSection').style.display = 'flex';
    document.getElementById('appSection').style.display = 'none';
  }

  function showApp() {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('appSection').style.display = 'block';
    const userEl = document.getElementById('userEmail');
    if (userEl && currentUser) {
      userEl.textContent = currentUser.email;
    }
  }

  // --- Auth UI handlers (attached after DOM ready) ---

  function attachAuthListeners() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const logoutBtn = document.getElementById('logoutBtn');
    const authError = document.getElementById('authError');

    switchToSignup.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      authError.textContent = '';
    });

    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
      authError.textContent = '';
    });

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      authError.textContent = '';
      const email = loginForm.querySelector('[name="email"]').value;
      const password = loginForm.querySelector('[name="password"]').value;
      const btn = loginForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Signing in...';
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      btn.disabled = false;
      btn.textContent = 'Sign In';
      if (error) {
        authError.textContent = error.message;
      }
    });

    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      authError.textContent = '';
      const email = signupForm.querySelector('[name="email"]').value;
      const password = signupForm.querySelector('[name="password"]').value;
      const btn = signupForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Creating account...';
      const { error } = await supabase.auth.signUp({ email, password });
      btn.disabled = false;
      btn.textContent = 'Sign Up';
      if (error) {
        authError.textContent = error.message;
      } else {
        authError.style.color = '#56d364';
        authError.textContent = 'Check your email to confirm your account, then sign in.';
      }
    });

    logoutBtn.addEventListener('click', async () => {
      await supabase.auth.signOut();
    });
  }

  // --- State management ---

  async function loadState() {
    if (currentUser) {
      try {
        const { data, error } = await supabase
          .from('user_state')
          .select('*')
          .eq('user_id', currentUser.id)
          .single();
        if (!error && data) {
          return {
            completed: data.completed || {},
            notes: data.notes || {},
            customTasks: data.custom_tasks || {},
            difficulties: data.difficulties || {},
            startDate: data.start_date || null,
            currentWeek: data.current_week || 1
          };
        }
      } catch {}
    }
    // Fallback to localStorage
    try {
      const raw = localStorage.getItem('prepTracker');
      const parsed = raw ? JSON.parse(raw) : {};
      return {
        completed: parsed.completed || {},
        notes: parsed.notes || {},
        customTasks: parsed.customTasks || {},
        difficulties: parsed.difficulties || {},
        startDate: parsed.startDate || null,
        currentWeek: parsed.currentWeek || 1
      };
    } catch {}
    return { completed: {}, notes: {}, customTasks: {}, difficulties: {}, startDate: null, currentWeek: 1 };
  }

  function saveState() {
    state.currentWeek = currentWeek;
    // Always save to localStorage immediately
    try { localStorage.setItem('prepTracker', JSON.stringify(state)); } catch {}
    // Debounced save to Supabase
    if (currentUser) {
      if (saveTimeout) clearTimeout(saveTimeout);
      saveTimeout = setTimeout(async () => {
        await supabase
          .from('user_state')
          .update({
            completed: state.completed,
            notes: state.notes,
            custom_tasks: state.customTasks,
            difficulties: state.difficulties,
            start_date: state.startDate,
            current_week: state.currentWeek,
          })
          .eq('user_id', currentUser.id);
      }, 500);
    }
  }

  // --- ID helpers ---

  function taskId(weekIdx, dayIdx, taskIdx) { return `w${weekIdx}d${dayIdx}t${taskIdx}`; }
  function customTaskId(weekIdx, dayIdx, customIdx) { return `w${weekIdx}d${dayIdx}c${customIdx}`; }

  // --- Task data helpers ---

  function isCompleted(id) { return !!state.completed[id]; }
  function getNote(id) { return state.notes[id] || ''; }
  function getDifficulty(id) { return state.difficulties[id] || 0; }

  function setNote(id, text) {
    if (text.trim()) { state.notes[id] = text.trim(); } else { delete state.notes[id]; }
    saveState();
  }

  function setDifficulty(id, level) {
    if (level > 0) { state.difficulties[id] = level; } else { delete state.difficulties[id]; }
    saveState();
  }

  function toggleTask(id) {
    if (state.completed[id]) {
      delete state.completed[id];
    } else {
      state.completed[id] = Date.now();
      if (!state.startDate) { state.startDate = new Date().toISOString().split('T')[0]; }
    }
    saveState();
    updateAll();
  }

  function getCustomTasks(weekIdx, dayIdx) {
    return state.customTasks[`w${weekIdx}d${dayIdx}`] || [];
  }

  function addCustomTask(weekIdx, dayIdx, text, tag) {
    const key = `w${weekIdx}d${dayIdx}`;
    if (!state.customTasks[key]) state.customTasks[key] = [];
    state.customTasks[key].push({ text, tag, createdAt: Date.now() });
    saveState();
  }

  function deleteCustomTask(weekIdx, dayIdx, customIdx) {
    const key = `w${weekIdx}d${dayIdx}`;
    if (state.customTasks[key]) {
      state.customTasks[key].splice(customIdx, 1);
      const prefix = `w${weekIdx}d${dayIdx}c`;
      Object.keys(state.completed).forEach(k => { if (k.startsWith(prefix)) delete state.completed[k]; });
      Object.keys(state.notes).forEach(k => { if (k.startsWith(prefix)) delete state.notes[k]; });
      Object.keys(state.difficulties).forEach(k => { if (k.startsWith(prefix)) delete state.difficulties[k]; });
      saveState();
    }
  }

  function getAllTasks(weekIdx, dayIdx) {
    const day = PLAN_DATA[weekIdx].days[dayIdx];
    const builtIn = day.tasks.map((task, ti) => ({
      ...task, id: taskId(weekIdx, dayIdx, ti), isCustom: false, customIdx: null
    }));
    const custom = getCustomTasks(weekIdx, dayIdx).map((task, ci) => ({
      ...task, id: customTaskId(weekIdx, dayIdx, ci), isCustom: true, customIdx: ci
    }));
    return [...builtIn, ...custom];
  }

  function getDayStats(weekIdx, dayIdx) {
    const tasks = getAllTasks(weekIdx, dayIdx);
    return { total: tasks.length, done: tasks.filter(t => isCompleted(t.id)).length };
  }

  function getWeekStats(weekIdx) {
    let total = 0, done = 0;
    PLAN_DATA[weekIdx].days.forEach((_, di) => { const s = getDayStats(weekIdx, di); total += s.total; done += s.done; });
    return { total, done };
  }

  function getStats() {
    let total = 0, done = 0;
    PLAN_DATA.forEach((_, wi) => { const s = getWeekStats(wi); total += s.total; done += s.done; });
    return { total, done };
  }

  // --- Streak calculation ---

  function getDateStr(date) { return date.toISOString().split('T')[0]; }

  function getCompletionsByDate() {
    const byDate = {};
    Object.values(state.completed).forEach(ts => {
      const d = getDateStr(new Date(ts));
      byDate[d] = (byDate[d] || 0) + 1;
    });
    return byDate;
  }

  function calculateStreak() {
    const byDate = getCompletionsByDate();
    const today = getDateStr(new Date());
    let streak = 0;
    let d = new Date();
    if (byDate[today]) {
      streak = 1;
      d.setDate(d.getDate() - 1);
    } else {
      d.setDate(d.getDate() - 1);
    }
    while (byDate[getDateStr(d)]) {
      streak++;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  }

  function getDaysRemaining() {
    if (!state.startDate) return 84;
    const start = new Date(state.startDate);
    const now = new Date();
    const elapsed = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return Math.max(0, 84 - elapsed);
  }

  function getPlanDay() {
    if (!state.startDate) return 1;
    const start = new Date(state.startDate);
    const now = new Date();
    return Math.min(84, Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1);
  }

  // --- Overdue tasks ---

  function getOverdueTasks() {
    const overdue = [];
    const planDay = getPlanDay();

    for (let wi = 0; wi < PLAN_DATA.length; wi++) {
      const weekStartDay = wi * 7 + 1;
      PLAN_DATA[wi].days.forEach((day, di) => {
        const dayNum = weekStartDay + di;
        if (dayNum >= planDay) return;
        const tasks = getAllTasks(wi, di);
        tasks.forEach(t => {
          if (!isCompleted(t.id)) {
            overdue.push({ ...t, dayTitle: day.title, weekNum: wi + 1 });
          }
        });
      });
      if (overdue.length >= 10) break;
    }
    return overdue.slice(0, 10);
  }

  // --- Chart: last 14 days ---

  function renderChart() {
    const byDate = getCompletionsByDate();
    const bars = document.getElementById('chartBars');
    const today = new Date();
    let html = '';
    let maxVal = 1;

    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = getDateStr(d);
      const count = byDate[key] || 0;
      if (count > maxVal) maxVal = count;
      days.push({ key, count, label: d.toLocaleDateString('en', { weekday: 'short' }).charAt(0), isToday: i === 0 });
    }

    days.forEach(day => {
      const height = day.count > 0 ? Math.max(8, (day.count / maxVal) * 55) : 4;
      const cls = day.isToday ? 'today' : (day.count === 0 ? 'empty' : '');
      html += `<div class="chart-bar-wrap ${day.isToday ? 'today' : ''}">`;
      html += `<div class="chart-bar ${cls}" style="height:${height}px" title="${day.count} tasks on ${day.key}"></div>`;
      html += `<div class="chart-day-label">${day.label}</div>`;
      html += `</div>`;
    });
    bars.innerHTML = html;
  }

  // --- Streak banner ---

  function renderStreak() {
    const streak = calculateStreak();
    const remaining = getDaysRemaining();
    const planDay = getPlanDay();
    document.getElementById('streakNum').textContent = streak;
    document.getElementById('streakToday').textContent = `Day ${planDay} of 84`;
    document.getElementById('streakRemaining').textContent = `${remaining} days remaining`;
  }

  // --- Overdue section ---

  function renderOverdue() {
    const overdue = getOverdueTasks();
    const section = document.getElementById('overdueSection');
    if (overdue.length === 0) { section.innerHTML = ''; return; }

    let html = `<div class="overdue-section"><div class="overdue-title">\u26A0 ${overdue.length} overdue task${overdue.length > 1 ? 's' : ''} from previous days</div>`;
    overdue.forEach(t => {
      html += `<div class="overdue-task">\u2022 ${escapeHTML(t.text)} <span style="color:#484f58;font-size:0.72rem;">(W${t.weekNum} ${t.dayTitle})</span></div>`;
    });
    html += `</div>`;
    section.innerHTML = html;
  }

  // --- Update everything ---

  function updateAll() {
    updateStats();
    renderStreak();
    renderChart();
    renderOverdue();
  }

  function updateStats() {
    const { total, done } = getStats();
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    document.getElementById('statDone').textContent = done;
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statPercent').textContent = pct + '%';
    document.getElementById('statWeek').textContent = currentWeek;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = pct + '%';

    document.querySelectorAll('.week-btn').forEach((btn, i) => {
      btn.classList.remove('active', 'complete');
      if (i === currentWeek - 1) btn.classList.add('active');
      const ws = getWeekStats(i);
      if (ws.done === ws.total && ws.total > 0) btn.classList.add('complete');
    });

    document.querySelectorAll('.day-card').forEach(card => {
      const wi = parseInt(card.dataset.week);
      const di = parseInt(card.dataset.day);
      const ds = getDayStats(wi, di);
      const badge = card.querySelector('.day-badge');
      if (badge) {
        badge.textContent = `${ds.done}/${ds.total}`;
        badge.classList.toggle('done', ds.done === ds.total && ds.total > 0);
      }
      card.classList.toggle('all-done', ds.done === ds.total && ds.total > 0);
    });
  }

  // --- Render ---

  function renderWeekNav() {
    const nav = document.getElementById('weekNav');
    nav.innerHTML = '';
    PLAN_DATA.forEach((week, i) => {
      const btn = document.createElement('button');
      btn.className = 'week-btn' + (i === currentWeek - 1 ? ' active' : '');
      btn.textContent = `W${week.week}`;
      btn.title = week.theme;
      btn.addEventListener('click', () => {
        currentWeek = i + 1;
        saveState();
        renderContent();
        updateAll();
      });
      nav.appendChild(btn);
    });
  }

  function tagHTML(tag) {
    const labels = {
      dsa: 'DSA', sd: 'System Design', infra: 'Infra', ai: 'AI',
      behavioral: 'Behavioral', mock: 'Mock', paper: 'Paper',
      resume: 'Resume', review: 'Review', custom: 'Custom'
    };
    return `<span class="tag tag-${tag}">${labels[tag] || tag}</span>`;
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function difficultyHTML(id) {
    const current = getDifficulty(id);
    let html = `<div class="difficulty-row"><span class="diff-label">Difficulty:</span>`;
    for (let i = 1; i <= 5; i++) {
      html += `<button class="diff-btn diff-${i} ${current === i ? 'active' : ''}" data-id="${id}" data-level="${i}" title="${['','Trivial','Easy','Medium','Hard','Couldn\'t solve'][i]}">${i}</button>`;
    }
    html += `</div>`;
    return html;
  }

  function getOpenDays() {
    const open = [];
    document.querySelectorAll('.day-card').forEach(card => {
      const body = card.querySelector('.day-body');
      if (body && !body.classList.contains('hidden')) {
        open.push(`${card.dataset.week}-${card.dataset.day}`);
      }
    });
    return open;
  }

  function renderContent() {
    const openDays = getOpenDays();
    const content = document.getElementById('content');
    const weekIdx = currentWeek - 1;
    const week = PLAN_DATA[weekIdx];

    let html = `<div style="margin-bottom:12px;color:#8b949e;font-size:0.82rem;">
      <strong style="color:#f0f6fc;">Week ${week.week}:</strong> ${week.theme}
    </div>`;

    week.days.forEach((day, di) => {
      const ds = getDayStats(weekIdx, di);
      const allDone = ds.done === ds.total && ds.total > 0;
      const tasks = getAllTasks(weekIdx, di);

      html += `<div class="day-card ${allDone ? 'all-done' : ''}" data-week="${weekIdx}" data-day="${di}">`;
      html += `<div class="day-header" onclick="this.nextElementSibling.classList.toggle('hidden')">`;
      html += `<span class="day-title">${day.title}</span>`;
      html += `<div class="day-meta">`;
      html += `<span class="day-badge ${allDone ? 'done' : ''}">${ds.done}/${ds.total}</span>`;
      html += `</div></div>`;
      const isOpen = openDays.length > 0
        ? openDays.includes(`${weekIdx}-${di}`)
        : di === 0;
      html += `<div class="day-body${isOpen ? '' : ' hidden'}">`;

      tasks.forEach((task) => {
        const done = isCompleted(task.id);
        const note = getNote(task.id);
        const hasNote = note.length > 0;
        const isDSA = task.tag === 'dsa';

        html += `<div class="task ${done ? 'completed' : ''}" data-task-id="${task.id}">`;
        html += `<input type="checkbox" ${done ? 'checked' : ''} data-id="${task.id}">`;
        html += `<div class="task-content">`;
        html += `<div class="task-row">`;
        html += `<span class="task-text">${escapeHTML(task.text)} ${tagHTML(task.tag)}</span>`;
        html += `<div class="task-actions">`;
        html += `<button class="note-btn ${hasNote ? 'has-note' : ''}" data-id="${task.id}" title="${hasNote ? 'Edit note' : 'Add note'}">`;
        html += hasNote ? '\uD83D\uDCDD' : '\uFF0B';
        html += `</button>`;
        if (task.isCustom) {
          html += `<button class="delete-btn" data-week="${weekIdx}" data-day="${di}" data-cidx="${task.customIdx}" title="Delete task">\u2715</button>`;
        }
        html += `</div></div>`;
        if (isDSA && done) { html += difficultyHTML(task.id); }
        if (hasNote) {
          html += `<div class="task-note" data-id="${task.id}">${escapeHTML(note)}</div>`;
        }
        html += `</div></div>`;
      });

      html += `<div class="add-task-row">`;
      html += `<button class="add-task-btn" data-week="${weekIdx}" data-day="${di}">+ Add task</button>`;
      html += `</div>`;
      html += `</div></div>`;
    });

    content.innerHTML = html;
    attachListeners();
  }

  function attachListeners() {
    const content = document.getElementById('content');

    content.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        toggleTask(e.target.dataset.id);
        renderContent();
      });
    });

    content.querySelectorAll('.note-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openNoteEditor(btn.dataset.id, btn.closest('.task'));
      });
    });

    content.querySelectorAll('.task-note').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openNoteEditor(el.dataset.id, el.closest('.task'));
      });
    });

    content.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!confirm('Delete this task?')) return;
        deleteCustomTask(parseInt(btn.dataset.week), parseInt(btn.dataset.day), parseInt(btn.dataset.cidx));
        renderContent();
        updateAll();
      });
    });

    content.querySelectorAll('.add-task-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openAddTaskForm(parseInt(btn.dataset.week), parseInt(btn.dataset.day), btn.closest('.add-task-row'));
      });
    });

    content.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const level = parseInt(btn.dataset.level);
        const current = getDifficulty(id);
        setDifficulty(id, current === level ? 0 : level);
        btn.closest('.difficulty-row').querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        if (current !== level) btn.classList.add('active');
      });
    });
  }

  function openNoteEditor(taskId, taskEl) {
    if (taskEl.querySelector('.note-editor')) return;
    const currentNote = getNote(taskId);
    const editorHTML = `
      <div class="note-editor">
        <textarea class="note-textarea" placeholder="Add your notes here... (Cmd+Enter to save, Esc to cancel)">${escapeHTML(currentNote)}</textarea>
        <div class="note-editor-actions">
          <button class="note-save-btn">Save</button>
          <button class="note-cancel-btn">Cancel</button>
        </div>
      </div>`;
    const existing = taskEl.querySelector('.task-note');
    if (existing) existing.remove();
    taskEl.querySelector('.task-content').insertAdjacentHTML('beforeend', editorHTML);
    const textarea = taskEl.querySelector('.note-textarea');
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);

    taskEl.querySelector('.note-save-btn').addEventListener('click', () => {
      setNote(taskId, textarea.value);
      renderContent(); updateAll();
    });
    taskEl.querySelector('.note-cancel-btn').addEventListener('click', () => {
      taskEl.querySelector('.note-editor').remove();
      if (currentNote) {
        taskEl.querySelector('.task-content').insertAdjacentHTML('beforeend',
          `<div class="task-note" data-id="${taskId}">${escapeHTML(currentNote)}</div>`);
      }
    });
    textarea.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { setNote(taskId, textarea.value); renderContent(); updateAll(); }
      if (e.key === 'Escape') taskEl.querySelector('.note-cancel-btn').click();
    });
  }

  function openAddTaskForm(weekIdx, dayIdx, rowEl) {
    if (rowEl.querySelector('.add-task-form')) return;
    const formHTML = `
      <div class="add-task-form">
        <input type="text" class="add-task-input" placeholder="Task description...">
        <select class="add-task-tag">
          <option value="dsa">DSA</option>
          <option value="sd">System Design</option>
          <option value="infra">Infra</option>
          <option value="ai">AI</option>
          <option value="behavioral">Behavioral</option>
          <option value="mock">Mock</option>
          <option value="paper">Paper</option>
          <option value="resume">Resume</option>
          <option value="review">Review</option>
          <option value="custom" selected>Custom</option>
        </select>
        <div class="add-task-form-actions">
          <button class="add-task-submit">Add</button>
          <button class="add-task-cancel">Cancel</button>
        </div>
      </div>`;
    rowEl.querySelector('.add-task-btn').style.display = 'none';
    rowEl.insertAdjacentHTML('beforeend', formHTML);
    const input = rowEl.querySelector('.add-task-input');
    input.focus();
    const submit = () => {
      const text = input.value.trim();
      if (!text) return;
      addCustomTask(weekIdx, dayIdx, text, rowEl.querySelector('.add-task-tag').value);
      renderContent(); updateAll();
    };
    rowEl.querySelector('.add-task-submit').addEventListener('click', submit);
    rowEl.querySelector('.add-task-cancel').addEventListener('click', () => {
      rowEl.querySelector('.add-task-form').remove();
      rowEl.querySelector('.add-task-btn').style.display = '';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submit();
      if (e.key === 'Escape') rowEl.querySelector('.add-task-cancel').click();
    });
  }

  // --- Initialize ---

  async function init() {
    state = await loadState();
    currentWeek = state.currentWeek || 1;
    renderWeekNav();
    renderContent();
    updateAll();
  }

  // --- Reset handler ---
  window.resetAllProgress = async function () {
    if (!confirm('Reset ALL progress? This cannot be undone.')) return;
    state = { completed: {}, notes: {}, customTasks: {}, difficulties: {}, startDate: null, currentWeek: 1 };
    currentWeek = 1;
    saveState();
    renderWeekNav();
    renderContent();
    updateAll();
  };

  // --- Boot ---
  attachAuthListeners();
  initAuth();
})();
