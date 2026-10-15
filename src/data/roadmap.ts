export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Resource = { label: string; url?: string; note?: string };
export type Category = { name: string; level: Level; topics: string[]; resources: Resource[] };
export type Phase = {
  n: number;
  title: string;
  duration: string;
  why: string;
  categories: Category[];
  milestone: string;
};

export const aiRoadmap: Phase[] = [
  {
    n: 1,
    title: "Software Engineering First",
    duration: "2–3 months",
    why: "An AI engineer is a software engineer whose code happens to call a model. Most failed AI projects break on the software, not the model.",
    categories: [
      {
        name: "Python, properly",
        level: "Beginner",
        topics: ["Functions, modules & packages", "Type hints", "Errors & logging", "OOP basics", "Virtual envs (uv / venv)"],
        resources: [
          { label: "The Python Tutorial (official)", url: "https://docs.python.org/3/tutorial/" },
          { label: "Harvard CS50P", url: "https://cs50.harvard.edu/python/" },
        ],
      },
      {
        name: "Git & collaboration",
        level: "Beginner",
        topics: ["Commits & branches", "Pull requests & code review", "Writing a README people read"],
        resources: [{ label: "Pro Git (free book)", url: "https://git-scm.com/book/en/v2" }],
      },
      {
        name: "How the web works",
        level: "Beginner",
        topics: ["HTTP & status codes", "REST & JSON", "Auth & API keys", "Building an API"],
        resources: [
          { label: "MDN: An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
          { label: "FastAPI tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
        ],
      },
      {
        name: "SQL & databases",
        level: "Beginner",
        topics: ["SELECT → JOIN → GROUP BY", "Indexes", "Schema design", "Transactions"],
        resources: [
          { label: "SQLBolt (interactive)", url: "https://sqlbolt.com/" },
          { label: "PostgreSQL tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
        ],
      },
      {
        name: "Shipping basics",
        level: "Intermediate",
        topics: ["Command line", "Testing with pytest", "Docker", "Environment variables & secrets"],
        resources: [
          { label: "MIT: The Missing Semester", url: "https://missing.csail.mit.edu/" },
          { label: "pytest docs", url: "https://docs.pytest.org/" },
          { label: "Docker: Get started", url: "https://docs.docker.com/get-started/" },
        ],
      },
      {
        name: "System design thinking",
        level: "Intermediate",
        topics: ["Latency vs throughput", "Caching", "Queues & background jobs", "Failure modes"],
        resources: [{ label: "The System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }],
      },
    ],
    milestone: "Ship a small FastAPI service with tests, a Dockerfile and a README, deployed somewhere public.",
  },
  {
    n: 2,
    title: "Data Literacy",
    duration: "1–2 months",
    why: "Agents read data, and so do RAG systems. If you can't clean, model and validate data, the model can't save you.",
    categories: [
      {
        name: "Working with data",
        level: "Beginner",
        topics: ["Pandas", "Parquet vs CSV", "DuckDB for analytics", "Data cleaning"],
        resources: [
          { label: "pandas: 10 minutes to pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
          { label: "DuckDB docs", url: "https://duckdb.org/docs/" },
        ],
      },
      {
        name: "Pipelines & data quality",
        level: "Intermediate",
        topics: ["Idempotent, resumable jobs", "Validation & schema checks", "Polite scraping & rate limits", "Lineage"],
        resources: [{ label: "Fundamentals of Data Engineering (Reis & Housley)", note: "book" }],
      },
      {
        name: "Statistics for decisions",
        level: "Beginner",
        topics: ["Distributions", "Sampling & bias", "A/B testing", "Correlation ≠ causation"],
        resources: [{ label: "Khan Academy: Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" }],
      },
    ],
    milestone: "Build a pipeline that pulls two public sources, validates one against the other, and writes Parquet you can query.",
  },
  {
    n: 3,
    title: "Just Enough ML & Deep Learning",
    duration: "2 months",
    why: "You don't need to train frontier models. You do need intuition: overfitting, evaluation, embeddings, and when a simple model wins.",
    categories: [
      {
        name: "Classical ML",
        level: "Intermediate",
        topics: ["Train/val/test & leakage", "Regression & classification", "Trees & ensembles", "Metrics that match the cost of error"],
        resources: [
          { label: "Google Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
          { label: "scikit-learn user guide", url: "https://scikit-learn.org/stable/user_guide.html" },
        ],
      },
      {
        name: "Neural networks intuition",
        level: "Intermediate",
        topics: ["Backprop", "Embeddings", "Attention", "Fine-tuning vs prompting"],
        resources: [
          { label: "3Blue1Brown: Neural Networks", url: "https://www.3blue1brown.com/topics/neural-networks" },
          { label: "Karpathy: Neural Networks, Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html" },
          { label: "fast.ai Practical Deep Learning", url: "https://course.fast.ai/" },
        ],
      },
    ],
    milestone: "Explain to a non-technical manager why your model is good enough, using the cost of a wrong answer instead of accuracy.",
  },
  {
    n: 4,
    title: "Building with LLMs",
    duration: "2 months",
    why: "This is where the job actually is: turning a capable but unreliable model into a dependable product feature.",
    categories: [
      {
        name: "How LLMs work",
        level: "Intermediate",
        topics: ["Tokens & context windows", "Transformers at a high level", "Sampling & temperature", "Model families & trade-offs"],
        resources: [
          { label: "The Illustrated Transformer (Jay Alammar)", url: "https://jalammar.github.io/illustrated-transformer/" },
          { label: "Hugging Face LLM Course", url: "https://huggingface.co/learn/llm-course" },
        ],
      },
      {
        name: "Prompting & structured output",
        level: "Intermediate",
        topics: ["System prompts", "Few-shot examples", "JSON / schema outputs", "Prompt versioning"],
        resources: [
          { label: "Anthropic: Prompt engineering guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          { label: "OpenAI Cookbook", url: "https://cookbook.openai.com/" },
        ],
      },
      {
        name: "Tool calling",
        level: "Intermediate",
        topics: ["Designing tool schemas", "Error handling & retries", "Fewer, better tools"],
        resources: [{ label: "Anthropic: Tool use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" }],
      },
      {
        name: "RAG",
        level: "Advanced",
        topics: ["Embeddings & vector search", "Chunking strategies", "Hybrid search & reranking", "When NOT to use RAG"],
        resources: [{ label: "Hugging Face: Advanced RAG cookbook", url: "https://huggingface.co/learn/cookbook/advanced_rag" }],
      },
      {
        name: "Evals",
        level: "Advanced",
        topics: ["Golden datasets", "LLM-as-judge (with care)", "Regression tests for prompts", "Error analysis"],
        resources: [{ label: "Hamel Husain: Your AI Product Needs Evals", url: "https://hamel.dev/blog/posts/evals/" }],
      },
    ],
    milestone: "Ship a RAG or tool-calling app with an eval set of 30+ cases, and show the score before and after one improvement.",
  },
  {
    n: 5,
    title: "Agents in Production",
    duration: "2–3 months",
    why: "Agents multiply both value and risk. The engineering is in control: what an agent may do, what it must ask about, and how you know what it did.",
    categories: [
      {
        name: "Agent design",
        level: "Advanced",
        topics: ["Workflows vs agents", "Planning & routing", "Memory", "Multi-agent: when it's worth it"],
        resources: [
          { label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" },
          { label: "LangGraph docs", url: "https://langchain-ai.github.io/langgraph/" },
        ],
      },
      {
        name: "Integrations",
        level: "Advanced",
        topics: ["Model Context Protocol (MCP)", "Auth to external systems", "Idempotent actions"],
        resources: [{ label: "Model Context Protocol", url: "https://modelcontextprotocol.io/" }],
      },
      {
        name: "Safety & human-in-the-loop",
        level: "Advanced",
        topics: ["Approval gates for send/spend actions", "Prompt injection", "Grounding: never invent data", "Rules in config, not prompts"],
        resources: [{ label: "OWASP Top 10 for LLM Applications", url: "https://genai.owasp.org/llm-top-10/" }],
      },
      {
        name: "Observability & cost",
        level: "Advanced",
        topics: ["Tracing", "Token & latency budgets", "Model fallbacks", "Caching"],
        resources: [{ label: "Langfuse docs (open-source tracing)", url: "https://langfuse.com/docs" }],
      },
    ],
    milestone: "An agent with at least one approval gate, tracing on every run, and a written cost per task.",
  },
  {
    n: 6,
    title: "Staying Current & Market-Aligned",
    duration: "Ongoing",
    why: "Papers and releases ship every day. The skill is filtering: spend a fixed, small budget each week and turn what you read into something built.",
    categories: [
      {
        name: "Where to start reading",
        level: "Beginner",
        topics: ["Pick 3 sources, not 30", "Skim weekly, deep-read one thing"],
        resources: [
          { label: "Simon Willison's blog: practical LLM notes", url: "https://simonwillison.net/" },
          { label: "The Batch (DeepLearning.AI): weekly news", url: "https://www.deeplearning.ai/the-batch/" },
          { label: "Latent Space: AI engineering podcast & newsletter", url: "https://www.latent.space/" },
          { label: "Anthropic Engineering blog", url: "https://www.anthropic.com/engineering" },
        ],
      },
      {
        name: "Going deeper",
        level: "Intermediate",
        topics: ["Long-form explainers", "System design for ML"],
        resources: [
          { label: "Chip Huyen's blog", url: "https://huyenchip.com/blog/" },
          { label: "Eugene Yan: applied ML & LLM patterns", url: "https://eugeneyan.com/" },
          { label: "Lilian Weng: Lil'Log", url: "https://lilianweng.github.io/" },
          { label: "AI Engineering (Chip Huyen)", note: "book" },
        ],
      },
      {
        name: "Following research",
        level: "Advanced",
        topics: ["Read abstract → figures → conclusion first", "Reproduce one result a month"],
        resources: [
          { label: "Hugging Face Daily Papers", url: "https://huggingface.co/papers" },
          { label: "arXiv cs.CL: recent", url: "https://arxiv.org/list/cs.CL/recent" },
          { label: "Interconnects (Nathan Lambert)", url: "https://www.interconnects.ai/" },
        ],
      },
      {
        name: "Aligning with the market",
        level: "Beginner",
        topics: [
          "Read 20 job posts for your target role; tally the skills",
          "Build one project per top-3 missing skill",
          "Write about what you built, not what you read",
          "Domain beats generic: pick an industry (HR, legal, retail…)",
        ],
        resources: [{ label: "Arena: compare models yourself", url: "https://arena.ai/" }],
      },
    ],
    milestone: "A weekly 2-hour routine: 30 min skim, 60 min deep read or reproduce, 30 min write a post or note.",
  },
];

export const tips = [
  "Build real things with real users, not only notebooks.",
  "Measure before you optimize: evals first, prompt tweaks second.",
  "Ask what a wrong answer costs before you choose a model.",
  "Keep humans in the loop for anything that sends, spends or deletes.",
  "Learn one domain deeply. Business context is the moat.",
];

export const tools = [
  { k: "Build", v: "Python · FastAPI · uv · pytest · Git" },
  { k: "Data", v: "PostgreSQL · DuckDB · Parquet · Pandas" },
  { k: "Models", v: "Claude · Gemini · open-weight models via API" },
  { k: "Agents", v: "Native tool calling · MCP · LangGraph" },
  { k: "Ship", v: "Docker · a PaaS (Railway, Fly, Modal) · tracing" },
];
