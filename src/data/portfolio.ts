/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth.
 *  Every section of the site reads from this file. To customize the website,
 *  edit the values below; you should never need to touch the components.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
  /** Icon key rendered by the components: "github" | "linkedin" | "mail" | "phone" */
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  /** Year shipped — shown in the case-study meta line. */
  year: string;
  /** Editorial category label, e.g. "LLM Evals", "Open Source · MCP". */
  category: string;
  /** One flagship stat surfaced as an accent callout. */
  metric?: string;
  /** Per-project hue key (see --hue-* in globals.css) — tints the row's numeral, meta and links. */
  accent: string;
  tech: string[];
  /** Screenshot path inside /public (1600×900). Card renders it when set. */
  image?: string;
  /** Narrated demo video path inside /public (H.264 MP4, 1080p). Adds a play button + lightbox on the card. */
  video?: string;
  liveUrl?: string;
  /** Label for the liveUrl link. Defaults to "Live site" (e.g. "PyPI", "npm"). */
  liveLabel?: string;
  repoUrl?: string;
  repoUrl2?: string;
  /** Shown as a badge when the project has no public links */
  badge?: string;
  featured?: boolean;
}

export interface Capability {
  title: string;
  description: string;
}

/* ── Site & SEO ─────────────────────────────────────────────────────────── */

export const site = {
  name: "Ahmed Raza",
  role: "AI Engineer",
  /** Used in <title>, OpenGraph and JSON-LD. Set to the deployed domain. */
  url: "https://ahmedraza.is-a.dev",
  title: "Ahmed Raza — AI Engineer",
  description:
    "AI Engineer in Karachi, Pakistan. I build and ship complete web applications with Next.js, React and FastAPI, plus production AI features — RAG pipelines, chatbots and tool-using agents.",
  keywords: [
    "AI Engineer",
    "Next.js developer",
    "FastAPI",
    "RAG pipelines",
    "LangChain",
    "AI agents",
    "Karachi",
  ],
  /** Path inside /public — replace the file to update the downloadable CV. */
  resumeFile: "/resume.pdf",
};

