import {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LineChart,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import type { Certification, FocusArea, Metric, Project, SkillGroup } from "../types/portfolio";

export const resumeUrl = "/Navya-Thellapati-Resume.pdf";
export const email = "navyachowdary.thellapati@gmail.com";
export const location = "Tampa, Florida";

export const socialLinks = {
  linkedin: "",
  github: "",
};

export const roles = [
  "Software Engineer",
  "Python Backend Developer",
  "Full-Stack Developer",
  "AI Application Developer",
];

export const metrics: Metric[] = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "API Integrations" },
  { value: 6, suffix: "K+", label: "Daily Records Supported" },
  { value: 28, suffix: "%", label: "Efficiency Improvement" },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Backend Engineering",
    icon: ServerCog,
    description:
      "Building reliable backend services, workflow automation, REST APIs, database integrations, validation systems, and reusable Python modules.",
    technologies: ["Python", "FastAPI", "Flask", "REST APIs", "SQLAlchemy", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Full-Stack Development",
    icon: Layers3,
    description:
      "Developing responsive, API-driven applications with secure authentication and practical user workflows.",
    technologies: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "JWT", "PostgreSQL"],
  },
  {
    title: "AI-Integrated Applications",
    icon: BrainCircuit,
    description:
      "Creating RAG systems, semantic search workflows, vector-database applications, LLM integrations, and responsible machine-learning solutions.",
    technologies: ["LangChain", "OpenAI API", "Llama 3", "ChromaDB", "Sentence-Transformers", "TensorFlow"],
  },
];

export const projects: Project[] = [
  {
    slug: "documind",
    title: "DocuMind - AI Document Q&A Assistant",
    shortTitle: "DocuMind",
    description:
      "A retrieval-augmented document intelligence application that allows users to upload documents, index content, ask natural-language questions, and receive source-attributed answers.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Llama 3",
      "OpenAI API",
      "Sentence-Transformers",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Supports querying more than 1,000 documents",
      "Reduced unsupported responses by 35%",
      "Semantic document search",
      "Source-attributed answers",
      "Document indexing",
      "Feedback collection",
      "Chat history",
      "OpenAPI-documented endpoints",
    ],
    metrics: ["1,000+ documents", "35% fewer unsupported responses", "Source-attributed answers"],
    problem:
      "Teams need a practical way to search large document collections and trust where an answer came from.",
    solution:
      "DocuMind combines document upload, semantic chunking, vector search, retrieval logic, and source-attributed LLM responses behind documented APIs.",
    features: ["Document upload", "Indexing status", "Semantic search", "Q&A workflow", "Feedback collection", "Chat history"],
    workflow: ["Upload documents", "Chunk and embed content", "Store vectors", "Ask a question", "Retrieve sources", "Generate answer"],
    challenges: [
      "Reducing unsupported answers while keeping responses useful",
      "Maintaining traceability from answer to document section",
      "Packaging the backend for repeatable testing and deployment readiness",
    ],
    results: [
      "Enabled querying across more than 1,000 documents",
      "Reduced unsupported responses by 35%",
      "Exposed OpenAPI-documented endpoints for core workflows",
    ],
    lessons: [
      "Source attribution is a product requirement, not a polish item",
      "RAG quality depends on chunking, retrieval, prompts, and feedback loops working together",
    ],
    future: ["Expand feedback analytics", "Add richer document metadata filters", "Improve retrieval evaluation workflows"],
  },
  {
    slug: "mychart",
    title: "MyChart - Full-Stack Healthcare Patient Portal",
    shortTitle: "MyChart",
    description:
      "A responsive healthcare portal that supports appointments, test results, medications, visit history, billing, provider messaging, and AI-assisted portal navigation.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "OpenAI API",
      "JWT",
      "GitHub Actions",
    ],
    highlights: [
      "Appointment management",
      "Lab and test results",
      "Medication information",
      "Billing workflows",
      "Provider messaging",
      "AI chatbot",
      "JWT authentication",
      "Role-based access",
      "Light, dark, and high-contrast themes",
      "Improved prototype task completion by 30%",
    ],
    metrics: ["30% task completion improvement", "JWT auth", "Role-based access"],
    problem:
      "Patient portals must make complex healthcare tasks clear while protecting workflow and account access.",
    solution:
      "The portal brings appointments, results, medications, billing, messaging, and guided AI navigation into a responsive authenticated experience.",
    features: [
      "Appointment management",
      "Lab result views",
      "Medication cards",
      "Billing workflows",
      "Provider messaging",
      "AI chatbot",
      "Theme support",
    ],
    workflow: ["Sign in", "Review care dashboard", "Open records or billing", "Use guided chatbot", "Message provider", "Validate updates"],
    challenges: [
      "Designing a usable prototype for multiple healthcare workflows",
      "Keeping authentication and role-based access central to the application",
      "Testing API behavior across portal actions",
    ],
    results: [
      "Improved prototype task completion by 30%",
      "Secured workflows with JWT authentication and role-based access",
      "Supported light, dark, and high-contrast themes",
    ],
    lessons: [
      "Healthcare interfaces need calm hierarchy and fast route clarity",
      "AI assistance works best when it is constrained to real portal tasks",
    ],
    future: ["Expand regression coverage", "Add more care-team workflow states", "Refine high-contrast accessibility testing"],
  },
  {
    slug: "responsible-ai",
    title: "Fairness in Income Prediction and Responsible AI",
    shortTitle: "Responsible AI",
    description:
      "A responsible machine-learning project evaluating income-classification accuracy and demographic fairness using the UCI Adult Census dataset.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    highlights: [
      "48,842 records",
      "85% accuracy",
      "0.90 ROC AUC",
      "12% disparity identified",
      "82% accuracy maintained after fairness improvements",
    ],
    metrics: ["48,842 records", "0.90 ROC AUC", "12% disparity identified"],
    problem:
      "Accuracy alone does not show whether a model performs responsibly across demographic groups.",
    solution:
      "The project evaluates income-classification performance and fairness using bias detection, 80% Rule analysis, and validation metrics.",
    features: ["Three-layer neural network", "Bias detection", "80% Rule analysis", "Fairness validation", "Model evaluation"],
    workflow: ["Prepare dataset", "Train classifier", "Evaluate accuracy", "Measure fairness", "Tune mitigation", "Compare outcomes"],
    challenges: [
      "Balancing classification performance with fairness review",
      "Making model outcomes more explainable",
      "Tracking demographic disparity clearly enough for mitigation decisions",
    ],
    results: [
      "Reached 85% accuracy and 0.90 ROC AUC",
      "Identified a 12% disparity for mitigation review",
      "Maintained 82% accuracy after fairness improvements",
    ],
    lessons: [
      "Responsible AI needs both model metrics and group-level validation",
      "Fairness work benefits from transparent comparison before and after mitigation",
    ],
    future: ["Add expanded subgroup reporting", "Document mitigation tradeoffs", "Compare additional model families"],
  },
];

