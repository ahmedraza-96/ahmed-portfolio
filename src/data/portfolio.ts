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
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  repoUrl2?: string;
  /** Shown as a badge when the project has no public links */
  badge?: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  /** Icon key rendered by the Services component: see ICON_MAP in Services.tsx */
  icon: "code" | "bot" | "workflow" | "cloud";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/* ── Site & SEO ─────────────────────────────────────────────────────────── */

export const site = {
  name: "Ahmed Raza",
  role: "Full-Stack AI Engineer",
  /** Used in <title>, OpenGraph and JSON-LD. Set to the deployed domain. */
  url: "https://ahmed-portfolio-jet.vercel.app",
  title: "Ahmed Raza — Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer in Karachi, Pakistan. I build and ship complete web applications with Next.js, React and FastAPI, plus production AI features — RAG pipelines, chatbots and tool-using agents.",
  keywords: [
    "Full-Stack AI Engineer",
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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero ───────────────────────────────────────────────────────────────── */

export const hero = {
  greeting: "Hi, I'm",
  headline: "Ahmed Raza",
  role: "Full-Stack AI Engineer",
  tagline:
    "I build and ship complete web applications — and the production AI features inside them. RAG pipelines, chatbots and tool-using agents, from first commit to live deployment.",
  status: "Available for work",
  location: "Karachi, Pakistan",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: "/resume.pdf" },
};

/* ── About ──────────────────────────────────────────────────────────────── */

export const about = {
  paragraphs: [
    "I'm a Full-Stack AI Engineer with a BS in Artificial Intelligence from FAST-NUCES. I build complete web applications with Next.js, React and FastAPI, and I ship the AI features that make them useful — RAG pipelines, chatbots and tool-using agents powered by LLM APIs and local LLMs.",
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
    role: "Full-Stack AI Engineer",
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
    name: "Convey AI",
    tagline: "Conversational AI interview agent",
    description:
      "An AI agent that conducts and evaluates mock interviews autonomously in Urdu and English, with an avatar-based interview mode. Built as my Final Year Project — deployed and live.",
    tech: ["Next.js", "Node.js", "OpenAI API", "REST APIs"],
    liveUrl: "https://www.conveyai.live/",
    repoUrl: "https://github.com/ahmedraza-96/conveyai-frontend",
    repoUrl2: "https://github.com/ahmedraza-96/conveyai-backend",
    featured: true,
  },
  {
    name: "Cognos",
    tagline: "Full-stack AI agent app (RAG + tools)",
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
    liveUrl: "https://cognos-frontend.vercel.app",
    repoUrl: "https://github.com/ahmedraza-96/Cognos-Frontend",
    repoUrl2: "https://github.com/ahmedraza-96/Cognos-Backend",
    featured: true,
  },
  {
    name: "CareShare",
    tagline: "Medicine donation platform (MERN)",
    description:
      "Connects medicine donors with people in need. Includes an admin panel that moderates donations and user accounts before listings go live. Deployed and accessible online.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://careshare-frontend.vercel.app/",
    repoUrl: "https://github.com/ahmedraza-96/Caresharefrontend",
    repoUrl2: "https://github.com/ahmedraza-96/Caresharebackend",
  },
  {
    name: "IT Inventory Management System",
    tagline: "Asset tracking for company IT",
    description:
      "Internal tool for tracking company IT assets and maintenance, with a React dashboard on a FastAPI and MySQL backend. Deployed and accessible online.",
    tech: ["FastAPI", "MySQL", "React.js", "REST APIs"],
    liveUrl: "https://it-inventory-app-main.vercel.app/",
    repoUrl: "https://github.com/ahmedraza-96/it_inventory_app-main",
  },
  {
    name: "RAG Document Parsing Chatbot",
    tagline: "Grounded Q&A over long documents",
    description:
      "A chatbot that answers questions over long documents — embeds the text into a FAISS vector store, retrieves the closest matches, and serves grounded answers through a FastAPI service.",
    tech: ["Python", "LangChain", "OpenAI", "FAISS", "FastAPI"],
    badge: "Private client project",
  },
];

/* ── Services ───────────────────────────────────────────────────────────── */

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Complete web applications with Next.js, React and FastAPI — REST APIs, auth, databases and clean, responsive UIs.",
    icon: "code",
  },
  {
    title: "AI Chatbots & RAG Systems",
    description:
      "Chatbots grounded in your documents: chunking, embeddings, vector search and retrieval tuning for accurate, sourced answers.",
    icon: "bot",
  },
  {
    title: "AI Agent Development",
    description:
      "Tool-using agents built with LangChain and LangGraph that execute multi-step tasks, integrated via APIs and webhooks.",
    icon: "workflow",
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "Production deployments with Docker, AWS and Vercel — Terraform provisioning, CI/CD pipelines and LLM observability.",
    icon: "cloud",
  },
];

/* ── Testimonials ───────────────────────────────────────────────────────── */
/*  The section is hidden while this array is empty. Add entries like:
    { quote: "…", author: "Jane Doe", role: "CTO, Acme" }                    */

export const testimonials: Testimonial[] = [];

/* ── Contact ────────────────────────────────────────────────────────────── */

export const contact = {
  heading: "Let's build something",
  blurb:
    "Have a project in mind, or want to talk about AI features for your product? Send a message — I usually reply within a day.",
  email: "ahmedrz.amjad@gmail.com",
  phone: "+92 330 7051591",
  location: "Karachi, Pakistan",
  /**
   * Get a free access key at https://web3forms.com (takes 1 minute).
   * The form is disabled with a helpful message until this is replaced.
   */
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
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