export const nav: NavItem[] = [
  { label: "Profile", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero ───────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Ahmed Raza — AI Engineer, Karachi",
  /** Each entry renders as one masked line of the statement. */
  statement: ["I build AI products", "that actually ship."],
  /** Word inside the statement rendered in italic + accent. */
  statementAccent: "ship.",
  tagline:
    "Complete web applications and the production AI inside them — RAG pipelines, tool-using agents and eval harnesses, from first commit to live deployment.",
  status: "Available for work",
  metrics: [
    { value: "06", label: "Products live" },
    { value: "01", label: "PyPI package" },
    { value: "78", label: "Tests, CI-gated" },
    { value: "’26", label: "BS AI, FAST-NUCES" },
  ],
  primaryCta: { label: "Selected work", href: "#projects" },
  secondaryCta: { label: "Résumé", href: "/resume.pdf" },
};

/* ── About ──────────────────────────────────────────────────────────────── */

export const about = {
  paragraphs: [
    "I'm an AI Engineer with a BS in Artificial Intelligence from FAST-NUCES. I build complete web applications with Next.js, React and FastAPI, and I ship the AI features that make them useful — RAG pipelines, chatbots and tool-using agents powered by LLM APIs and local LLMs.",
    "My work runs in production: I deploy with Docker, AWS and Vercel, wire up CI/CD with GitHub Actions, and monitor model quality with LangSmith. Multiple products I've built are live and in use today.",
  ],
  facts: [
    { label: "Location", value: "Karachi, Pakistan" },
    { label: "Degree", value: "BS Artificial Intelligence" },
    { label: "University", value: "FAST-NUCES, 2022 – 2026" },
    { label: "Focus", value: "LLMs & shipping real AI products" },
  ],
  education: {
    degree: "BS in Artificial Intelligence",
    school: "FAST National University (NUCES), Karachi",
    period: "2022 – 2026",
    detail:
      "Coursework in AI, Machine Learning, Deep Learning, NLP, Computer Vision, DSA, Databases and Software Engineering. Final Year Project: Convey AI — a conversational AI interview agent.",
  },
  /** Headshot path inside /public (3:4 portrait). Leave undefined to render the monogram placeholder. */
  photo: "/ahmed.jpg" as string | undefined,
  photoCaption: "Karachi · 24.86°N 67.00°E",
  capabilities: [
    {
      title: "Full-stack web development",
      description:
        "Complete applications with Next.js, React and FastAPI — REST APIs, auth, databases and clean, responsive UIs.",
    },
    {
      title: "AI chatbots & RAG systems",
      description:
        "Chatbots grounded in your documents — chunking, embeddings, vector search and retrieval tuning for sourced answers.",
    },
    {
      title: "AI agent development",
      description:
        "Tool-using agents built with LangChain and LangGraph that execute multi-step tasks via APIs and webhooks.",
    },
    {
      title: "Cloud deployment & DevOps",
      description:
        "Production deployments with Docker, AWS and Vercel — Terraform provisioning, CI/CD and LLM observability.",
    },
  ] as Capability[],
};

/* ── Skills ─────────────────────────────────────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Backend",
    skills: [
      "Next.js",
      "React.js",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
      "REST APIs",
      "Webhooks",
      "JWT Auth",
    ],
  },
  {
    title: "Generative AI",
    skills: [
      "LLM APIs (OpenAI, Claude, Gemini)",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "AI Agents",
      "Tool Use / Function Calling",
      "LLM Evals (LLM-as-Judge)",
      "CI Quality Gates",
      "Chroma",
      "Qdrant",
      "FAISS",
      "LangSmith",
      "Langfuse",
    ],
  },
  {
    title: "Cloud, DevOps & Data",
    skills: [
      "Docker",
      "AWS (EC2, S3, Lambda)",
      "Vercel",
      "Terraform",
      "GitHub Actions",
      "Linux",
      "Git",
      "Claude Code",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Languages & ML",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "pandas",
      "NumPy",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Keras",
    ],
  },
];

/* ── Experience ─────────────────────────────────────────────────────────── */

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "HashOne Global",
    location: "Karachi, Pakistan",
    period: "Jul 2025 — Jun 2026",
    highlights: [
      "Built AI applications and chatbots end to end using LLM APIs and local LLMs, applying prompt engineering to produce clean, structured output.",
      "Designed RAG pipelines over vector databases — document chunking, embedding and retrieval tuning — to ground answers in source documents.",
      "Developed AI agents with LangChain and LangGraph that use tool calling to execute multi-step tasks, served through FastAPI REST APIs with webhook integrations.",
      "Deployed services with Docker and CI/CD pipelines on AWS, and monitored model quality with LangSmith.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Tech Hunt",
    period: "Jun 2024 — Aug 2024",
    highlights: [
      "Built RAG and document-processing pipelines in Python with LangChain and the OpenAI API.",
      "Chunked and embedded documents into a FAISS vector store and tuned retrieval for grounded answers.",
    ],
  },
];

