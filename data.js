// 12-Week Interview Prep — Task Data
// Focus: DSA + System Design + AI/ML Projects + Agent Frameworks + Vibe Coding
// Each week has 7 days, each day has tasks with: text, tag (for color)

const PLAN_DATA = [
  // ===== WEEK 1: Foundation Rebuilding — Arrays & Hashing + Docker Basics =====
  {
    week: 1,
    theme: "Foundation Rebuilding — Arrays, Hashing, Docker Basics",
    days: [
      {
        day: 1, label: "Monday", title: "Week 1 Day 1 — Warm-up",
        tasks: [
          { text: "LeetCode: Contains Duplicate (#217) — Easy — set basics", tag: "dsa" },
          { text: "LeetCode: Valid Anagram (#242) — Easy — hash map counting", tag: "dsa" },
          { text: "System Design: Read System Design Primer Ch.1 — latency vs throughput, vertical vs horizontal scaling (45 min)", tag: "sd" },
          { text: "Behavioral: Write STAR template + draft 1st story (Leadership)", tag: "behavioral" },
          { text: "Setup: Install Docker Desktop, verify 'docker run hello-world' works", tag: "infra" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 1 Day 2",
        tasks: [
          { text: "LeetCode: Two Sum (#1) — Easy — complement hashing", tag: "dsa" },
          { text: "LeetCode: Group Anagrams (#49) — Medium — hash with sorted key", tag: "dsa" },
          { text: "Infra: Read Docker official 'Get Started' guide Part 1-2 (45 min)", tag: "infra" },
          { text: "Infra: Write your first Dockerfile for a Python FastAPI hello-world app", tag: "infra" },
          { text: "Re-solve: Two Sum (narrate approach aloud)", tag: "dsa" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 1 Day 3",
        tasks: [
          { text: "LeetCode: Top K Frequent Elements (#347) — Medium — bucket sort / heap", tag: "dsa" },
          { text: "Re-solve: Two Sum — should be <10 min now", tag: "dsa" },
          { text: "System Design: Read about stateless vs stateful services + CAP theorem basics (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 2nd STAR story (Conflict resolution)", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 1 Day 4",
        tasks: [
          { text: "LeetCode: Product of Array Except Self (#238) — Medium — prefix/suffix products", tag: "dsa" },
          { text: "Warm-up re-solve: Valid Anagram — target <5 min", tag: "dsa" },
          { text: "Infra: docker build, run, ps, logs, exec — practice all commands on your FastAPI app", tag: "infra" },
          { text: "Infra: Push image to GitHub Container Registry (free)", tag: "infra" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 1 Day 5",
        tasks: [
          { text: "LeetCode: Valid Sudoku (#36) — Medium — multi-hash validation", tag: "dsa" },
          { text: "System Design: Read about caching fundamentals — LRU, TTL, cache-aside pattern (45 min)", tag: "sd" },
          { text: "AI Setup: Install Cursor IDE, set up GitHub Copilot, read Anthropic prompting guide (30 min)", tag: "ai" },
          { text: "AI: Read 'What are LLMs?' overview — tokenization, next-token prediction, temperature, context window (30 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 1 Day 6 — Weekend Depth",
        tasks: [
          { text: "LeetCode: Encode and Decode Strings (#271) — Medium — length-prefix encoding", tag: "dsa" },
          { text: "LeetCode: Longest Consecutive Sequence (#128) — Medium — set + boundary check", tag: "dsa" },
          { text: "LeetCode (stretch): Find All Numbers Disappeared (#448) — Easy — index-as-hash", tag: "dsa" },
          { text: "Infra: Understand image layers, RUN vs CMD vs ENTRYPOINT, COPY vs ADD (read + practice)", tag: "infra" },
          { text: "Infra: Rewrite your Dockerfile from scratch without looking — can you do it in <5 min?", tag: "infra" },
          { text: "System Design: Full read of System Design Primer Ch.2 — load balancing overview (60 min)", tag: "sd" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 1 Day 7 — Review",
        tasks: [
          { text: "Re-solve: Group Anagrams (#49) — target <20 min, narrate aloud", tag: "dsa" },
          { text: "Re-solve: Top K Frequent Elements (#347) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Longest Consecutive Sequence (#128) — target <20 min", tag: "dsa" },
          { text: "Behavioral: Draft 3rd STAR story (Failure/learning)", tag: "behavioral" },
          { text: "Weekly Review: Fill out 04-weekly-review-template.md, save as reviews/week-1.md", tag: "review" },
          { text: "Plan next week: skim Week 2 tasks, prep environment", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 2: Foundation — Two Pointers, Sliding Window, Stack + Docker Compose =====
  {
    week: 2,
    theme: "Foundation — Two Pointers, Sliding Window, Stack + Docker Compose + AI Basics",
    days: [
      {
        day: 1, label: "Monday", title: "Week 2 Day 1 — Two Pointers",
        tasks: [
          { text: "LeetCode: Valid Palindrome (#125) — Easy — two pointers basics", tag: "dsa" },
          { text: "LeetCode: Two Sum II (#167) — Medium — sorted-array two pointer", tag: "dsa" },
          { text: "System Design: Read about L4 vs L7 load balancers, round-robin, least-conn, sticky sessions (45 min)", tag: "sd" },
          { text: "Behavioral: Refine Leadership story — add metrics, tighten action section", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 2 Day 2 — Two Pointers",
        tasks: [
          { text: "LeetCode: 3Sum (#15) — Medium — sort + two pointer + dedup", tag: "dsa" },
          { text: "Re-solve: Valid Palindrome — should be trivial", tag: "dsa" },
          { text: "Infra: Learn Docker volumes (named vs bind mount) and Docker networking (bridge, host, custom)", tag: "infra" },
          { text: "AI: Read about embeddings — what they are, word2vec intuition, sentence embeddings, OpenAI embedding API (30 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 2 Day 3 — Two Pointers + Hard",
        tasks: [
          { text: "LeetCode: Container With Most Water (#11) — Medium — greedy two-pointer", tag: "dsa" },
          { text: "LeetCode: Trapping Rain Water (#42) — Hard — two-pointer or stack (take 60 min, it's ok)", tag: "dsa" },
          { text: "System Design: Read about caching layers — CDN cache, reverse-proxy cache, application cache, DB cache (45 min)", tag: "sd" },
          { text: "Behavioral: Refine Conflict story", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 2 Day 4 — Sliding Window",
        tasks: [
          { text: "LeetCode: Best Time to Buy and Sell Stock (#121) — Easy — running min", tag: "dsa" },
          { text: "LeetCode: Longest Substring Without Repeating Characters (#3) — Medium — window + set", tag: "dsa" },
          { text: "Infra: Learn multi-stage Docker builds — convert your Python app to multi-stage (install deps → copy code → run)", tag: "infra" },
          { text: "AI: Read about prompt engineering fundamentals — system prompts, few-shot, chain-of-thought, temperature control (30 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 2 Day 5 — Sliding Window",
        tasks: [
          { text: "LeetCode: Longest Repeating Character Replacement (#424) — Medium — window + max freq", tag: "dsa" },
          { text: "System Design: Cache eviction policies deep-dive — LRU, LFU, TTL, write-through vs write-back (45 min)", tag: "sd" },
          { text: "AI: Use Claude to critique your Trapping Rain Water solution — ask for tighter code + edge cases", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 2 Day 6 — Sliding Window Hard + Stack + Docker Compose",
        tasks: [
          { text: "LeetCode: Minimum Window Substring (#76) — Hard — window with need-map", tag: "dsa" },
          { text: "LeetCode: Valid Parentheses (#20) — Easy — stack basics", tag: "dsa" },
          { text: "LeetCode: Min Stack (#155) — Medium — auxiliary stack", tag: "dsa" },
          { text: "LeetCode: Evaluate Reverse Polish Notation (#150) — Medium — stack operations classic", tag: "dsa" },
          { text: "Infra: Learn docker-compose — read official docs 'Getting Started' (30 min)", tag: "infra" },
          { text: "Infra: Build multi-service docker-compose.yml — FastAPI + Postgres + Redis (hands-on, 90 min)", tag: "infra" },
          { text: "System Design: Draw a caching architecture for a social feed — CDN + app cache + DB cache (30 min)", tag: "sd" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 2 Day 7 — Stack + Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Daily Temperatures (#739) — Medium — monotonic stack", tag: "dsa" },
          { text: "LeetCode: Car Fleet (#853) — Medium — stack + sorting by position", tag: "dsa" },
          { text: "Re-solve: 3Sum (#15) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Longest Substring Without Repeating (#3) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Min Stack (#155) — target <15 min", tag: "dsa" },
          { text: "Self-assessment: Can you whiteboard L4 vs L7 LB without notes? If no, add 1 hr this week", tag: "review" },
          { text: "Infra: Verify docker-compose stack is running, add health checks to api + db", tag: "infra" },
          { text: "Weekly Review: Fill template, save as reviews/week-2.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 3: Pattern Mastery I — Binary Search, Linked List + AI/ML Foundations =====
  {
    week: 3,
    theme: "Pattern Mastery I — Binary Search, Linked List + AI/ML Foundations",
    days: [
      {
        day: 1, label: "Monday", title: "Week 3 Day 1 — Binary Search + Transformers",
        tasks: [
          { text: "LeetCode: Binary Search (#704) — Easy — template implementation", tag: "dsa" },
          { text: "LeetCode: Search a 2D Matrix (#74) — Medium — flat-index binary search", tag: "dsa" },
          { text: "System Design: REST vs GraphQL vs gRPC — write comparison notes (pros/cons/when to use) (45 min)", tag: "sd" },
          { text: "Behavioral: Map your 3 stories to Amazon LPs (Ownership, Dive Deep, Bias for Action)", tag: "behavioral" },
          { text: "AI: Read 'Transformer architecture explained' — attention mechanism, self-attention, multi-head attention (45 min)", tag: "ai" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 3 Day 2 — Binary Search + Vector Search",
        tasks: [
          { text: "LeetCode: Koko Eating Bananas (#875) — Medium — binary search on answer space", tag: "dsa" },
          { text: "Re-solve: Binary Search (#704) — template from memory", tag: "dsa" },
          { text: "AI: Read about vector similarity search — cosine similarity, dot product, L2 distance. Why it matters for RAG (30 min)", tag: "ai" },
          { text: "AI: Install and experiment with OpenAI or Anthropic API — send your first API call, explore parameters (30 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 3 Day 3 — Rotated Array",
        tasks: [
          { text: "LeetCode: Find Minimum in Rotated Sorted Array (#153) — Medium — rotation detection", tag: "dsa" },
          { text: "LeetCode: Search in Rotated Sorted Array (#33) — Medium — pivoted search", tag: "dsa" },
          { text: "System Design: API versioning strategies + pagination patterns (cursor vs offset) (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 4th STAR story (Technical decision ownership)", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 3 Day 4 — Binary Search + RAG Introduction",
        tasks: [
          { text: "LeetCode: Time Based Key-Value Store (#981) — Medium — binary search on history", tag: "dsa" },
          { text: "LeetCode (stretch): Median of Two Sorted Arrays (#4) — Hard — partition method (60-90 min ok)", tag: "dsa" },
          { text: "AI: Read about RAG (Retrieval-Augmented Generation) — architecture, chunking strategies, retrieval vs generation (45 min)", tag: "ai" },
          { text: "Paper reading: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks' (Lewis et al. 2020) — abstract + intro (25 min)", tag: "paper" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 3 Day 5 — Linked List + Vector DBs",
        tasks: [
          { text: "LeetCode: Reverse Linked List (#206) — Easy — iterative + recursive both", tag: "dsa" },
          { text: "LeetCode: Merge Two Sorted Lists (#21) — Easy — dummy node pattern", tag: "dsa" },
          { text: "LeetCode: Add Two Numbers (#2) — Medium — linked list arithmetic + carry", tag: "dsa" },
          { text: "System Design: API design walkthrough — design an API for a feature you've built at work (45 min)", tag: "sd" },
          { text: "AI: Read about vector databases — Pinecone, Weaviate, ChromaDB, pgvector. When to use which (30 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 3 Day 6 — Linked List Depth + RAG Project Setup",
        tasks: [
          { text: "LeetCode: Reorder List (#143) — Medium — find mid + reverse + merge", tag: "dsa" },
          { text: "LeetCode: Remove Nth Node From End (#19) — Medium — fast/slow pointer", tag: "dsa" },
          { text: "LeetCode: Copy List with Random Pointer (#138) — Medium — hash or interleave", tag: "dsa" },
          { text: "LeetCode: Find the Duplicate Number (#287) — Medium — Floyd's cycle detection in array", tag: "dsa" },
          { text: "AI Project: Set up RAG project repo — FastAPI + ChromaDB + docker-compose scaffold (90 min)", tag: "ai" },
          { text: "AI Project: Implement document ingestion endpoint — upload PDF, chunk text, generate embeddings, store in ChromaDB (90 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 3 Day 7 — Review",
        tasks: [
          { text: "LeetCode: Linked List Cycle (#141) — Easy — Floyd's tortoise and hare", tag: "dsa" },
          { text: "LeetCode: LRU Cache (#146) — Medium — CLASSIC (linked list + hash map)", tag: "dsa" },
          { text: "Re-solve: Search in Rotated (#33) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Reverse Linked List (#206) — both iterative and recursive", tag: "dsa" },
          { text: "Re-solve: Reorder List (#143) — target <25 min", tag: "dsa" },
          { text: "Paper reading: Skim GFS paper abstract + sections 1-2 (30 min evening)", tag: "paper" },
          { text: "Weekly Review: Fill template, save as reviews/week-3.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 4: Pattern Mastery I — Trees + LLM Application Patterns =====
  {
    week: 4,
    theme: "Pattern Mastery I — Trees (BFS/DFS/BST) + LLM Application Patterns",
    days: [
      {
        day: 1, label: "Monday", title: "Week 4 Day 1 — Tree Basics",
        tasks: [
          { text: "LeetCode: Invert Binary Tree (#226) — Easy — recursion basics", tag: "dsa" },
          { text: "LeetCode: Maximum Depth of Binary Tree (#104) — Easy — DFS", tag: "dsa" },
          { text: "System Design: SQL vs NoSQL decision tree — when to pick what + indexing basics (B-tree vs hash) (45 min)", tag: "sd" },
          { text: "Behavioral: Refine story #4, add quantitative results", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 4 Day 2 — Tree DFS + Tool Calling",
        tasks: [
          { text: "LeetCode: Diameter of Binary Tree (#543) — Easy — DFS w/ return value", tag: "dsa" },
          { text: "LeetCode: Balanced Binary Tree (#110) — Easy — DFS height check", tag: "dsa" },
          { text: "AI: Read about LLM tool calling / function calling — OpenAI function calling, Anthropic tool use patterns (45 min)", tag: "ai" },
          { text: "AI: Implement a simple tool-calling loop — LLM decides which function to call, you execute it, return result (60 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 4 Day 3 — Tree Recursion",
        tasks: [
          { text: "LeetCode: Same Tree (#100) — Easy — recursive equality", tag: "dsa" },
          { text: "LeetCode: Subtree of Another Tree (#572) — Easy — recursion + sameTree", tag: "dsa" },
          { text: "System Design: Database replication (sync/async), read replicas, failover (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 5th STAR story (Cross-team collaboration)", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 4 Day 4 — BST + AI Agents",
        tasks: [
          { text: "LeetCode: Lowest Common Ancestor of BST (#235) — Medium — BST property", tag: "dsa" },
          { text: "LeetCode: Binary Tree Level Order Traversal (#102) — Medium — BFS queue", tag: "dsa" },
          { text: "AI: Read about AI agent architectures — ReAct pattern, plan-and-execute, reflection loops (45 min)", tag: "ai" },
          { text: "Paper reading: 'ReAct: Synergizing Reasoning and Acting in Language Models' (Yao et al. 2022) — abstract + method (30 min)", tag: "paper" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 4 Day 5 — BST + Agent Frameworks",
        tasks: [
          { text: "LeetCode: Binary Tree Right Side View (#199) — Medium — BFS last-of-level", tag: "dsa" },
          { text: "System Design: Sharding strategies (range, hash, geo) + consistent hashing intro (45 min)", tag: "sd" },
          { text: "AI: Read about CrewAI or LangGraph — pick one agent framework, read quickstart docs (45 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 4 Day 6 — BST Depth + RAG Project Build",
        tasks: [
          { text: "LeetCode: Count Good Nodes in Binary Tree (#1448) — Medium — DFS w/ max-so-far", tag: "dsa" },
          { text: "LeetCode: Validate Binary Search Tree (#98) — Medium — in-order or min/max bounds", tag: "dsa" },
          { text: "LeetCode: Kth Smallest Element in BST (#230) — Medium — in-order traversal", tag: "dsa" },
          { text: "AI Project: Implement RAG query endpoint — user asks question, retrieve top-k chunks, feed to LLM with context (90 min)", tag: "ai" },
          { text: "AI Project: Add conversation memory — maintain chat history, pass as context to subsequent queries (60 min)", tag: "ai" },
          { text: "System Design: Do your first full design OUT LOUD: URL Shortener (45 min timed + 15 min self-review)", tag: "sd" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 4 Day 7 — Hard + Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Construct Binary Tree from Preorder and Inorder (#105) — Medium", tag: "dsa" },
          { text: "LeetCode: Binary Tree Maximum Path Sum (#124) — Hard — DFS returning max gain", tag: "dsa" },
          { text: "Re-solve: Level Order Traversal (#102) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Validate BST (#98) — target <15 min", tag: "dsa" },
          { text: "MOCK: First Pramp coding mock this week! Schedule it for today or tomorrow.", tag: "mock" },
          { text: "Self-assessment: Could you survive a phone screen TODAY? Rate 1-5. If <3, add 5 hrs DSA next week.", tag: "review" },
          { text: "Paper reading: MapReduce paper — abstract + sections 1-3 (25 min evening)", tag: "paper" },
          { text: "Weekly Review: Fill template, save as reviews/week-4.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 5: Pattern Mastery II — Tries, Heaps, Backtracking + Agent Frameworks =====
  {
    week: 5,
    theme: "Pattern Mastery II — Tries, Heaps, Backtracking + Agent Frameworks & Vibe Coding",
    days: [
      {
        day: 1, label: "Monday", title: "Week 5 Day 1 — Tries",
        tasks: [
          { text: "LeetCode: Implement Trie / Prefix Tree (#208) — Medium — node class design", tag: "dsa" },
          { text: "LeetCode: Design Add and Search Words (#211) — Medium — trie + DFS for wildcard", tag: "dsa" },
          { text: "System Design: Message queues overview — Kafka vs RabbitMQ vs SQS, at-least-once vs exactly-once (45 min)", tag: "sd" },
          { text: "Behavioral: Refine all 5 stories — cut each to under 2 minutes spoken aloud", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 5 Day 2 — Tries Hard + CrewAI Deep Dive",
        tasks: [
          { text: "LeetCode: Word Search II (#212) — Hard — trie + backtracking (take 60 min)", tag: "dsa" },
          { text: "AI: Deep dive into CrewAI — agents, tasks, tools, crews. Follow official tutorial (60 min)", tag: "ai" },
          { text: "AI: Create your first multi-agent crew — 2 agents collaborating on a research task (60 min)", tag: "ai" },
          { text: "Mock debrief: If you did Pramp mock last week, re-solve that problem cleanly today", tag: "mock" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 5 Day 3 — Heaps Basics",
        tasks: [
          { text: "LeetCode: Kth Largest Element in a Stream (#703) — Easy — min-heap of size k", tag: "dsa" },
          { text: "LeetCode: Last Stone Weight (#1046) — Easy — max-heap (negate in Python)", tag: "dsa" },
          { text: "System Design: Pub/sub pattern, backpressure, dead-letter queues (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 6th STAR story (Delivering under tight deadline)", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 5 Day 4 — Heaps + Vibe Coding",
        tasks: [
          { text: "LeetCode: K Closest Points to Origin (#973) — Medium — heap by distance", tag: "dsa" },
          { text: "LeetCode: Kth Largest Element in an Array (#215) — Medium — quickselect or heap", tag: "dsa" },
          { text: "AI: Read about 'vibe coding' — AI-assisted development workflows, Cursor features, prompt-driven coding (30 min)", tag: "ai" },
          { text: "AI: Practice vibe coding — build a small utility (CLI tool or API endpoint) entirely through AI prompts in Cursor (45 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 5 Day 5 — Heaps Advanced",
        tasks: [
          { text: "LeetCode: Task Scheduler (#621) — Medium — heap + cooldown simulation", tag: "dsa" },
          { text: "LeetCode: Merge K Sorted Lists (#23) — Hard — heap merge (asked VERY frequently)", tag: "dsa" },
          { text: "System Design: Full design (timed 45 min): Pastebin — document tradeoffs", tag: "sd" },
          { text: "Paper reading: Dynamo paper — abstract + sections 1-4 (first session, 30 min evening)", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 5 Day 6 — Heaps Hard + Backtracking + Agent Project",
        tasks: [
          { text: "LeetCode: Find Median from Data Stream (#295) — Hard — two heaps", tag: "dsa" },
          { text: "LeetCode: Subsets (#78) — Medium — backtracking template", tag: "dsa" },
          { text: "LeetCode: Combination Sum (#39) — Medium — backtracking with reuse", tag: "dsa" },
          { text: "AI Project: Design multi-agent system — Research Agent (web search) + Analysis Agent (summarize) + Writer Agent (output) (60 min)", tag: "ai" },
          { text: "AI Project: Implement the multi-agent crew with CrewAI — custom tools, sequential tasks (90 min)", tag: "ai" },
          { text: "MOCK: Pramp coding mock #2 this week", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 5 Day 7 — Backtracking + Review",
        tasks: [
          { text: "LeetCode: Permutations (#46) — Medium — backtracking", tag: "dsa" },
          { text: "LeetCode: Word Search (#79) — Medium — DFS + visited grid", tag: "dsa" },
          { text: "LeetCode: Generate Parentheses (#22) — Medium — backtracking template classic", tag: "dsa" },
          { text: "Re-solve: Implement Trie (#208) — target <15 min", tag: "dsa" },
          { text: "Re-solve: K Closest Points (#973) — target <15 min", tag: "dsa" },
          { text: "Paper reading: Dynamo paper — sections 4-6 (second session, 30 min evening)", tag: "paper" },
          { text: "Weekly Review: Fill template, save as reviews/week-5.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 6: Pattern Mastery II — Graphs + AI API Creation =====
  {
    week: 6,
    theme: "Pattern Mastery II — Graphs (BFS/DFS/Topo/Union-Find) + AI API & Deployment",
    days: [
      {
        day: 1, label: "Monday", title: "Week 6 Day 1 — Graph BFS/DFS",
        tasks: [
          { text: "LeetCode: Number of Islands (#200) — Medium — grid DFS/BFS", tag: "dsa" },
          { text: "LeetCode: Clone Graph (#133) — Medium — DFS/BFS with hash map", tag: "dsa" },
          { text: "System Design: Rate limiting algorithms — token bucket, leaky bucket, sliding window (45 min)", tag: "sd" },
          { text: "Behavioral: Refine stories #5 and #6 — tighten action and results sections", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 6 Day 2 — Grid + AI API",
        tasks: [
          { text: "LeetCode: Max Area of Island (#695) — Medium — DFS w/ return count", tag: "dsa" },
          { text: "LeetCode: Pacific Atlantic Water Flow (#417) — Medium — multi-source DFS", tag: "dsa" },
          { text: "AI: Build production FastAPI for AI — streaming responses, async endpoints, proper error handling (60 min)", tag: "ai" },
          { text: "AI: Add API key auth + rate limiting to your FastAPI AI endpoint (30 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 6 Day 3 — Multi-source BFS",
        tasks: [
          { text: "LeetCode: Rotting Oranges (#994) — Medium — multi-source BFS", tag: "dsa" },
          { text: "LeetCode: Walls and Gates (#286) — Medium — multi-source BFS", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Rate Limiter — document 2 algorithms + tradeoffs", tag: "sd" },
          { text: "Estimation drill: How many messages does WhatsApp handle daily? Walk through storage calculation (10 min)", tag: "sd" },
          { text: "Behavioral: Draft 7th STAR story (Mentoring/helping a teammate grow)", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 6 Day 4 — Topological Sort + CI/CD for AI",
        tasks: [
          { text: "LeetCode: Course Schedule (#207) — Medium — cycle detection / topological sort", tag: "dsa" },
          { text: "LeetCode: Course Schedule II (#210) — Medium — return topological order", tag: "dsa" },
          { text: "AI: Write GitHub Actions workflow for AI project — lint, test, build Docker image, push to GHCR (60 min)", tag: "ai" },
          { text: "AI: Add .env management for API keys — dotenv, secrets in CI, never commit keys (30 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 6 Day 5 — Union-Find",
        tasks: [
          { text: "LeetCode: Number of Connected Components (#323) — Medium — union-find", tag: "dsa" },
          { text: "LeetCode: Cheapest Flights Within K Stops (#787) — Medium — modified Dijkstra/Bellman-Ford", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Twitter Feed — fan-out on read vs write", tag: "sd" },
          { text: "Paper reading: Bigtable paper — abstract + sections 1-3 (30 min evening)", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 6 Day 6 — Graph Hard + RAG Polish",
        tasks: [
          { text: "LeetCode: Graph Valid Tree (#261) — Medium — union-find or DFS", tag: "dsa" },
          { text: "LeetCode: Redundant Connection (#684) — Medium — union-find", tag: "dsa" },
          { text: "LeetCode: Word Ladder (#127) — Hard — BFS on word graph", tag: "dsa" },
          { text: "AI Project: Add streaming responses to RAG API — SSE for real-time token output (60 min)", tag: "ai" },
          { text: "AI Project: Add evaluation — test retrieval quality with sample Q&A pairs, measure recall (60 min)", tag: "ai" },
          { text: "MOCK: System design mock (Pramp SD mode) — first SD mock!", tag: "mock" },
          { text: "MOCK: Coding mock (Pramp) — graph or tree problem", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 6 Day 7 — Hard + Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Reconstruct Itinerary (#332) — Hard — Hierholzer / DFS", tag: "dsa" },
          { text: "LeetCode: Network Delay Time (#743) — Medium — Dijkstra", tag: "dsa" },
          { text: "Re-solve: Number of Islands (#200) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Course Schedule (#207) — target <20 min", tag: "dsa" },
          { text: "Self-assessment: Pattern recognition speed improving? If flat, see recovery protocol.", tag: "review" },
          { text: "AI self-check: Can you explain RAG architecture, embeddings, vector search, chunking strategies aloud?", tag: "review" },
          { text: "Weekly Review: Fill template, save as reviews/week-6.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 7: Integration — 1D DP, Intervals + Advanced AI Topics =====
  {
    week: 7,
    theme: "Integration & Depth — 1D DP, Intervals + Advanced AI/ML & Agent Building",
    days: [
      {
        day: 1, label: "Monday", title: "Week 7 Day 1 — DP Basics",
        tasks: [
          { text: "LeetCode: Climbing Stairs (#70) — Easy — Fibonacci pattern", tag: "dsa" },
          { text: "LeetCode: Min Cost Climbing Stairs (#746) — Easy — bottom-up DP", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): WhatsApp/Slack chat — WebSockets, presence, ordering", tag: "sd" },
          { text: "Behavioral: Refine story #7, practice delivering all 7 stories timed (2 min each)", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 7 Day 2 — House Robber + Fine-tuning Concepts",
        tasks: [
          { text: "LeetCode: House Robber (#198) — Medium — pick/skip DP", tag: "dsa" },
          { text: "LeetCode: House Robber II (#213) — Medium — circular variant", tag: "dsa" },
          { text: "AI: Read about fine-tuning vs prompting vs RAG — when to use each approach, cost/quality tradeoffs (45 min)", tag: "ai" },
          { text: "AI: Read about RLHF, DPO, instruction tuning — how ChatGPT/Claude were trained (30 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 7 Day 3 — String DP + Agent Project",
        tasks: [
          { text: "LeetCode: Longest Palindromic Substring (#5) — Medium — expand around center", tag: "dsa" },
          { text: "LeetCode: Palindromic Substrings (#647) — Medium — count via expansion", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Notification System — async queues, retries, priority", tag: "sd" },
          { text: "AI Project: Start Agent project v2 — define a complex multi-agent system (code review agent, research agent, or data pipeline agent) (60 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 7 Day 4 — Classic DP + Guardrails",
        tasks: [
          { text: "LeetCode: Decode Ways (#91) — Medium — DP w/ string parsing edge cases", tag: "dsa" },
          { text: "LeetCode: Coin Change (#322) — Medium — unbounded knapsack", tag: "dsa" },
          { text: "AI: Read about LLM evaluation — BLEU, ROUGE, human eval, LLM-as-judge pattern (30 min)", tag: "ai" },
          { text: "AI: Read about guardrails and safety — content filtering, output validation, prompt injection defense (30 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 7 Day 5 — LIS",
        tasks: [
          { text: "LeetCode: Longest Increasing Subsequence (#300) — Medium — O(n²) DP or patience sort", tag: "dsa" },
          { text: "System Design: Read about consistency models deep — eventual, causal, strong, read-your-writes (45 min)", tag: "sd" },
          { text: "Estimation drill: How many requests/sec does Google Search handle? Walk through calculation aloud (10 min)", tag: "sd" },
          { text: "Paper reading: Raft consensus paper — sections 1-5 (first session, 30 min evening)", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 7 Day 6 — DP + Intervals + Agent Build",
        tasks: [
          { text: "LeetCode: Word Break (#139) — Medium — DP with dictionary", tag: "dsa" },
          { text: "LeetCode: Insert Interval (#57) — Medium — interval merging logic", tag: "dsa" },
          { text: "LeetCode: Merge Intervals (#56) — Medium — sort + merge", tag: "dsa" },
          { text: "AI Project: Implement agent with custom tools — web scraping, API calls, file I/O tools (90 min)", tag: "ai" },
          { text: "AI Project: Add memory/state to agents — conversation history, task context passing between agents (60 min)", tag: "ai" },
          { text: "MOCK: Coding mock (Pramp) — DP or interval problem", tag: "mock" },
          { text: "MOCK: System design mock (Pramp) — chat or notification system", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 7 Day 7 — Intervals + Review",
        tasks: [
          { text: "LeetCode: Non-Overlapping Intervals (#435) — Medium — greedy by end time", tag: "dsa" },
          { text: "LeetCode: Meeting Rooms II (#253) — Medium — heap or chronological sort", tag: "dsa" },
          { text: "Re-solve: House Robber (#198) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Coin Change (#322) — target <20 min", tag: "dsa" },
          { text: "Paper reading: Raft paper — sections 5-8 (second session, 30 min evening)", tag: "paper" },
          { text: "AI: Read LangChain vs LangGraph vs CrewAI vs AutoGen — comparison, when to use which (30 min)", tag: "ai" },
          { text: "Weekly Review: Fill template, save as reviews/week-7.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 8: Integration — 2D DP, Greedy, Bit + AI Deployment =====
  {
    week: 8,
    theme: "Integration & Depth — 2D DP, Greedy, Bit + AI Deployment & ML Foundations",
    days: [
      {
        day: 1, label: "Monday", title: "Week 8 Day 1 — 2D DP",
        tasks: [
          { text: "LeetCode: Unique Paths (#62) — Medium — grid DP", tag: "dsa" },
          { text: "LeetCode: Longest Common Subsequence (#1143) — Medium — classic 2D DP", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): YouTube/Netflix — CDN, transcoding, recommendations", tag: "sd" },
          { text: "Behavioral: Draft 8th STAR story (Biggest technical mistake & what you learned)", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 8 Day 2 — State-machine DP + Deploy",
        tasks: [
          { text: "LeetCode: Best Time to Buy and Sell Stock with Cooldown (#309) — Medium — state-machine DP", tag: "dsa" },
          { text: "LeetCode: Coin Change II (#518) — Medium — unbounded knapsack count", tag: "dsa" },
          { text: "LeetCode: Partition Equal Subset Sum (#416) — Medium — 0/1 knapsack (critical DP variant)", tag: "dsa" },
          { text: "AI: Deploy your RAG API to EC2 — docker-compose on t2.micro, nginx reverse proxy, HTTPS with certbot (90 min)", tag: "ai" },
          { text: "AI: Verify API is publicly accessible, test with curl from different machine (15 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 8 Day 3 — 2D DP + ML Basics",
        tasks: [
          { text: "LeetCode: Target Sum (#494) — Medium — subset sum reformulation", tag: "dsa" },
          { text: "LeetCode: Interleaving String (#97) — Medium — 2D DP", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Instagram — photo storage, feed generation, search", tag: "sd" },
          { text: "AI: ML fundamentals — supervised vs unsupervised, bias-variance, overfitting, train/val/test splits (45 min)", tag: "ai" },
          { text: "Paper reading: 'Chain-of-Thought Prompting Elicits Reasoning' (Wei et al. 2022) — full read (25 min)", tag: "paper" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 8 Day 4 — Greedy + Concurrency",
        tasks: [
          { text: "LeetCode: Maximum Subarray (#53) — Medium — Kadane's algorithm", tag: "dsa" },
          { text: "LeetCode: Jump Game (#55) — Medium — greedy reach", tag: "dsa" },
          { text: "LeetCode: Jump Game II (#45) — Medium — greedy BFS layers", tag: "dsa" },
          { text: "AI: Read about async patterns for AI — concurrent API calls, batch processing, queue-based inference (30 min)", tag: "ai" },
          { text: "Concurrency: Multithreading vs multiprocessing — shared memory, GIL, I/O-bound vs CPU-bound use cases (45 min)", tag: "infra" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 8 Day 5 — Greedy + System Designs",
        tasks: [
          { text: "LeetCode: Gas Station (#134) — Medium — greedy tank", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Dropbox/Google Drive — chunking, dedup, sync conflicts", tag: "sd" },
          { text: "System Design: Uber/Lyft — geo-spatial indexing (geohash/quadtree), proximity matching, ETA, surge pricing (45 min)", tag: "sd" },
          { text: "Estimation drill: How much storage does Uber need for 20M rides/day with GPS traces? (10 min)", tag: "sd" },
          { text: "Paper reading: Kafka paper (LinkedIn 2011) — 25 min evening", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 8 Day 6 — Greedy + Bit + Agent Deploy",
        tasks: [
          { text: "LeetCode: Hand of Straights (#846) — Medium — greedy + counter", tag: "dsa" },
          { text: "LeetCode: Single Number (#136) — Easy — XOR", tag: "dsa" },
          { text: "LeetCode: Number of 1 Bits (#191) — Easy — bit count", tag: "dsa" },
          { text: "LeetCode: Counting Bits (#338) — Easy — DP + bit trick", tag: "dsa" },
          { text: "AI Project: Containerize agent project — Dockerfile + docker-compose with all dependencies (60 min)", tag: "ai" },
          { text: "MOCK: Coding mock — 2D DP or greedy focus", tag: "mock" },
          { text: "MOCK: System design mock — Dropbox or YouTube", tag: "mock" },
          { text: "MOCK: First behavioral mock — deliver all 8 stories to a friend or Claude voice", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 8 Day 7 — Bit + Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Missing Number (#268) — Easy — XOR or sum", tag: "dsa" },
          { text: "LeetCode: Reverse Bits (#190) — Easy — bit manipulation", tag: "dsa" },
          { text: "LeetCode: Sum of Two Integers (#371) — Medium — bitwise add", tag: "dsa" },
          { text: "Re-solve: LCS (#1143) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Maximum Subarray (#53) — target <10 min", tag: "dsa" },
          { text: "Resume: Complete v2 of resume. Send to 2 humans for review this week.", tag: "resume" },
          { text: "Self-assessment: Honest readiness for SDE2 onsite? Rate 1-5. If <3.5, triage next week.", tag: "review" },
          { text: "Weekly Review: Fill template, save as reviews/week-8.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 9: Interview Simulation I — Speed Drills + Advanced AI =====
  {
    week: 9,
    theme: "Interview Simulation I — Speed Drills + Mocks + Advanced AI Topics",
    days: [
      {
        day: 1, label: "Monday", title: "Week 9 Day 1 — Speed Drills",
        tasks: [
          { text: "Re-solve: Longest Substring Without Repeating (#3) — target <15 min", tag: "dsa" },
          { text: "Re-solve: LRU Cache (#146) — target <25 min", tag: "dsa" },
          { text: "System Design: Re-do URL Shortener design — under 40 min, fully articulated aloud", tag: "sd" },
          { text: "Behavioral: Practice 3 stories with a timer — each under 2 min", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 9 Day 2 — Mock Day",
        tasks: [
          { text: "Re-solve: Number of Islands (#200) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Course Schedule (#207) — target <20 min", tag: "dsa" },
          { text: "MOCK: Pramp coding mock", tag: "mock" },
          { text: "Mock debrief: Write top 2 things to improve + re-solve the mock problem", tag: "mock" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 9 Day 3 — Speed + Neural Nets",
        tasks: [
          { text: "Re-solve: Coin Change (#322) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Minimum Window Substring (#76) — target <30 min", tag: "dsa" },
          { text: "System Design: Re-do Twitter Feed design — focus on fan-out tradeoff articulation (45 min)", tag: "sd" },
          { text: "AI: Neural network basics — layers, activation functions, backpropagation intuition, loss functions (45 min)", tag: "ai" },
          { text: "AI: Read about attention mechanism deep dive — Q/K/V matrices, scaled dot-product, why it works (30 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 9 Day 4 — Mock + Advanced RAG",
        tasks: [
          { text: "Re-solve: Merge Intervals (#56) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Kth Largest Element (#215) — target <15 min", tag: "dsa" },
          { text: "MOCK: Pramp coding mock", tag: "mock" },
          { text: "System Design: Search Autocomplete/Typeahead — trie at scale, ranking, precomputation vs real-time (45 min)", tag: "sd" },
          { text: "AI: Advanced RAG techniques — hybrid search, reranking (Cohere), HyDE, parent-child chunking, metadata filtering (45 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 9 Day 5 — Speed + Papers",
        tasks: [
          { text: "Re-solve: Word Search (#79) — target <20 min", tag: "dsa" },
          { text: "System Design: Re-do Notification System — focus on retry/DLQ and priority queue discussion (45 min)", tag: "sd" },
          { text: "Paper reading: 'Attention Is All You Need' (Vaswani et al.) — full read sections 1-5 (45 min)", tag: "paper" },
          { text: "Paper reading: 'GPT-3: Language Models are Few-Shot Learners' (Brown et al.) — abstract + scaling laws (20 min)", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 9 Day 6 — New Problems + AI Capstone Start",
        tasks: [
          { text: "LeetCode (new): Spiral Matrix (#54) — Medium — simulation", tag: "dsa" },
          { text: "LeetCode (new): Set Matrix Zeroes (#73) — Medium — in-place markers", tag: "dsa" },
          { text: "LeetCode: Rotate Image (#48) — Medium — in-place matrix rotation (transpose + reverse)", tag: "dsa" },
          { text: "LeetCode: Minimum Cost to Hire K Workers (#857) — Hard — greedy + heap (Google favorite)", tag: "dsa" },
          { text: "AI Capstone: Design your capstone AI agent system — multi-agent with RAG, tool use, deployed API. Write spec (60 min)", tag: "ai" },
          { text: "AI Capstone: Set up project repo — docker-compose with FastAPI + ChromaDB + Redis + agent framework (90 min)", tag: "ai" },
          { text: "MOCK: System design mock (peer) — pick a design you haven't done live", tag: "mock" },
          { text: "MOCK: System design mock (peer) — different design", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 9 Day 7 — Weak Areas + Review",
        tasks: [
          { text: "Re-solve: 3 problems from your weak-areas log", tag: "dsa" },
          { text: "LeetCode: Race Car (#818) — Hard — BFS/DP (Google interview classic)", tag: "dsa" },
          { text: "System Design: Google Maps — tile serving, route computation, ETA prediction (45 min)", tag: "sd" },
          { text: "Paper reading: 'Toolformer' (Schick et al. 2023) — how LLMs learn to use tools (25 min)", tag: "paper" },
          { text: "AI: Read about model serving patterns — batching, caching, quantization (INT8/INT4), LoRA adapters (30 min)", tag: "ai" },
          { text: "Weekly Review: Fill template, save as reviews/week-9.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 10: Interview Simulation — Hards + AI Capstone Build =====
  {
    week: 10,
    theme: "Interview Simulation — Hard Problems + AI Capstone Build",
    days: [
      {
        day: 1, label: "Monday", title: "Week 10 Day 1 — Hard: Trees",
        tasks: [
          { text: "LeetCode: Serialize and Deserialize Binary Tree (#297) — Hard — tree + parsing", tag: "dsa" },
          { text: "Warm-up: Invert Binary Tree (#226) — Easy — should be instant", tag: "dsa" },
          { text: "System Design: Full mock-style timed run — pick your weakest design, do it fresh (45 min)", tag: "sd" },
          { text: "Behavioral: Full run-through of all 8 stories aloud (timed, record audio if possible)", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 10 Day 2 — Hard: Stack + Mock",
        tasks: [
          { text: "LeetCode: Largest Rectangle in Histogram (#84) — Hard — monotonic stack", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp or interviewing.io)", tag: "mock" },
          { text: "Mock debrief: Write feedback, re-solve, tag weak pattern", tag: "mock" },
          { text: "AI Capstone: Implement core agent logic — primary agent with tool definitions, system prompt, task routing (90 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 10 Day 3 — Hard: DP + Binary Search",
        tasks: [
          { text: "LeetCode: Maximum Profit in Job Scheduling (#1235) — Hard — DP + binary search", tag: "dsa" },
          { text: "Re-solve: Best Time to Buy with Cooldown (#309) — target <25 min", tag: "dsa" },
          { text: "LeetCode: Split Array Largest Sum (#410) — Hard — binary search + greedy (Google)", tag: "dsa" },
          { text: "System Design: Google Docs — CRDTs vs OT, conflict resolution, real-time sync (45 min)", tag: "sd" },
          { text: "AI Capstone: Implement RAG pipeline in capstone — ingest documents, embed, store, retrieve (90 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 10 Day 4 — Hard: Sliding Window + Mock",
        tasks: [
          { text: "LeetCode: Sliding Window Maximum (#239) — Hard — deque technique", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp)", tag: "mock" },
          { text: "Mock debrief: Write feedback, re-solve", tag: "mock" },
          { text: "AI Capstone: Implement multi-agent collaboration — agents calling each other, shared state via Redis (90 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 10 Day 5 — Hard: Matrix + Graph",
        tasks: [
          { text: "LeetCode: Longest Increasing Path in a Matrix (#329) — Hard — DFS + memoization", tag: "dsa" },
          { text: "LeetCode: Critical Connections in a Network (#1192) — Hard — Tarjan's bridges (Google SCC variant)", tag: "dsa" },
          { text: "System Design: Web Crawler at scale — politeness, dedup, URL frontier priority, distributed crawling (45 min)", tag: "sd" },
          { text: "Paper reading: 'The Tail at Scale' — hedged requests, latency at scale (25 min evening)", tag: "paper" },
          { text: "AI Capstone: Add streaming API endpoint + WebSocket for real-time agent responses (60 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 10 Day 6 — Hard: DP + Topo + Deploy ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Edit Distance (#72) — Hard — 2D DP classic", tag: "dsa" },
          { text: "LeetCode: Alien Dictionary (#269) — Hard — topological sort on characters", tag: "dsa" },
          { text: "LeetCode: Minimum Window Subsequence (#727) — Hard — DP sliding window (Google)", tag: "dsa" },
          { text: "MOCK: System design mock — senior-level difficulty", tag: "mock" },
          { text: "AI Capstone: Deploy to EC2 with docker-compose — full stack running publicly (90 min)", tag: "ai" },
          { text: "AI Capstone: Add monitoring — log agent decisions, track token usage, response times (60 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 10 Day 7 — Review",
        tasks: [
          { text: "Re-solve: 3 hard problems from this week (outline approach + code key sections only)", tag: "dsa" },
          { text: "Behavioral: Full story drill — all 8 stories, timed, practice delivery tone", tag: "behavioral" },
          { text: "System Design deep-dive: Pick ONE component (cache layer OR message queue OR DB shard strategy) — design in full detail (30 min)", tag: "sd" },
          { text: "Self-assessment: Mock pass rate >50%? Designs within 45 min? If not, triage.", tag: "review" },
          { text: "Weekly Review: Fill template, save as reviews/week-10.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 11: Interview Simulation II — Weak Area + AI Capstone Polish =====
  {
    week: 11,
    theme: "Interview Simulation II — Weak-Area Drill + AI Capstone Polish & Demo",
    days: [
      {
        day: 1, label: "Monday", title: "Week 11 Day 1 — Weak Area + AI System Design",
        tasks: [
          { text: "LeetCode: Pick 2 problems from your WEAKEST pattern (check weak-areas log)", tag: "dsa" },
          { text: "System Design: Re-do your weakest design from scratch — fully timed (45 min)", tag: "sd" },
          { text: "OOD: Design a Parking Lot system — classes, interfaces, inheritance, patterns (30 min)", tag: "sd" },
          { text: "AI: Read about AI system design patterns — model serving, A/B testing ML, feature stores, ML pipelines (45 min)", tag: "ai" },
          { text: "Behavioral: Map all 8 stories to Amazon LP grid (which LP does each demonstrate?)", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 11 Day 2 — Weak Area + Mock",
        tasks: [
          { text: "LeetCode: 2 more problems from weak pattern", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp or interviewing.io)", tag: "mock" },
          { text: "Mock debrief: Write feedback", tag: "mock" },
          { text: "AI Capstone: Write comprehensive tests — unit tests for agents, integration tests for API, edge cases (60 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 11 Day 3 — Weak Area + Scaling AI",
        tasks: [
          { text: "LeetCode: 2 more problems from SECOND weakest pattern", tag: "dsa" },
          { text: "LeetCode: Swim in Rising Water (#778) — Hard — binary search + BFS/union find (Google)", tag: "dsa" },
          { text: "System Design: Distributed Task Scheduler — DAG execution, retries, priority, multi-tenancy (45 min)", tag: "sd" },
          { text: "Behavioral: Googliness practice — tell stories showing intellectual humility and comfort with ambiguity", tag: "behavioral" },
          { text: "AI: Read about scaling AI — horizontal scaling, GPU serving, model quantization, caching LLM responses, cost optimization (45 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 11 Day 4 — Mock Heavy",
        tasks: [
          { text: "LeetCode: 1 hard from weak area", tag: "dsa" },
          { text: "MOCK: Coding mock", tag: "mock" },
          { text: "MOCK: System design mock (consider paying for Hello Interview here if budget allows)", tag: "mock" },
          { text: "AI Capstone: Add GitHub Actions CI/CD — lint, test, build, deploy on push to main (60 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 11 Day 5 — Backtracking Hard + Papers",
        tasks: [
          { text: "LeetCode: Palindrome Partitioning (#131) — Medium — backtracking + palindrome check", tag: "dsa" },
          { text: "LeetCode: Basic Calculator (#224) — Hard — stack + parsing (Google classic)", tag: "dsa" },
          { text: "System Design: Practice answering 'how would you monitor this?' for 3 past designs (30 min)", tag: "sd" },
          { text: "Behavioral: Googliness — practice 'disagree and commit' stories + 'I was wrong and learned...' stories", tag: "behavioral" },
          { text: "Paper reading: 'Scaling Laws for Neural Language Models' (Kaplan et al.) — why bigger = better + limits (25 min)", tag: "paper" },
          { text: "Paper reading (optional): Spanner paper — TrueTime + globally consistent DB concepts (30 min)", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 11 Day 6 — Hard Backtracking + Capstone Finalize",
        tasks: [
          { text: "LeetCode: N-Queens (#51) — Hard — classic backtracking", tag: "dsa" },
          { text: "LeetCode: Sudoku Solver (#37) — Hard — backtracking + constraints", tag: "dsa" },
          { text: "MOCK: Coding mock (hard difficulty)", tag: "mock" },
          { text: "MOCK: Behavioral mock (full loop: 3 questions back-to-back, 45 min)", tag: "mock" },
          { text: "AI Capstone: Write README with architecture diagram (Mermaid), tech choices, demo instructions (90 min)", tag: "ai" },
          { text: "AI Capstone: Record demo GIF/video showing agent system in action (30 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 11 Day 7 — Review",
        tasks: [
          { text: "Re-solve: 3 problems from this week's weak-area drill", tag: "dsa" },
          { text: "AI Capstone: Final polish — verify deployed URL works, GitHub repo is clean and public", tag: "ai" },
          { text: "Resume: Update with AI capstone bullet + key technologies used", tag: "resume" },
          { text: "Weekly Review: Fill template, save as reviews/week-11.md", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 12: Polish & Application — Light Review + Apply =====
  {
    week: 12,
    theme: "Polish & Application — Maintain Warmth, Ship Applications",
    days: [
      {
        day: 1, label: "Monday", title: "Week 12 Day 1 — Light + Apply",
        tasks: [
          { text: "Re-solve: 1 problem from your strongest area — narrate end-to-end", tag: "dsa" },
          { text: "Applications: Send 5 applications (Tier 3 companies — warm up your pipeline)", tag: "resume" },
          { text: "AI: Vocabulary drill — explain aloud: RAG, embeddings, vector DB, fine-tuning, RLHF, agents, tool calling, prompt injection (30 min)", tag: "ai" },
          { text: "Behavioral: Practice 4 stories aloud (rotate which 4 each day)", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 12 Day 2 — Mock + Apply",
        tasks: [
          { text: "Re-solve: 1 problem from weak areas", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp)", tag: "mock" },
          { text: "Applications: Send 5 more (mix of Tier 2 and Tier 3)", tag: "resume" },
          { text: "AI: Practice explaining your capstone system design in 5 minutes — as if in an interview (rehearse 3x)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 12 Day 3 — Design Re-run + Apply",
        tasks: [
          { text: "Re-solve: 1 favorite design-heavy problem (LRU Cache, Trie, or similar)", tag: "dsa" },
          { text: "System Design: Re-do your BEST design — make it even tighter (45 min)", tag: "sd" },
          { text: "Applications: Send 5 more (include 2 Tier 1)", tag: "resume" },
          { text: "AI: Read 3 AI project READMEs on GitHub — study how they present architecture, demo, and setup (30 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 12 Day 4 — Light + Mock",
        tasks: [
          { text: "LeetCode: 1 easy problem (warmth only) — something simple you enjoy", tag: "dsa" },
          { text: "MOCK: Behavioral mock — full loop, 3 questions (45 min)", tag: "mock" },
          { text: "Applications: Send 5 more (include 3 Tier 1)", tag: "resume" },
          { text: "LinkedIn: Update profile to match resume, add AI capstone project, set 'Open to Work' (private)", tag: "resume" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 12 Day 5 — Light + Paper",
        tasks: [
          { text: "Re-solve: 1 medium from a strong area (15 min max)", tag: "dsa" },
          { text: "System Design: Practice answering 'tell me about a system you designed' with AI capstone (5 min timed)", tag: "sd" },
          { text: "Paper reading: DDIA Ch.9 (Consistency & Consensus) — final synthesis read (45 min)", tag: "paper" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 12 Day 6 — Final Mock Day",
        tasks: [
          { text: "LeetCode: 1 fresh medium — something fun, from your best topic", tag: "dsa" },
          { text: "MOCK: System design mock — treat as your final pre-interview run", tag: "mock" },
          { text: "AI Capstone: Final README touches + write 1 blog post/LinkedIn post about what you built and learned", tag: "ai" },
          { text: "Applications: Send remaining batch (target 25-30 total by end of today)", tag: "resume" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 12 Day 7 — Final Review + Transition",
        tasks: [
          { text: "Weekly Review: Fill FINAL weekly template, save as reviews/week-12.md", tag: "review" },
          { text: "Re-read 01-master-plan.md Section 15 (Final 2-Week Simulation Plan)", tag: "review" },
          { text: "AI self-test: Can you whiteboard RAG architecture, agent patterns, vector search, deployment pipeline from memory?", tag: "review" },
          { text: "SD self-test: Can you do any 3 designs from scratch in 45 min each? If not, mark weak ones for drill.", tag: "review" },
          { text: "Mental prep: You've done 300 hrs of work. You are ready. Sleep early. Simulation starts tomorrow.", tag: "review" },
        ]
      }
    ]
  }
];
