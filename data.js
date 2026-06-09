// 12-Week Interview Prep — Task Data
// Target: Mid/Senior AI Engineer + SWE at Big Tech
// Focus: DSA + System Design + AI System Design + AI Engineering (LLMs, RAG, Agents, Evals, MCP)
// Max 5 tasks/day for sustainability. ~25 hrs/week.

const PLAN_DATA = [
  // ===== WEEK 1: Foundation — Arrays & Hashing + LLM Fundamentals =====
  {
    week: 1,
    theme: "Foundation — Arrays, Hashing + LLM Fundamentals",
    days: [
      {
        day: 1, label: "Monday", title: "Week 1 Day 1 — Warm-up",
        tasks: [
          { text: "LeetCode: Contains Duplicate (#217) — Easy — set basics", tag: "dsa" },
          { text: "LeetCode: Valid Anagram (#242) — Easy — hash map counting", tag: "dsa" },
          { text: "System Design: Read System Design Primer Ch.1 — latency vs throughput, vertical vs horizontal scaling (45 min)", tag: "sd" },
          { text: "Behavioral: Write STAR template + draft 1st story (Leadership)", tag: "behavioral" },
          { text: "AI Setup: Get API keys for OpenAI + Anthropic, install Cursor IDE, verify first API call works", tag: "ai" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 1 Day 2",
        tasks: [
          { text: "LeetCode: Two Sum (#1) — Easy — complement hashing", tag: "dsa" },
          { text: "LeetCode: Group Anagrams (#49) — Medium — hash with sorted key", tag: "dsa" },
          { text: "AI: How LLMs work — tokenization, next-token prediction, temperature, context windows, inference vs training (45 min)", tag: "ai" },
          { text: "AI: Explore API parameters hands-on — system prompts, temperature, max_tokens, stop sequences (30 min)", tag: "ai" },
          { text: "Networking: TCP vs UDP — 3-way handshake, reliability, ordering, flow control. When to use each. Resource: Beej's Guide to Network Programming (free) (30 min)", tag: "sd" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 1 Day 3",
        tasks: [
          { text: "LeetCode: Top K Frequent Elements (#347) — Medium — bucket sort / heap", tag: "dsa" },
          { text: "Re-solve: Two Sum — should be <10 min now", tag: "dsa" },
          { text: "System Design: Stateless vs stateful services + CAP theorem basics (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 2nd STAR story (Conflict resolution)", tag: "behavioral" },
          { text: "OS: Processes vs Threads — PCB, context switching, user vs kernel threads. Resource: OSTEP Ch.4-6 (free: pages.cs.wisc.edu/~remzi/OSTEP/) (30 min)", tag: "sd" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 1 Day 4",
        tasks: [
          { text: "LeetCode: Product of Array Except Self (#238) — Medium — prefix/suffix products", tag: "dsa" },
          { text: "Warm-up re-solve: Valid Anagram — target <5 min", tag: "dsa" },
          { text: "AI: Prompt engineering fundamentals — system prompts, few-shot, chain-of-thought, structured output (45 min)", tag: "ai" },
          { text: "AI: Practice structured output — use JSON mode to get reliable structured responses from Claude and GPT (30 min)", tag: "ai" },
          { text: "Backend: How a web request flows end-to-end — DNS → TCP handshake → TLS → HTTP → Load Balancer → App Server → DB → Response. Draw the full diagram (30 min)", tag: "sd" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 1 Day 5",
        tasks: [
          { text: "LeetCode: Valid Sudoku (#36) — Medium — multi-hash validation", tag: "dsa" },
          { text: "System Design: Caching fundamentals — LRU, TTL, cache-aside, write-through (45 min)", tag: "sd" },
          { text: "AI: Read about embeddings — word2vec intuition, sentence embeddings, when to use which model (30 min)", tag: "ai" },
          { text: "AI: Generate embeddings for 10 sentences, compute cosine similarity, understand distance metrics (30 min)", tag: "ai" },
          { text: "Reading: Alex Xu Vol 1 Ch.1 — Scale from Zero to Millions of Users (single server → DB separation → LB → cache → CDN → stateless tier) (45 min)", tag: "sd" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 1 Day 6 — Weekend Depth",
        tasks: [
          { text: "LeetCode: Encode and Decode Strings (#271) — Medium — length-prefix encoding", tag: "dsa" },
          { text: "LeetCode: Longest Consecutive Sequence (#128) — Medium — set + boundary check", tag: "dsa" },
          { text: "AI: Read 'Attention Is All You Need' — self-attention, multi-head attention, positional encoding (60 min read, focus on intuition)", tag: "ai" },
          { text: "System Design: Full read of System Design Primer Ch.2 — load balancing overview (45 min)", tag: "sd" },
          { text: "Code with AI: Solve LeetCode #448 (Find Disappeared Numbers) using Cursor/Copilot — practice prompting for code + verifying suggestions (20 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 1 Day 7 — Review",
        tasks: [
          { text: "Re-solve: Group Anagrams (#49) — target <20 min, narrate aloud", tag: "dsa" },
          { text: "Re-solve: Top K Frequent Elements (#347) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Longest Consecutive Sequence (#128) — target <20 min", tag: "dsa" },
          { text: "Behavioral: Draft 3rd STAR story (Failure/learning)", tag: "behavioral" },
          { text: "Weekly Review: What went well? What's hard? Rate readiness 1-5. Plan next week.", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 2: Foundation — Two Pointers, Sliding Window, Stack + RAG Fundamentals =====
  {
    week: 2,
    theme: "Foundation — Two Pointers, Sliding Window, Stack + RAG Fundamentals",
    days: [
      {
        day: 1, label: "Monday", title: "Week 2 Day 1 — Two Pointers",
        tasks: [
          { text: "LeetCode: Valid Palindrome (#125) — Easy — two pointers basics", tag: "dsa" },
          { text: "LeetCode: Two Sum II (#167) — Medium — sorted-array two pointer", tag: "dsa" },
          { text: "System Design: L4 vs L7 load balancers, round-robin, least-conn, sticky sessions (45 min)", tag: "sd" },
          { text: "Behavioral: Refine Leadership story — add metrics, tighten action section", tag: "behavioral" },
          { text: "Multithreading: Thread lifecycle, race conditions, critical sections, mutex vs semaphore, deadlock (4 conditions). Resource: OSTEP Ch.26-28 (30 min)", tag: "sd" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 2 Day 2 — Two Pointers",
        tasks: [
          { text: "LeetCode: 3Sum (#15) — Medium — sort + two pointer + dedup", tag: "dsa" },
          { text: "Re-solve: Valid Palindrome — should be trivial now", tag: "dsa" },
          { text: "AI: Vector databases overview — Pinecone, ChromaDB, pgvector, Weaviate. When to use which (30 min)", tag: "ai" },
          { text: "AI: RAG architecture — chunking strategies, embedding, retrieval, generation. Draw the full pipeline (45 min)", tag: "ai" },
          { text: "OS: Virtual memory — paging, page tables, TLB, page faults, demand paging. Why processes get isolated address spaces. Resource: OSTEP Ch.15-19 (30 min)", tag: "sd" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 2 Day 3 — Two Pointers + Hard",
        tasks: [
          { text: "LeetCode: Container With Most Water (#11) — Medium — greedy two-pointer", tag: "dsa" },
          { text: "LeetCode: Trapping Rain Water (#42) — Hard — two-pointer or stack (take 60 min, it's ok)", tag: "dsa" },
          { text: "System Design: Caching layers — CDN cache, reverse-proxy cache, application cache, DB cache (45 min)", tag: "sd" },
          { text: "Behavioral: Refine Conflict story — tighten to 2 min spoken", tag: "behavioral" },
          { text: "Networking: DNS resolution end-to-end — recursive vs iterative queries, A/AAAA/CNAME records, TTL. HTTP/1.1 vs HTTP/2 (multiplexing, header compression) (30 min)", tag: "sd" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 2 Day 4 — Sliding Window",
        tasks: [
          { text: "LeetCode: Best Time to Buy and Sell Stock (#121) — Easy — running min", tag: "dsa" },
          { text: "LeetCode: Longest Substring Without Repeating Characters (#3) — Medium — window + set", tag: "dsa" },
          { text: "AI: Build a RAG pipeline from scratch — chunk a doc, embed with OpenAI, store in ChromaDB, query (60 min)", tag: "ai" },
          { text: "AI: Experiment with chunk sizes (200 vs 500 vs 1000 tokens) — observe retrieval quality differences (20 min)", tag: "ai" },
          { text: "Reading: Alex Xu Vol 1 Ch.2 — Back-of-envelope Estimation (latency numbers every programmer should know, QPS calculations, storage estimates) (30 min)", tag: "sd" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 2 Day 5 — Sliding Window",
        tasks: [
          { text: "LeetCode: Longest Repeating Character Replacement (#424) — Medium — window + max freq", tag: "dsa" },
          { text: "System Design: Cache eviction deep-dive — LRU, LFU, TTL, write-through vs write-back (45 min)", tag: "sd" },
          { text: "AI: Hybrid search — combine keyword (BM25) + vector search. Why pure vector isn't enough (30 min read + implement)", tag: "ai" },
          { text: "Code with AI: Use Claude to critique your Trapping Rain Water solution — ask for tighter code + edge cases", tag: "ai" },
          { text: "Backend: ACID properties, transaction isolation levels (Read Uncommitted → Read Committed → Repeatable Read → Serializable). Resource: DDIA Ch.7 or Alex Xu (30 min)", tag: "sd" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 2 Day 6 — Sliding Window Hard + Stack",
        tasks: [
          { text: "LeetCode: Minimum Window Substring (#76) — Hard — window with need-map", tag: "dsa" },
          { text: "LeetCode: Valid Parentheses (#20) — Easy — stack basics", tag: "dsa" },
          { text: "LeetCode: Min Stack (#155) — Medium — auxiliary stack", tag: "dsa" },
          { text: "AI: RAG evaluation — retrieval metrics (MRR, NDCG), test with 5 Q&A pairs, measure recall (45 min)", tag: "ai" },
          { text: "AI: Read about reranking (Cohere Rerank, cross-encoders) — when and why to add a reranker (20 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 2 Day 7 — Stack + Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Daily Temperatures (#739) — Medium — monotonic stack", tag: "dsa" },
          { text: "LeetCode: Evaluate Reverse Polish Notation (#150) — Medium — stack operations", tag: "dsa" },
          { text: "Re-solve: 3Sum (#15) — target <20 min, narrate approach aloud", tag: "dsa" },
          { text: "Re-solve: Longest Substring Without Repeating (#3) — target <15 min", tag: "dsa" },
          { text: "Weekly Review: Rate readiness 1-5. Can you explain RAG pipeline + tradeoffs aloud?", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 3: Binary Search, Linked List + Tool Calling & Agent Patterns =====
  {
    week: 3,
    theme: "Pattern Mastery I — Binary Search, Linked List + Tool Calling & Agent Patterns",
    days: [
      {
        day: 1, label: "Monday", title: "Week 3 Day 1 — Binary Search",
        tasks: [
          { text: "LeetCode: Binary Search (#704) — Easy — template implementation", tag: "dsa" },
          { text: "LeetCode: Search a 2D Matrix (#74) — Medium — flat-index binary search", tag: "dsa" },
          { text: "System Design: REST vs GraphQL vs gRPC — pros/cons/when to use (45 min)", tag: "sd" },
          { text: "AI: LLM tool calling / function calling — OpenAI function calling, Anthropic tool use. How it works under the hood (45 min)", tag: "ai" },
          { text: "Distributed Systems: Consistency models (strong, eventual, causal), partition tolerance. Deep-dive on CAP/PACELC with real examples (Dynamo=AP, Spanner=CP) (30 min)", tag: "sd" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 3 Day 2 — Binary Search",
        tasks: [
          { text: "LeetCode: Koko Eating Bananas (#875) — Medium — binary search on answer space", tag: "dsa" },
          { text: "Re-solve: Binary Search (#704) — template from memory", tag: "dsa" },
          { text: "AI: Implement a tool-calling loop — LLM decides which function to call, you execute it, return result (60 min)", tag: "ai" },
          { text: "Behavioral: Map your 3 stories to Amazon LPs (Ownership, Dive Deep, Bias for Action)", tag: "behavioral" },
          { text: "Multiprocessing: Process creation (fork/exec), IPC mechanisms (pipes, shared memory, message queues, sockets), zombie/orphan processes. Resource: OSTEP Ch.5 (30 min)", tag: "sd" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 3 Day 3 — Rotated Array",
        tasks: [
          { text: "LeetCode: Find Minimum in Rotated Sorted Array (#153) — Medium — rotation detection", tag: "dsa" },
          { text: "LeetCode: Search in Rotated Sorted Array (#33) — Medium — pivoted search", tag: "dsa" },
          { text: "System Design: API versioning strategies + pagination patterns (cursor vs offset) (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 4th STAR story (Technical decision ownership)", tag: "behavioral" },
          { text: "Networking: TCP congestion control (slow start, AIMD, fast retransmit), flow control (sliding window). Why UDP is used for gaming/video/DNS (30 min)", tag: "sd" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 3 Day 4 — Binary Search + Agents",
        tasks: [
          { text: "LeetCode: Time Based Key-Value Store (#981) — Medium — binary search on history", tag: "dsa" },
          { text: "AI: AI agent architectures — ReAct pattern, plan-and-execute, reflection loops. Implement ReAct from scratch (60 min)", tag: "ai" },
          { text: "AI: Read 'ReAct: Synergizing Reasoning and Acting' (Yao et al. 2022) — abstract + method section (25 min)", tag: "ai" },
          { text: "Reading: Alex Xu Vol 1 Ch.3 — A Framework for System Design Interviews (4-step process: understand → high-level → deep-dive → wrap-up) (30 min)", tag: "sd" },
          { text: "Multithreading: Thread pools, producer-consumer pattern, readers-writers problem, condition variables. Write a simple thread pool in Python (45 min)", tag: "sd" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 3 Day 5 — Linked List",
        tasks: [
          { text: "LeetCode: Reverse Linked List (#206) — Easy — iterative + recursive both", tag: "dsa" },
          { text: "LeetCode: Merge Two Sorted Lists (#21) — Easy — dummy node pattern", tag: "dsa" },
          { text: "LeetCode: Add Two Numbers (#2) — Medium — linked list arithmetic + carry", tag: "dsa" },
          { text: "System Design: API design walkthrough — design an API for a feature you've built (45 min)", tag: "sd" },
          { text: "Reading: Alex Xu Vol 1 Ch.4 — Design a Rate Limiter (token bucket, sliding window counter, sliding window log algorithms) (45 min)", tag: "sd" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 3 Day 6 — Linked List Depth",
        tasks: [
          { text: "LeetCode: Reorder List (#143) — Medium — find mid + reverse + merge", tag: "dsa" },
          { text: "LeetCode: Remove Nth Node From End (#19) — Medium — fast/slow pointer", tag: "dsa" },
          { text: "LeetCode: Copy List with Random Pointer (#138) — Medium — hash or interleave", tag: "dsa" },
          { text: "AI: Build multi-tool agent — give LLM 3+ tools (calculator, web search mock, file reader), implement full loop (90 min)", tag: "ai" },
          { text: "Code with AI: Solve Find Duplicate Number (#287) with Copilot — practice narrating while using AI assistance (20 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 3 Day 7 — Review",
        tasks: [
          { text: "LeetCode: Linked List Cycle (#141) — Easy — Floyd's tortoise and hare", tag: "dsa" },
          { text: "LeetCode: LRU Cache (#146) — Medium — CLASSIC (linked list + hash map)", tag: "dsa" },
          { text: "Re-solve: Search in Rotated (#33) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Reverse Linked List (#206) — both iterative and recursive", tag: "dsa" },
          { text: "Weekly Review: Rate readiness 1-5. Can you explain ReAct agent pattern from memory?", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 4: Trees (BFS/DFS/BST) + MCP Protocol & Evals Introduction =====
  {
    week: 4,
    theme: "Pattern Mastery I — Trees (BFS/DFS/BST) + MCP Protocol & Evals Introduction",
    days: [
      {
        day: 1, label: "Monday", title: "Week 4 Day 1 — Tree Basics",
        tasks: [
          { text: "LeetCode: Invert Binary Tree (#226) — Easy — recursion basics", tag: "dsa" },
          { text: "LeetCode: Maximum Depth of Binary Tree (#104) — Easy — DFS", tag: "dsa" },
          { text: "System Design: SQL vs NoSQL decision tree + indexing basics (B-tree vs hash) (45 min)", tag: "sd" },
          { text: "AI: MCP (Model Context Protocol) — what it is, why it matters, how tools connect to LLMs via MCP (30 min read)", tag: "ai" },
          { text: "Behavioral: Refine story #4, add quantitative results", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 4 Day 2 — Tree DFS",
        tasks: [
          { text: "LeetCode: Diameter of Binary Tree (#543) — Easy — DFS w/ return value", tag: "dsa" },
          { text: "LeetCode: Balanced Binary Tree (#110) — Easy — DFS height check", tag: "dsa" },
          { text: "AI: Build a simple MCP tool server — expose 2-3 tools via MCP protocol, connect to Claude Desktop or custom client (60 min)", tag: "ai" },
          { text: "AI: Read about eval fundamentals — why evals matter, assertion-based tests, LLM-as-Judge pattern (30 min)", tag: "ai" },
          { text: "Distributed Systems: Consensus algorithms — Raft (leader election, log replication, safety). Paxos intuition. Why distributed consensus is hard (split-brain). Resource: Raft paper visualization (thesecretlivesofdata.com/raft) (30 min)", tag: "sd" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 4 Day 3 — Tree Recursion",
        tasks: [
          { text: "LeetCode: Same Tree (#100) — Easy — recursive equality", tag: "dsa" },
          { text: "LeetCode: Subtree of Another Tree (#572) — Easy — recursion + sameTree", tag: "dsa" },
          { text: "System Design: Database replication (sync/async), read replicas, failover (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 5th STAR story (Cross-team collaboration)", tag: "behavioral" },
          { text: "OS: I/O models — blocking, non-blocking, I/O multiplexing (select/poll/epoll/kqueue), async I/O. Why Node.js event loop and Go goroutines work. Resource: 'The C10K Problem' article (30 min)", tag: "sd" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 4 Day 4 — BST + Evals",
        tasks: [
          { text: "LeetCode: Lowest Common Ancestor of BST (#235) — Medium — BST property", tag: "dsa" },
          { text: "LeetCode: Binary Tree Level Order Traversal (#102) — Medium — BFS queue", tag: "dsa" },
          { text: "AI: Write assertion-based evals for your RAG pipeline — test 10 queries, check retrieval relevance + answer quality (45 min)", tag: "ai" },
          { text: "AI: Implement LLM-as-Judge — use GPT-4 to evaluate another model's outputs with a rubric (30 min)", tag: "ai" },
          { text: "Distributed Systems: Distributed transactions (2PC, 3PC, Saga pattern), distributed locks (Redlock), idempotency keys. When to use which (30 min)", tag: "sd" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 4 Day 5 — BST Depth",
        tasks: [
          { text: "LeetCode: Binary Tree Right Side View (#199) — Medium — BFS last-of-level", tag: "dsa" },
          { text: "LeetCode: Count Good Nodes in Binary Tree (#1448) — Medium — DFS w/ max-so-far", tag: "dsa" },
          { text: "System Design: Sharding strategies (range, hash, geo) + consistent hashing (45 min)", tag: "sd" },
          { text: "AI: Read 'Chain-of-Thought Prompting Elicits Reasoning' (Wei et al. 2022) — understand why CoT works (20 min)", tag: "ai" },
          { text: "Reading: Alex Xu Vol 1 Ch.5-6 — Consistent Hashing (virtual nodes, rebalancing) + Key-Value Store Design (data partitioning, replication, consistency, failure handling) (45 min)", tag: "sd" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 4 Day 6 — BST + First Mock",
        tasks: [
          { text: "LeetCode: Validate Binary Search Tree (#98) — Medium — in-order or min/max bounds", tag: "dsa" },
          { text: "LeetCode: Kth Smallest Element in BST (#230) — Medium — in-order traversal", tag: "dsa" },
          { text: "LeetCode: Construct Binary Tree from Preorder and Inorder (#105) — Medium", tag: "dsa" },
          { text: "System Design: Do your first full design OUT LOUD: URL Shortener (45 min timed + 15 min self-review)", tag: "sd" },
          { text: "MOCK: Schedule your first Pramp coding mock for this weekend or next week", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 4 Day 7 — Hard + Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Binary Tree Maximum Path Sum (#124) — Hard — DFS returning max gain", tag: "dsa" },
          { text: "Re-solve: Level Order Traversal (#102) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Validate BST (#98) — target <15 min", tag: "dsa" },
          { text: "Self-assessment: Could you survive a phone screen TODAY? Rate 1-5. If <3, add 5 hrs DSA next week.", tag: "review" },
          { text: "Weekly Review: Can you explain MCP, tool calling, evals pipeline aloud? Rate AI knowledge 1-5.", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 5: Tries, Heaps, Backtracking + AI Evals & OOD =====
  {
    week: 5,
    theme: "Pattern Mastery II — Tries, Heaps, Backtracking + AI Evals Deep Dive & OOD",
    days: [
      {
        day: 1, label: "Monday", title: "Week 5 Day 1 — Tries",
        tasks: [
          { text: "LeetCode: Implement Trie / Prefix Tree (#208) — Medium — node class design", tag: "dsa" },
          { text: "LeetCode: Design Add and Search Words (#211) — Medium — trie + DFS for wildcard", tag: "dsa" },
          { text: "System Design: Message queues — Kafka vs RabbitMQ vs SQS, at-least-once vs exactly-once (45 min)", tag: "sd" },
          { text: "AI: Eval pipelines deep-dive — build automated eval suite: assertion tests + LLM-as-Judge + human review workflow (60 min)", tag: "ai" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 5 Day 2 — Tries Hard + Vibe Coding",
        tasks: [
          { text: "LeetCode: Word Search II (#212) — Hard — trie + backtracking (take 60 min)", tag: "dsa" },
          { text: "AI: 'Vibe coding' practice — build a CLI tool entirely through AI prompts in Cursor. Focus on verification + iteration (45 min)", tag: "ai" },
          { text: "Code with AI: Timed coding session — solve a fresh Medium with Copilot in 15 min, practice narrating decisions aloud", tag: "ai" },
          { text: "MOCK: Pramp coding mock (if scheduled from last week)", tag: "mock" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 5 Day 3 — Heaps",
        tasks: [
          { text: "LeetCode: Kth Largest Element in a Stream (#703) — Easy — min-heap of size k", tag: "dsa" },
          { text: "LeetCode: Last Stone Weight (#1046) — Easy — max-heap (negate in Python)", tag: "dsa" },
          { text: "OOD: Design a Parking Lot system — classes, interfaces, patterns. Write code skeleton (45 min)", tag: "sd" },
          { text: "Behavioral: Draft 6th STAR story (Delivering under tight deadline)", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 5 Day 4 — Heaps + Guardrails",
        tasks: [
          { text: "LeetCode: K Closest Points to Origin (#973) — Medium — heap by distance", tag: "dsa" },
          { text: "LeetCode: Kth Largest Element in an Array (#215) — Medium — quickselect or heap", tag: "dsa" },
          { text: "AI: AI safety & guardrails — prompt injection attacks, content filtering, output validation, defense strategies (45 min)", tag: "ai" },
          { text: "AI: Implement guardrails — add input validation + output filtering to your RAG pipeline (30 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 5 Day 5 — Heaps Advanced",
        tasks: [
          { text: "LeetCode: Task Scheduler (#621) — Medium — heap + cooldown simulation", tag: "dsa" },
          { text: "LeetCode: Merge K Sorted Lists (#23) — Hard — heap merge (asked VERY frequently)", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Pastebin — document tradeoffs aloud", tag: "sd" },
          { text: "AI: Read 'Scaling Laws for Neural Language Models' (Kaplan et al.) — why bigger models work, power laws (25 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 5 Day 6 — Heaps Hard + Backtracking",
        tasks: [
          { text: "LeetCode: Find Median from Data Stream (#295) — Hard — two heaps", tag: "dsa" },
          { text: "LeetCode: Subsets (#78) — Medium — backtracking template", tag: "dsa" },
          { text: "LeetCode: Combination Sum (#39) — Medium — backtracking with reuse", tag: "dsa" },
          { text: "OOD: Design a File System (in-memory) — tree of inodes, paths, permissions. Write class skeleton (45 min)", tag: "sd" },
          { text: "MOCK: Pramp coding mock #2", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 5 Day 7 — Backtracking + Review",
        tasks: [
          { text: "LeetCode: Permutations (#46) — Medium — backtracking", tag: "dsa" },
          { text: "LeetCode: Word Search (#79) — Medium — DFS + visited grid", tag: "dsa" },
          { text: "LeetCode: Generate Parentheses (#22) — Medium — backtracking classic", tag: "dsa" },
          { text: "Re-solve: Implement Trie (#208) — target <15 min", tag: "dsa" },
          { text: "Weekly Review: Rate readiness 1-5. Can you whiteboard an eval pipeline from memory?", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 6: Graphs + AI System Design & Multi-Agent Patterns =====
  {
    week: 6,
    theme: "Pattern Mastery II — Graphs (BFS/DFS/Topo) + AI System Design & Multi-Agent Patterns",
    days: [
      {
        day: 1, label: "Monday", title: "Week 6 Day 1 — Graph BFS/DFS",
        tasks: [
          { text: "LeetCode: Number of Islands (#200) — Medium — grid DFS/BFS", tag: "dsa" },
          { text: "LeetCode: Clone Graph (#133) — Medium — DFS/BFS with hash map", tag: "dsa" },
          { text: "System Design: Rate limiting algorithms — token bucket, leaky bucket, sliding window (45 min)", tag: "sd" },
          { text: "AI System Design: Design a document Q&A system (RAG at scale) — chunking, retrieval, reranking, generation, caching. Draw architecture (45 min)", tag: "ai" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 6 Day 2 — Grid Problems + Agents",
        tasks: [
          { text: "LeetCode: Max Area of Island (#695) — Medium — DFS w/ return count", tag: "dsa" },
          { text: "LeetCode: Pacific Atlantic Water Flow (#417) — Medium — multi-source DFS", tag: "dsa" },
          { text: "AI: Multi-agent patterns — orchestrator/worker, sequential pipeline, hierarchical. Implement a 2-agent system from scratch (no framework) (60 min)", tag: "ai" },
          { text: "Behavioral: Refine stories #5 and #6 — tighten to 2 min each", tag: "behavioral" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 6 Day 3 — Multi-source BFS",
        tasks: [
          { text: "LeetCode: Rotting Oranges (#994) — Medium — multi-source BFS", tag: "dsa" },
          { text: "LeetCode: Walls and Gates (#286) — Medium — multi-source BFS", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Rate Limiter — 2 algorithms + tradeoffs", tag: "sd" },
          { text: "Explain drill: Explain your RAG pipeline architecture to an imaginary interviewer — 5 min timed, record yourself", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 6 Day 4 — Topological Sort",
        tasks: [
          { text: "LeetCode: Course Schedule (#207) — Medium — cycle detection / topological sort", tag: "dsa" },
          { text: "LeetCode: Course Schedule II (#210) — Medium — return topological order", tag: "dsa" },
          { text: "AI: Fine-tuning vs RAG vs prompting — when to use each approach, cost/quality/latency tradeoffs. Write a decision tree (45 min)", tag: "ai" },
          { text: "AI System Design: Design a content moderation pipeline with LLMs — multi-stage, human-in-the-loop, latency requirements (30 min sketch)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 6 Day 5 — Union-Find",
        tasks: [
          { text: "LeetCode: Number of Connected Components (#323) — Medium — union-find", tag: "dsa" },
          { text: "LeetCode: Redundant Connection (#684) — Medium — union-find", tag: "dsa" },
          { text: "System Design: Full timed design (45 min): Twitter Feed — fan-out on read vs write", tag: "sd" },
          { text: "AI: Read Applied LLMs guide sections on 'Workflows' and 'Deterministic plans' — flow engineering patterns (30 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 6 Day 6 — Graph Hard + Mocks",
        tasks: [
          { text: "LeetCode: Graph Valid Tree (#261) — Medium — union-find or DFS", tag: "dsa" },
          { text: "LeetCode: Word Ladder (#127) — Hard — BFS on word graph", tag: "dsa" },
          { text: "LeetCode: Cheapest Flights Within K Stops (#787) — Medium — modified Dijkstra/Bellman-Ford", tag: "dsa" },
          { text: "MOCK: System design mock (Pramp SD mode) — first SD mock!", tag: "mock" },
          { text: "MOCK: Coding mock (Pramp) — graph or tree problem", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 6 Day 7 — Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Network Delay Time (#743) — Medium — Dijkstra", tag: "dsa" },
          { text: "Re-solve: Number of Islands (#200) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Course Schedule (#207) — target <20 min", tag: "dsa" },
          { text: "Self-assessment: Pattern recognition improving? Can you explain AI System Design for RAG + moderation?", tag: "review" },
          { text: "Weekly Review: Rate DSA 1-5, SD 1-5, AI 1-5. Identify weakest area.", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 7: 1D DP, Intervals + Advanced RAG & Streaming =====
  {
    week: 7,
    theme: "Integration — 1D DP, Intervals + Advanced RAG, Streaming & AI Deployment",
    days: [
      {
        day: 1, label: "Monday", title: "Week 7 Day 1 — DP Basics",
        tasks: [
          { text: "LeetCode: Climbing Stairs (#70) — Easy — Fibonacci pattern", tag: "dsa" },
          { text: "LeetCode: Min Cost Climbing Stairs (#746) — Easy — bottom-up DP", tag: "dsa" },
          { text: "System Design: Full timed (45 min): WhatsApp/Slack chat — WebSockets, presence, ordering", tag: "sd" },
          { text: "AI: Advanced RAG — HyDE, parent-child chunking, metadata filtering, query rewriting. Pick 2 and implement (60 min)", tag: "ai" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 7 Day 2 — House Robber",
        tasks: [
          { text: "LeetCode: House Robber (#198) — Medium — pick/skip DP", tag: "dsa" },
          { text: "LeetCode: House Robber II (#213) — Medium — circular variant", tag: "dsa" },
          { text: "AI: Streaming responses — implement SSE (Server-Sent Events) for real-time token output from LLM (45 min)", tag: "ai" },
          { text: "AI: LLM caching strategies — semantic caching, exact match, cost optimization at scale (30 min read)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 7 Day 3 — String DP",
        tasks: [
          { text: "LeetCode: Longest Palindromic Substring (#5) — Medium — expand around center", tag: "dsa" },
          { text: "LeetCode: Palindromic Substrings (#647) — Medium — count via expansion", tag: "dsa" },
          { text: "System Design: Full timed (45 min): Notification System — async queues, retries, priority", tag: "sd" },
          { text: "Behavioral: Refine all stories — cut each to under 2 minutes spoken. Practice delivery.", tag: "behavioral" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 7 Day 4 — Classic DP + Model Serving",
        tasks: [
          { text: "LeetCode: Decode Ways (#91) — Medium — DP w/ string parsing edge cases", tag: "dsa" },
          { text: "LeetCode: Coin Change (#322) — Medium — unbounded knapsack", tag: "dsa" },
          { text: "AI: Model serving patterns — batching, quantization (INT8/INT4), LoRA adapters, cost optimization (45 min)", tag: "ai" },
          { text: "AI System Design: Design an AI coding assistant — completion, chat, context retrieval, latency budget (30 min sketch)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 7 Day 5 — LIS + OOD",
        tasks: [
          { text: "LeetCode: Longest Increasing Subsequence (#300) — Medium — O(n²) DP or patience sort", tag: "dsa" },
          { text: "System Design: Consistency models — eventual, causal, strong, read-your-writes (45 min)", tag: "sd" },
          { text: "OOD: Design an LRU Cache as a class — with get/put, doubly linked list + hashmap, handle eviction (30 min)", tag: "sd" },
          { text: "Explain drill: Explain your multi-agent system design to imaginary interviewer — 5 min timed", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 7 Day 6 — DP + Intervals + Mocks",
        tasks: [
          { text: "LeetCode: Word Break (#139) — Medium — DP with dictionary", tag: "dsa" },
          { text: "LeetCode: Insert Interval (#57) — Medium — interval merging logic", tag: "dsa" },
          { text: "LeetCode: Merge Intervals (#56) — Medium — sort + merge", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp) — DP or interval problem", tag: "mock" },
          { text: "MOCK: System design mock — chat or notification system", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 7 Day 7 — Intervals + Review",
        tasks: [
          { text: "LeetCode: Non-Overlapping Intervals (#435) — Medium — greedy by end time", tag: "dsa" },
          { text: "LeetCode: Meeting Rooms II (#253) — Medium — heap or chronological sort", tag: "dsa" },
          { text: "Re-solve: House Robber (#198) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Coin Change (#322) — target <20 min", tag: "dsa" },
          { text: "Weekly Review: Rate readiness. Can you do a full AI system design (RAG at scale) in 30 min aloud?", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 8: 2D DP, Greedy, Bit + AI Capstone Start + BEGIN APPLICATIONS =====
  {
    week: 8,
    theme: "Integration — 2D DP, Greedy, Bit + AI Capstone Start + Begin Applications",
    days: [
      {
        day: 1, label: "Monday", title: "Week 8 Day 1 — 2D DP",
        tasks: [
          { text: "LeetCode: Unique Paths (#62) — Medium — grid DP", tag: "dsa" },
          { text: "LeetCode: Longest Common Subsequence (#1143) — Medium — classic 2D DP", tag: "dsa" },
          { text: "System Design: Full timed (45 min): YouTube/Netflix — CDN, transcoding, recommendations", tag: "sd" },
          { text: "AI Capstone: Design your capstone — multi-tool agent with RAG + evals + streaming API. Write 1-page spec (45 min)", tag: "ai" },
          { text: "Applications: Update resume with AI skills. Send 3 applications (Tier 3 companies — warm up pipeline)", tag: "resume" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 8 Day 2 — State-machine DP",
        tasks: [
          { text: "LeetCode: Best Time to Buy and Sell Stock with Cooldown (#309) — Medium — state-machine DP", tag: "dsa" },
          { text: "LeetCode: Coin Change II (#518) — Medium — unbounded knapsack count", tag: "dsa" },
          { text: "AI Capstone: Set up project — FastAPI + vector store + agent loop. Implement document ingestion endpoint (90 min)", tag: "ai" },
          { text: "Behavioral: Draft 7th STAR story (Mentoring a teammate)", tag: "behavioral" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 8 Day 3 — 2D DP + AI System Design",
        tasks: [
          { text: "LeetCode: Target Sum (#494) — Medium — subset sum reformulation", tag: "dsa" },
          { text: "LeetCode: Partition Equal Subset Sum (#416) — Medium — 0/1 knapsack", tag: "dsa" },
          { text: "System Design: Full timed (45 min): Instagram — photo storage, feed generation, search", tag: "sd" },
          { text: "AI System Design: Design a real-time recommendation system with LLM reranking — data pipeline, feature store, serving (45 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 8 Day 4 — Greedy",
        tasks: [
          { text: "LeetCode: Maximum Subarray (#53) — Medium — Kadane's algorithm", tag: "dsa" },
          { text: "LeetCode: Jump Game (#55) — Medium — greedy reach", tag: "dsa" },
          { text: "LeetCode: Jump Game II (#45) — Medium — greedy BFS layers", tag: "dsa" },
          { text: "AI: Async patterns for LLM apps — concurrent API calls, streaming, batch processing, queue-based inference (45 min)", tag: "ai" },
          { text: "Applications: Send 3 more applications (Tier 2/3 mix)", tag: "resume" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 8 Day 5 — Greedy + System Design",
        tasks: [
          { text: "LeetCode: Gas Station (#134) — Medium — greedy tank", tag: "dsa" },
          { text: "System Design: Full timed (45 min): Uber/Lyft — geohash, proximity matching, ETA, surge pricing", tag: "sd" },
          { text: "System Design: Full timed (45 min): Dropbox/Google Drive — chunking, dedup, sync conflicts", tag: "sd" },
          { text: "AI: Read 'Applied LLMs' guide sections on Operational + Strategy — how teams ship AI products (30 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 8 Day 6 — Greedy + Bit + Mocks",
        tasks: [
          { text: "LeetCode: Hand of Straights (#846) — Medium — greedy + counter", tag: "dsa" },
          { text: "LeetCode: Single Number (#136) — Easy — XOR", tag: "dsa" },
          { text: "LeetCode: Counting Bits (#338) — Easy — DP + bit trick", tag: "dsa" },
          { text: "MOCK: Coding mock — DP or greedy focus", tag: "mock" },
          { text: "MOCK: System design mock — Uber or YouTube", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 8 Day 7 — Review ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Sum of Two Integers (#371) — Medium — bitwise add", tag: "dsa" },
          { text: "Re-solve: LCS (#1143) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Maximum Subarray (#53) — target <10 min", tag: "dsa" },
          { text: "Self-assessment: Honest readiness for onsite? Rate 1-5. If <3.5, triage next week.", tag: "review" },
          { text: "Weekly Review: Application count? Mock pass rate? AI capstone progress?", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 9: Interview Simulation — Speed Drills + AI Capstone Build + Applications =====
  {
    week: 9,
    theme: "Interview Simulation — Speed Drills + AI Capstone Build + Applications",
    days: [
      {
        day: 1, label: "Monday", title: "Week 9 Day 1 — Speed Drills",
        tasks: [
          { text: "Re-solve: Longest Substring Without Repeating (#3) — target <15 min", tag: "dsa" },
          { text: "Re-solve: LRU Cache (#146) — target <25 min", tag: "dsa" },
          { text: "System Design: Re-do URL Shortener — under 40 min, fully articulated aloud", tag: "sd" },
          { text: "AI Capstone: Implement RAG query endpoint with streaming + reranking (90 min)", tag: "ai" },
          { text: "Applications: Send 5 applications (include 1-2 Tier 1)", tag: "resume" },
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
        day: 3, label: "Wednesday", title: "Week 9 Day 3 — Speed + AI System Design",
        tasks: [
          { text: "Re-solve: Coin Change (#322) — target <20 min", tag: "dsa" },
          { text: "Re-solve: Minimum Window Substring (#76) — target <30 min", tag: "dsa" },
          { text: "System Design: Re-do Twitter Feed — focus on fan-out tradeoff articulation (45 min)", tag: "sd" },
          { text: "AI System Design: Design a search autocomplete with LLM — trie at scale + LLM reranking + personalization (45 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 9 Day 4 — Mock + Capstone",
        tasks: [
          { text: "Re-solve: Merge Intervals (#56) — target <15 min", tag: "dsa" },
          { text: "Re-solve: Kth Largest Element (#215) — target <15 min", tag: "dsa" },
          { text: "MOCK: Pramp coding mock", tag: "mock" },
          { text: "AI Capstone: Add eval suite — 10+ test cases, LLM-as-Judge scoring, track metrics over time (60 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 9 Day 5 — Speed + Explain",
        tasks: [
          { text: "Re-solve: Word Search (#79) — target <20 min", tag: "dsa" },
          { text: "System Design: Re-do Notification System — retry/DLQ + priority queue (45 min)", tag: "sd" },
          { text: "Explain drill: Practice explaining your AI capstone in 5 min — architecture, tradeoffs, eval results. Record yourself.", tag: "ai" },
          { text: "Applications: Send 5 more applications (include 2 Tier 1)", tag: "resume" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 9 Day 6 — New Hards + AI Capstone",
        tasks: [
          { text: "LeetCode: Spiral Matrix (#54) — Medium — simulation", tag: "dsa" },
          { text: "LeetCode: Rotate Image (#48) — Medium — transpose + reverse", tag: "dsa" },
          { text: "AI Capstone: Add MCP tool server to capstone — expose tools via MCP, connect agent (60 min)", tag: "ai" },
          { text: "MOCK: System design mock — pick a design you haven't done live", tag: "mock" },
          { text: "MOCK: AI system design mock (peer) — design a chatbot for enterprise docs", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 9 Day 7 — Weak Areas + Review",
        tasks: [
          { text: "Re-solve: 3 problems from your weak-areas log", tag: "dsa" },
          { text: "AI System Design: Design Google Maps AI features — route optimization with ML, ETA prediction, LLM for natural language directions (45 min)", tag: "ai" },
          { text: "AI: RLHF, DPO, instruction tuning — how ChatGPT/Claude were trained. Be able to explain this in interview (30 min)", tag: "ai" },
          { text: "Weekly Review: Application count (target 15+ by now). Mock pass rate. Capstone status.", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 10: Hard Problems + AI Capstone Deploy + Applications =====
  {
    week: 10,
    theme: "Interview Simulation — Hard Problems + AI Capstone Deploy + Applications",
    days: [
      {
        day: 1, label: "Monday", title: "Week 10 Day 1 — Hard: Trees",
        tasks: [
          { text: "LeetCode: Serialize and Deserialize Binary Tree (#297) — Hard — tree + parsing", tag: "dsa" },
          { text: "System Design: Full timed — pick your weakest design, do it fresh (45 min)", tag: "sd" },
          { text: "Behavioral: Full run-through of all 7 stories aloud (timed, record audio)", tag: "behavioral" },
          { text: "Applications: Send 5 applications (include 3 Tier 1)", tag: "resume" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 10 Day 2 — Hard: Stack + Mock",
        tasks: [
          { text: "LeetCode: Largest Rectangle in Histogram (#84) — Hard — monotonic stack", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp or interviewing.io)", tag: "mock" },
          { text: "Mock debrief: Write feedback, re-solve, tag weak pattern", tag: "mock" },
          { text: "AI Capstone: Deploy to Vercel/Railway — full stack running publicly, verify API works (60 min)", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 10 Day 3 — Hard: DP",
        tasks: [
          { text: "LeetCode: Maximum Profit in Job Scheduling (#1235) — Hard — DP + binary search", tag: "dsa" },
          { text: "LeetCode: Edit Distance (#72) — Hard — 2D DP classic", tag: "dsa" },
          { text: "System Design: Google Docs — CRDTs vs OT, conflict resolution, real-time sync (45 min)", tag: "sd" },
          { text: "AI System Design: Design an AI-powered code review system — diff analysis, context retrieval, suggestion generation (45 min)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 10 Day 4 — Hard: Sliding Window + Mock",
        tasks: [
          { text: "LeetCode: Sliding Window Maximum (#239) — Hard — deque technique", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp)", tag: "mock" },
          { text: "Mock debrief: Write feedback, re-solve", tag: "mock" },
          { text: "AI Capstone: Write comprehensive tests — unit tests for agent logic, integration tests for API (45 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 10 Day 5 — Hard: Graph",
        tasks: [
          { text: "LeetCode: Longest Increasing Path in a Matrix (#329) — Hard — DFS + memoization", tag: "dsa" },
          { text: "LeetCode: Alien Dictionary (#269) — Hard — topological sort on characters", tag: "dsa" },
          { text: "System Design: Web Crawler at scale — politeness, dedup, URL frontier, distributed (45 min)", tag: "sd" },
          { text: "Applications: Send 5 more (Tier 1 focus)", tag: "resume" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 10 Day 6 — Hard: DP ★ CHECKPOINT",
        tasks: [
          { text: "LeetCode: Split Array Largest Sum (#410) — Hard — binary search + greedy", tag: "dsa" },
          { text: "LeetCode: Minimum Window Subsequence (#727) — Hard — DP sliding window", tag: "dsa" },
          { text: "MOCK: System design mock — senior-level difficulty", tag: "mock" },
          { text: "MOCK: AI system design mock — design a fraud detection system with LLM + ML pipeline", tag: "mock" },
          { text: "AI Capstone: Add monitoring — log agent decisions, track token usage, response times (45 min)", tag: "ai" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 10 Day 7 — Review",
        tasks: [
          { text: "Re-solve: 2 hard problems from this week — outline approach + code key sections", tag: "dsa" },
          { text: "Behavioral: Full story drill — all stories timed, practice delivery tone", tag: "behavioral" },
          { text: "Self-assessment: Mock pass rate >50%? Designs within 45 min? AI capstone deployed?", tag: "review" },
          { text: "Weekly Review: Application count (target 25+). Update LinkedIn with AI project.", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 11: Weak-Area Drill + Final Mocks + Applications Heavy =====
  {
    week: 11,
    theme: "Final Push — Weak-Area Drill + Heavy Mocks + Applications",
    days: [
      {
        day: 1, label: "Monday", title: "Week 11 Day 1 — Weak Area",
        tasks: [
          { text: "LeetCode: Pick 2 problems from your WEAKEST pattern (check weak-areas log)", tag: "dsa" },
          { text: "System Design: Re-do your weakest design from scratch — fully timed (45 min)", tag: "sd" },
          { text: "AI System Design: Design a multi-tenant AI platform — isolation, rate limiting, model routing, cost allocation (45 min)", tag: "ai" },
          { text: "Behavioral: Map all stories to Amazon LP grid. Which LP does each demonstrate?", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 11 Day 2 — Mock Heavy",
        tasks: [
          { text: "LeetCode: 2 more problems from weak pattern", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp or interviewing.io)", tag: "mock" },
          { text: "Mock debrief: Write feedback, tag weak pattern", tag: "mock" },
          { text: "Applications: Send 5 applications (all Tier 1 now)", tag: "resume" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 11 Day 3 — Weak Area + Hard",
        tasks: [
          { text: "LeetCode: 2 problems from SECOND weakest pattern", tag: "dsa" },
          { text: "LeetCode: Basic Calculator (#224) — Hard — stack + parsing (Google classic)", tag: "dsa" },
          { text: "System Design: Distributed Task Scheduler — DAG execution, retries, priority (45 min)", tag: "sd" },
          { text: "Explain drill: Practice 'tell me about a system you designed' with AI capstone — 5 min timed, 3 reps", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 11 Day 4 — Mock Double",
        tasks: [
          { text: "LeetCode: 1 hard from weak area", tag: "dsa" },
          { text: "MOCK: Coding mock (hard difficulty)", tag: "mock" },
          { text: "MOCK: System design mock", tag: "mock" },
          { text: "AI Capstone: Final polish — README with architecture diagram (Mermaid), setup instructions, demo (60 min)", tag: "ai" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 11 Day 5 — Backtracking Hard",
        tasks: [
          { text: "LeetCode: N-Queens (#51) — Hard — classic backtracking", tag: "dsa" },
          { text: "LeetCode: Palindrome Partitioning (#131) — Medium — backtracking + palindrome check", tag: "dsa" },
          { text: "System Design: Practice 'how would you monitor this?' for 3 past designs (30 min)", tag: "sd" },
          { text: "Behavioral: Practice 'disagree and commit' + 'I was wrong and learned...' stories", tag: "behavioral" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 11 Day 6 — Full Mock Day",
        tasks: [
          { text: "MOCK: Coding mock (hard) — simulate real onsite timing", tag: "mock" },
          { text: "MOCK: System design mock — senior-level, 45 min strict", tag: "mock" },
          { text: "MOCK: Behavioral mock (full loop: 3 questions back-to-back, 45 min)", tag: "mock" },
          { text: "MOCK: AI system design mock — design a system the interviewer picks (practice handling unknown prompts)", tag: "mock" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 11 Day 7 — Review",
        tasks: [
          { text: "Re-solve: 3 problems from this week's weak-area drill", tag: "dsa" },
          { text: "AI Capstone: Verify deployed URL works, GitHub repo is clean and public, README is polished", tag: "ai" },
          { text: "Resume: Final resume version — AI capstone bullet + all key technologies", tag: "resume" },
          { text: "Weekly Review: Mock pass rate? Weakest remaining area? Application responses coming in?", tag: "review" },
        ]
      }
    ]
  },
  // ===== WEEK 12: Polish & Application — Maintain Warmth + Ship Applications =====
  {
    week: 12,
    theme: "Polish & Application — Maintain Warmth, Ship Applications, Transition to Interviews",
    days: [
      {
        day: 1, label: "Monday", title: "Week 12 Day 1 — Light + Apply",
        tasks: [
          { text: "Re-solve: 1 problem from strongest area — narrate end-to-end in 15 min", tag: "dsa" },
          { text: "Applications: Send 5 applications (all Tier 1)", tag: "resume" },
          { text: "AI vocabulary drill: Explain aloud — RAG, embeddings, MCP, evals, RLHF, agents, tool calling, prompt injection, guardrails (15 min)", tag: "ai" },
          { text: "Behavioral: Practice 4 stories aloud (rotate which 4 each day)", tag: "behavioral" },
        ]
      },
      {
        day: 2, label: "Tuesday", title: "Week 12 Day 2 — Mock + Apply",
        tasks: [
          { text: "Re-solve: 1 problem from weak areas", tag: "dsa" },
          { text: "MOCK: Coding mock (Pramp)", tag: "mock" },
          { text: "Applications: Send 5 more", tag: "resume" },
          { text: "AI: Practice explaining capstone in 5 min — as if in interview. Rehearse 3x with different emphasis.", tag: "ai" },
        ]
      },
      {
        day: 3, label: "Wednesday", title: "Week 12 Day 3 — Design + Apply",
        tasks: [
          { text: "Re-solve: 1 design-heavy problem (LRU Cache or Trie)", tag: "dsa" },
          { text: "System Design: Re-do your BEST design — make it tighter (45 min)", tag: "sd" },
          { text: "Applications: Send 5 more (Tier 1 focus)", tag: "resume" },
          { text: "AI System Design: Re-do your best AI design — RAG at scale or recommendation system (30 min, should be smooth now)", tag: "ai" },
        ]
      },
      {
        day: 4, label: "Thursday", title: "Week 12 Day 4 — Light + Behavioral Mock",
        tasks: [
          { text: "LeetCode: 1 easy problem for warmth — something simple you enjoy", tag: "dsa" },
          { text: "MOCK: Behavioral mock — full loop, 3 questions (45 min)", tag: "mock" },
          { text: "Applications: Send remaining batch", tag: "resume" },
          { text: "LinkedIn: Update profile, add AI capstone, set 'Open to Work' (private)", tag: "resume" },
        ]
      },
      {
        day: 5, label: "Friday", title: "Week 12 Day 5 — Light",
        tasks: [
          { text: "Re-solve: 1 medium from strong area (15 min max)", tag: "dsa" },
          { text: "System Design: Practice 'tell me about a system you designed' — both traditional SD and AI capstone (5 min each)", tag: "sd" },
          { text: "Code with AI: Final practice — solve a fresh problem with Copilot while narrating (15 min)", tag: "ai" },
        ]
      },
      {
        day: 6, label: "Saturday", title: "Week 12 Day 6 — Final Mock Day",
        tasks: [
          { text: "MOCK: System design mock — final pre-interview run", tag: "mock" },
          { text: "MOCK: AI system design mock — final run", tag: "mock" },
          { text: "AI Capstone: Write 1 blog post/LinkedIn post about what you built and learned", tag: "ai" },
          { text: "Self-assessment: Would you hire yourself? Rate each area 1-5: DSA, SD, AI, Behavioral.", tag: "review" },
        ]
      },
      {
        day: 7, label: "Sunday", title: "Week 12 Day 7 — Final Review + Transition",
        tasks: [
          { text: "AI self-test: Whiteboard RAG architecture, agent patterns, MCP, eval pipeline, streaming from memory", tag: "review" },
          { text: "SD self-test: Can you do any 3 designs from scratch in 45 min each? Mark weak ones.", tag: "review" },
          { text: "DSA self-test: Pick 3 random mediums — can you solve all in <20 min each?", tag: "review" },
          { text: "Mental prep: You've done the work. Review your growth. Sleep early. Real interviews start this week.", tag: "review" },
          { text: "Final Review: Total applications sent (target 30-40). Responses? Schedule interviews.", tag: "review" },
        ]
      }
    ]
  }
];
