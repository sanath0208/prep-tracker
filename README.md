# Interview Prep Tracker

12-week interview prep tracker with AI/ML project focus, DSA, system design, and behavioral prep.

## Features
- Per-user accounts with email/password auth
- Cloud-synced progress (Supabase PostgreSQL)
- Add custom tasks, notes, difficulty ratings
- Streak tracking, overdue alerts, activity charts
- Works offline (localStorage fallback)

## Setup

### 1. Create Supabase Project (free)

1. Go to [supabase.com](https://supabase.com) → New Project
2. Note your **Project URL** and **anon public key** (Settings → API)
3. Go to **SQL Editor** → paste contents of `supabase-schema.sql` → Run
4. Go to **Authentication → Providers** → Enable Email (disable "Confirm email" for easier dev, or keep it on for prod)

### 2. Configure the app

Edit `supabase-config.js`:
```js
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

### 3. Deploy to Vercel (free)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR_USER/prep-tracker.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → Import Git Repository
3. Framework: **Other** (no framework)
4. Deploy — done!

Your app will be live at `https://prep-tracker.vercel.app`

### Alternative: GitHub Pages

Since this is all static files, GitHub Pages works too:
1. Push to GitHub
2. Settings → Pages → Source: main branch, / (root)
3. Live at `https://YOUR_USER.github.io/prep-tracker/`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main app shell + CSS + auth UI |
| `app.js` | All app logic — auth, state, rendering |
| `data.js` | 12 weeks of task data (PLAN_DATA) |
| `supabase-config.js` | Supabase URL + anon key |
| `supabase-schema.sql` | DB schema + RLS policies (run once) |

## Architecture

```
Browser → Supabase Auth (login/signup)
       → Supabase DB (user_state table, RLS)
       → localStorage (offline fallback)
```

Each user gets their own row in `user_state` (auto-created on signup via DB trigger).
Row Level Security ensures users can only read/write their own data.