/* ── Projects ───────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    name: "NovaNet Eval Harness",
    tagline: "AI support agent with production-grade LLM evals",
    year: "2025",
    category: "LLM Evals",
    accent: "coral",
    metric: "100-case golden dataset, CI-gated",
    description:
      "A customer-support RAG agent wrapped in a full evaluation pipeline — 100-case golden dataset, deterministic assertions plus LLM-as-judge grading, hash-keyed response caching, and a GitHub Actions quality gate that blocks bad prompt changes before merge. Baseline evals caught an intermittent prompt-injection vulnerability. Ships with a Next.js metrics dashboard: run trends, per-case judge verdicts, grounded chat and a rendered knowledge base.",
    tech: [
      "FastAPI",
      "LangGraph",
      "Groq Llama 3.3",
      "Chroma",
      "LLM-as-Judge",
      "GitHub Actions",
      "Next.js",
    ],
    image: "/projects/novanet-eval-harness.png",
    video: "/projects/novanet-demo.mp4",
    liveUrl: "https://ai-support-eval.vercel.app",
    repoUrl: "https://github.com/ahmedraza-96/ai-support-eval",
    featured: true,
  },
  {
    name: "PSX MCP Server",
    tagline: "Published MCP server for LLM agents",
    year: "2025",
    category: "Open Source · MCP",
    accent: "amber",
    metric: "78 tests · live on PyPI",
    description:
      "An open-source Model Context Protocol server that gives Claude and other LLM agents live Pakistan Stock Exchange data — quotes, indices (KSE-100), company fundamentals, dividends and announcements — as 10 tool-callable endpoints. Built test-first with 78 tests, CI across Python 3.10–3.13 on Linux and Windows, and published to PyPI for one-line install (uvx psx-mcp-server).",
    tech: [
      "Python",
      "MCP (FastMCP)",
      "httpx",
      "BeautifulSoup",
      "pytest",
      "GitHub Actions",
      "PyPI",
    ],
    image: "/projects/psx-mcp-server.png",
    video: "/projects/psx-mcp-demo.mp4",
    liveUrl: "https://pypi.org/project/psx-mcp-server/",
    liveLabel: "PyPI",
    repoUrl: "https://github.com/ahmedraza-96/psx-mcp-server",
    featured: true,
  },
  {
    name: "Convey AI",
    tagline: "Conversational AI interview agent",
    year: "2025–26",
    category: "Voice AI · FYP",
    accent: "teal",
    metric: "Interviews in Urdu & English",
    description:
      "An AI agent that conducts and evaluates mock interviews autonomously in Urdu and English, with an avatar-based interview mode. Built as my Final Year Project — deployed and live.",
    tech: ["Next.js", "Node.js", "OpenAI API", "REST APIs"],
    image: "/projects/convey-ai.png",
    video: "/projects/convey-demo.mp4",
    liveUrl: "https://www.conveyai.live/",
    repoUrl: "https://github.com/ahmedraza-96/conveyai-backend",
    featured: true,
  },
  {
    name: "Cognos",
    tagline: "Full-stack AI agent app (RAG + tools)",
    year: "2025",
    category: "AI Agents · RAG",
    accent: "violet",
    metric: "Per-user vector stores · SSE streaming",
    description:
      "Chat with a tool-using AI agent over your own documents, with built-in web search. JWT auth, per-user Chroma vector stores, Postgres-backed chat memory and token-by-token SSE streaming. Deployed on AWS EC2, provisioned with Terraform.",
    tech: [
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Chroma",
      "PostgreSQL",
      "Next.js",
      "SSE",
      "Terraform",
      "AWS EC2",
    ],
    image: "/projects/cognos.png",
    video: "/projects/cognos-demo.mp4",
    liveUrl: "https://cognos-frontend.vercel.app",
    repoUrl: "https://github.com/ahmedraza-96/Cognos-Backend",
    featured: true,
  },
  {
    name: "CareShare",
    tagline: "Medicine donation platform (MERN)",
    year: "2024",
    category: "Full-stack",
    accent: "rose",
    description:
      "Connects medicine donors with people in need. Includes an admin panel that moderates donations and user accounts before listings go live. Deployed and accessible online.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/careshare.png",
    video: "/projects/careshare-demo.mp4",
    liveUrl: "https://careshare-frontend.vercel.app/",
    repoUrl: "https://github.com/ahmedraza-96/Caresharebackend",
  },
  {
    name: "IT Inventory Management System",
    tagline: "Asset tracking for company IT",
    year: "2024",
    category: "Internal tool",
    accent: "sky",
    description:
      "Internal tool for tracking company IT assets and maintenance, with a React dashboard on a FastAPI and MySQL backend. Deployed and accessible online.",
    tech: ["FastAPI", "MySQL", "React.js", "REST APIs"],
    image: "/projects/it-inventory.png",
    video: "/projects/it-inventory-demo.mp4",
    liveUrl: "https://it-inventory-app-main.vercel.app/",
    repoUrl: "https://github.com/ahmedraza-96/it_inventory_app-main",
  },
  {
    name: "RAG Document Parsing Chatbot",
    tagline: "Grounded Q&A over long documents",
    year: "2024",
    category: "Client work",
    accent: "lime",
    description:
      "A chatbot that answers questions over long documents — embeds the text into a FAISS vector store, retrieves the closest matches, and serves grounded answers through a FastAPI service.",
    tech: ["Python", "LangChain", "OpenAI", "FAISS", "FastAPI"],
    badge: "Private client project",
  },
];

/* ── Contact ────────────────────────────────────────────────────────────── */

export const contact = {
  heading: "Have something worth shipping?",
  blurb:
    "I usually reply within a day. Tell me about the product, the problem, or the role — email works best.",
  email: "ahmedrz.amjad@gmail.com",
  phone: "+92 330 7051591",
  location: "Karachi, Pakistan",
  availability: "Currently open to full-time AI engineering roles — remote or Karachi.",
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/ahmedraza-96", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmedraza101",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:ahmedrz.amjad@gmail.com", icon: "mail" },
  { label: "Phone", href: "tel:+923307051591", icon: "phone" },
];
