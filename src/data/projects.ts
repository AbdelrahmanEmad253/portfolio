export type Project = {
  slug: string;
  title: string;
  kind: "Production · NDA" | "Graduation project" | "Research · in progress" | "Personal" | "Teaching case" | "Internship";
  when: string;
  summary: string;
  role: string;
  points: string[];
  stack: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hr-agent",
    title: "Saudi-market HR Agent",
    kind: "Production · NDA",
    when: "2026",
    summary:
      "A conversational HR agent covering the employee lifecycle, from workforce planning and hiring to offboarding, built for Saudi labor rules.",
    role: "Co-builder. I wrote most of it, across the architecture, tools, business rules and tests.",
    points: [
      "Large tool catalog grouped by HR department behind a single agent entrypoint",
      "Human approval before any email is sent or money is committed; never invents candidate data",
      "Statutory figures live in a human-verified jurisdiction config layer, not in code or prompts",
      "Layered design (core → business rules → domain → services) with offline tests",
    ],
    stack: ["Python", "LLM tool-calling", "Agent SDK", "Mailbox integration", "pytest"],
    featured: true,
  },
  {
    slug: "market-data-pipeline",
    title: "Market-Data Pipeline for an AI Marketing Agent",
    kind: "Production · NDA",
    when: "2026",
    summary:
      "The data layer behind a MENA marketing agent: public market size, trends, news, events, tenders and points-of-interest data collected, validated and served to the agent.",
    role: "Sole builder of the pipeline; co-builder of the agent itself.",
    points: [
      "One standalone collector per source, organized by marketing function (strategy, brand, content, paid, web, analytics)",
      "Multi-million-row Parquet store queried by the agent through DuckDB",
      "Resumable runs: checkpoints, lock files, atomic writes, test mode by default",
      "Polite collection: jittered rate limits, stop-on-block, no login-wall circumvention",
      "Cross-source validation between overlapping public datasets; an LLM-audited build-and-review loop",
    ],
    stack: ["Python 3.12", "uv", "DuckDB", "Parquet", "selectolax", "pytest"],
    featured: true,
  },
  {
    slug: "learnova",
    title: "LearNova: AI Adaptive Learning Platform",
    kind: "Graduation project",
    when: "Jun 2025 – Jun 2026",
    summary:
      "A psychometric and cognitive diagnostic routes each learner into a specialization, then content format, difficulty and pacing adapt to how they engage. An AI mentor tracks sentiment and cognitive load to flag burnout early.",
    role: "Team Lead & Scrum Master (team of 4). Owned all data engineering and the database, the AI scoring and insight features, and every piece of documentation, including the thesis.",
    points: [
      "Diagnostic and compatibility engine: personality, learning style, aptitude and interest scoring → track routing",
      "AI mentor signals: sentiment plus cognitive load → burnout-risk flags for human follow-up",
      "LLM-generated daily insights for admins",
      "Secure architecture: Flutter → Supabase Edge Functions → FastAPI; Postgres with row-level security; server-side scoring",
      "351-respondent market research study to validate the problem",
    ],
    stack: ["Flutter", "FastAPI", "Supabase / PostgreSQL", "Claude API", "Gemini API", "Scrum"],
    link: "https://github.com/AbdelrahmanEmad253/LearNova",
    featured: true,
  },
  {
    slug: "trigeminal",
    title: "Trigeminal Neuralgia: LLM Extraction + ML",
    kind: "Research · in progress",
    when: "2026",
    summary:
      "There's no public labeled dataset of trigeminal neuralgia patients, so we're building one. An LLM pipeline turns PubMed case reports into structured data, and classical ML then predicts TN subtype and treatment outcome.",
    role: "Co-researcher with Shahd Osama, who leads the extraction track. I own the modeling and evaluation track.",
    points: [
      "PubMed search → abstract fetch → filtering → LLM extraction with free-tier provider failover and resumable runs",
      "Hand-labelled gold set plus an AI-vs-human accuracy check that flags invented answers",
      "Clinical-only model vs an imaging ablation to expose label leakage (Cruccu 2016 classification)",
      "Grouped CV by paper, dummy baselines and a shuffled-label sanity check; offline test suites",
    ],
    stack: ["Python", "LLM APIs", "PubMed E-utilities", "scikit-learn", "pytest"],
    link: "https://github.com/AbdelrahmanEmad253/trigeminal-neuralgia-llm-ml",
  },
  {
    slug: "techmarket",
    title: "TechMarket Analysis",
    kind: "Personal",
    when: "2025",
    summary:
      "600,000+ tech job listings scraped from 7 platforms, unified, analyzed in Power BI, and turned into a job recommender.",
    role: "Team of two (with Ali Ahmed Sherif) in the NTI technical track. Data collection, cleaning and the Power BI model were joint work; Ali built the recommender.",
    points: [
      "Scrapers for TechLayoff, Upwork, Indeed, Wuzzuf, Egytech, Monster and RemoteOK",
      "Unified schema with normalized titles, skills and locations",
      "Market dashboard plus a content-based job recommendation system",
    ],
    stack: ["Python", "Web scraping", "Pandas", "Power BI"],
    link: "https://github.com/AbdelrahmanEmad253/TechMarket_Analysis",
  },
  {
    slug: "heart",
    title: "Heart Disease: Prevention, Diagnosis, Prognosis",
    kind: "Personal",
    when: "2025",
    summary:
      "Models the patient journey across four cardiac datasets: lifestyle risk, clinical diagnosis and survival, with a 4-page Power BI dashboard.",
    role: "DEPI team capstone: ETL, modeling and the dashboard.",
    points: [
      "Random Forest models per stage, with feature-importance analysis",
      "Shows the shift from lifestyle-driven to organ-function-driven risk",
    ],
    stack: ["Python", "scikit-learn", "Power BI", "DAX"],
    link: "https://github.com/AbdelrahmanEmad253/Heart-Disease-ML-PowerBI-Capstone",
  },
  {
    slug: "leaf",
    title: "Leaf Disease Detection (CNN)",
    kind: "Personal",
    when: "2024",
    summary: "A CNN classifying plant-leaf images into 38 disease and healthy classes (Kaggle dataset).",
    role: "Individual deep-learning project.",
    points: ["97.82% train / 94.59% validation accuracy", "Augmentation and dropout to control overfitting"],
    stack: ["TensorFlow", "Keras", "Computer vision"],
    link: "https://github.com/AbdelrahmanEmad253/LEAF_DISEASE_DETECTION",
  },
];

export const consulting = {
  title: "Strategy & growth consulting at BB Strategy",
  points: [
    "Competitive intelligence across 15+ KSA IT-sector competitors to shape market-entry strategy",
    "ROI and pricing models aligned to defined ideal customer profiles",
    "A CRM pipeline built from scratch (Odoo + Mailchimp) with automation and quotation flows",
    "ISO documentation gap analysis and cycle-time bottleneck audits",
    "Discovery, strategic plans and OKRs for every BB client",
  ],
};