export const experienceGroups = [
  {
    title: "Automation and Efficiency",
    icon: Workflow,
    bullets: [
      "Automated client account servicing, billing review, payment validation, and internal operations workflows using Python and SQL.",
      "Reduced more than 300 recurring manual checks.",
      "Improved processing efficiency by 28%.",
    ],
  },
  {
    title: "APIs and Backend Systems",
    icon: Network,
    bullets: [
      "Integrated more than 20 internal account, billing, customer profile, and payment services.",
      "Used Python, REST APIs, JSON, XML, and microservice-style API logic.",
      "Supported more than 6,000 financial records daily.",
    ],
  },
  {
    title: "Data Engineering and Validation",
    icon: Database,
    bullets: [
      "Maintained Python and SQL ETL routines for account, transaction, billing, and reporting data.",
      "Reduced recurring data-load errors by 22%.",
      "Optimized PostgreSQL and SQL Server reconciliation queries.",
      "Reduced pre-release data mismatches by 25%.",
    ],
  },
  {
    title: "Delivery and Reliability",
    icon: GitBranch,
    bullets: [
      "Built reusable automation modules using SQLAlchemy, exception handling, input validation, retry handling, and structured logging.",
      "Supported more than 12 release validations.",
      "Used Jenkins, Git, Azure DevOps, Linux, and CI/CD pipelines.",
      "Collaborated with business analysts, QA engineers, database teams, and product owners through Agile and Scrum.",
    ],
  },
];

export const experienceTech = [
  "Python",
  "SQL",
  "REST APIs",
  "PostgreSQL",
  "SQL Server",
  "SQLAlchemy",
  "Jenkins",
  "Azure DevOps",
  "Git",
  "Linux",
  "Agile",
];

export const skillGroups: SkillGroup[] = [
  { title: "Languages", icon: Code2, skills: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"] },
  {
    title: "Backend and APIs",
    icon: ServerCog,
    size: "wide",
    skills: ["FastAPI", "Flask", "RESTful APIs", "Microservices", "SQLAlchemy", "OpenAPI", "JSON", "XML", "JWT", "API Integration"],
  },
  { title: "Frontend", icon: TerminalSquare, skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web Design", "Component-Based Development"] },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "SQL Server", "Relational Database Design", "SQL Query Optimization"] },
  { title: "DevOps and CI/CD", icon: GitBranch, skills: ["Docker", "Jenkins", "Git", "GitHub", "GitHub Actions", "Azure DevOps", "Linux", "CI/CD Pipelines"] },
  {
    title: "AI and LLM Development",
    icon: Bot,
    size: "wide",
    skills: ["RAG", "LangChain", "OpenAI API", "Llama 3", "ChromaDB", "Vector Databases", "Semantic Search", "Sentence-Transformers", "Prompt Engineering", "LLM API Integration", "Source Attribution"],
  },
  { title: "Machine Learning and Responsible AI", icon: ShieldCheck, skills: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "Neural Networks", "Model Evaluation", "Bias Detection", "Fairness Validation"] },
  { title: "Engineering Practices", icon: BadgeCheck, skills: ["Agile", "Scrum", "SDLC", "Object-Oriented Programming", "Data Structures", "Algorithms", "Code Reviews", "Jira", "Confluence", "Debugging"] },
];

export const educationFocus = [
  "Software Engineering",
  "Backend Systems",
  "Artificial Intelligence",
  "Machine Learning",
  "Responsible AI",
  "Full-Stack Development",
];

export const certifications: Certification[] = [
  { title: "Meta Back-End Developer Professional Certificate", issuer: "Coursera", icon: ServerCog },
  { title: "IBM Full Stack Software Developer Professional Certificate", issuer: "Coursera", icon: Layers3 },
  { title: "Google IT Automation with Python Professional Certificate", issuer: "Coursera", icon: Workflow },
  { title: "Meta Front-End Developer Professional Certificate", issuer: "Coursera", icon: Sparkles },
  { title: "GitHub Actions for CI/CD: Build, Test, and Deploy", issuer: "LinkedIn Learning", icon: GitBranch },
];

export const caseStudyOrder = ["documind", "mychart", "responsible-ai"] as const;
export const projectIconMap = { documind: BrainCircuit, mychart: Activity, "responsible-ai": LineChart };
