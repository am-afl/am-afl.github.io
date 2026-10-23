export interface Project {
  id: string;
  title: string;
  category: 'AI & Research' | 'Backend & Distributed' | 'Full-Stack' | 'Systems';
  tagline: string;
  description: string;
  challenge: string;
  architecture: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'In Progress / Research' | 'Production' | 'Academic' | 'Open Source';
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
  impactMetric: string;
}

export interface TeachingExperience {
  course: string;
  code?: string;
  term: string;
  institution: string;
  responsibilities: string[];
  topics: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  highlights: string[];
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
  metric: string;
}

export interface VolunteerRole {
  role: string;
  event: string;
  year: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "AmirMohammad Aflatounian",
  shortName: "Amir Aflatounian",
  headline: "Software Engineer & AI Researcher",
  subheadline: "B.Sc. in Computer Engineering from Sharif University of Technology. Specialized in high-throughput enterprise backend systems (Java Spring Boot, .NET Core) and agentic multimodal AI architectures.",
  location: "Tehran, Iran • Sharif University of Technology",
  email: "aflatounian.amir@gmail.com",
  phone: "+98 914 089 1570",
  github: "https://github.com/am-afl",
  githubUsername: "am-afl",
  openTo: "Targeting top engineering roles (Google, OpenAI, Anthropic, DeepMind, Meta, Microsoft) and premier European PhD/MSc research laboratories.",
  philosophy: "I approach software engineering with an obsession for clean abstractions, domain-driven design, and rigorous performance guarantees. Concurrently, my research investigates self-correcting agentic feedback loops that elevate generative models from probabilistic guessing to verifiable reasoning.",
};

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    description: "Core programming paradigms from low-level systems to modern async runtimes",
    skills: [
      { name: "Java", level: "Advanced", highlight: "Enterprise backend, JVM concurrency, Spring Boot" },
      { name: "C#", level: "Advanced", highlight: ".NET Core, ASP.NET, EF Core, LINQ" },
      { name: "Python", level: "Advanced", highlight: "PyTorch, LangChain, NumPy, Research pipelines" },
      { name: "TypeScript", level: "Proficient", highlight: "Type-safe full-stack, Next.js, React" },
      { name: "SQL", level: "Advanced", highlight: "Query optimization, schema indexing, execution plans" },
      { name: "C", level: "Solid", highlight: "Systems programming, algorithms, pointer semantics" },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    description: "High-throughput services, event streaming, and domain-driven architectures",
    skills: [
      { name: "Java Spring Boot", level: "Advanced", highlight: "Spring Cloud, Spring Data JPA, Microservices" },
      { name: "ASP.NET Core", level: "Advanced", highlight: "Clean Architecture, Web APIs, Middleware" },
      { name: "Apache Kafka", level: "Proficient", highlight: "Asynchronous pub/sub, message streaming, offsets" },
      { name: "RabbitMQ", level: "Proficient", highlight: "Message queues, dead-letter exchanges, routing" },
      { name: "Clean Architecture & DDD", level: "Advanced", highlight: "Domain-Driven Design, Hexagonal patterns" },
      { name: "Django REST Framework", level: "Proficient", highlight: "Python backends, authentication, ORM" },
    ],
  },
  {
    category: "AI, Multimodal & Agents",
    description: "Generative modeling, self-correcting agent loops, and LLM orchestration",
    skills: [
      { name: "PyTorch", level: "Advanced", highlight: "Custom loss functions, vision encoders, embeddings" },
      { name: "LangChain & LangGraph", level: "Proficient", highlight: "Cyclic agent graphs, tool calling, state machines" },
      { name: "CLIP & Perception Models", level: "Proficient", highlight: "Cross-modal alignment, text-to-image verification" },
      { name: "Hugging Face Ecosystem", level: "Proficient", highlight: "Transformers, model fine-tuning, pipelines" },
      { name: "Autonomous Agentic Loops", level: "Research", highlight: "Self-correction, prompt refinement, iterative repair" },
      { name: "TensorFlow & Scikit-Learn", level: "Proficient", highlight: "Classical ML, feature engineering, classification" },
    ],
  },
  {
    category: "Databases & Caching",
    description: "Relational persistence, distributed in-memory caching, and data modeling",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: "Complex joins, indexing strategies, ACID guarantees" },
      { name: "Microsoft SQL Server", level: "Advanced", highlight: "Enterprise transactional schemas, stored procedures" },
      { name: "Redis", level: "Proficient", highlight: "In-memory caching, session store, rate limiting" },
      { name: "Hibernate / JPA", level: "Advanced", highlight: "Entity lifecycle, N+1 query optimization, L2 cache" },
      { name: "Entity Framework Core", level: "Advanced", highlight: "Migrations, shadow properties, tracking control" },
    ],
  },
  {
    category: "Frontend & UI Engineering",
    description: "High-performance responsive web applications and interactive dashboards",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", highlight: "Server Components, App Router, SSR/SSG" },
      { name: "Angular", level: "Proficient", highlight: "RxJS reactive pipelines, dependency injection" },
      { name: "Tailwind CSS", level: "Advanced", highlight: "Design systems, fluid layouts, modern tokens" },
      { name: "Framer Motion", level: "Proficient", highlight: "Gesture microinteractions, layout transitions" },
    ],
  },
  {
    category: "Infrastructure, Tools & Practices",
    description: "Containerization, automated workflow orchestrations, and engineering rigor",
    skills: [
      { name: "Docker", level: "Proficient", highlight: "Multi-stage builds, container orchestration" },
      { name: "Git & GitHub Actions", level: "Advanced", highlight: "CI/CD pipelines, release automation" },
      { name: "n8n", level: "Proficient", highlight: "Workflow automation, webhook integration" },
      { name: "Prompt Engineering", level: "Advanced", highlight: "Few-shot prompting, chain-of-thought, structured I/O" },
      { name: "Jira & Agile", level: "Proficient", highlight: "Sprint planning, sprint reviews, team collaboration" },
    ],
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    company: "Mohaymen ICT Group",
    role: "Software Engineer — Java Spring Boot & .NET Core",
    location: "Tehran, Iran",
    period: "Feb 2026 – Present",
    type: "Full-time",
    description: "Engineered scalable enterprise backend services and distributed microservices utilizing both Java Spring Boot and modern .NET Core (C#) in high-throughput production environments.",
    achievements: [
      "Architected and deployed secure, high-throughput RESTful APIs serving mission-critical enterprise workflows with sub-100ms response targets.",
      "Engineered decoupled asynchronous message streaming infrastructure with Apache Kafka and RabbitMQ, handling event processing and backpressure gracefully.",
      "Optimized relational database schemas and queries across PostgreSQL and Microsoft SQL Server, reducing execution times on complex analytical joins by eliminating N+1 query patterns.",
      "Enforced Domain-Driven Design (DDD), Clean Architecture, and Gang-of-Four Design Patterns across core microservices, maximizing test coverage and decoupling domain business logic from infrastructure.",
    ],
    technologies: ["Java", "Spring Boot", "C#", ".NET Core", "Spring Cloud", "Kafka", "RabbitMQ", "PostgreSQL", "SQL Server", "Hibernate", "EF Core", "Clean Architecture", "DDD"],
    impactMetric: "Enterprise Microservices & High-Throughput Message Streaming",
  },
  {
    company: "Hojjre Online Shop",
    role: "Full-Stack Developer — React (Next.js) & Django",
    location: "Tehran, Iran",
    period: "Mar 2025 – Aug 2025",
    type: "Contract",
    description: "Designed and engineered an end-to-end e-commerce platform specializing in dynamic silver trading, featuring real-time market price updates and multi-tier administrative panels.",
    achievements: [
      "Constructed the complete frontend using React (Next.js) and the backend using Django REST Framework, bridging real-time precious metals valuation with customer order execution.",
      "Developed an administrative control suite for catalog management, silver hallmark classification, and automated live price synchronizations.",
      "Engineered customer management workflows including dynamic multi-address books, complete order lifecycle histories, and responsive context-driven shopping cart state.",
      "Crafted responsive and accessible UI/UX with Material UI and custom design primitives, ensuring zero layout instability across mobile and desktop devices.",
    ],
    technologies: ["Next.js", "React", "Django", "Python", "PostgreSQL", "Material UI", "Context API", "REST APIs"],
    impactMetric: "End-to-End Dynamic Trading Engine & Real-Time Price Sync",
  },
  {
    company: "Tapsell & Mediaad Panels",
    role: "Front-End Developer — Angular Framework",
    location: "Tehran, Iran",
    period: "Feb 2022 – Mar 2023",
    type: "Contract",
    description: "Developed user-facing and internal operational analytics dashboards for one of the region's largest ad-tech platforms, processing multi-million event ad impressions and campaign insights.",
    achievements: [
      "Engineered modular Angular dashboard modules, data tables, and campaign management interfaces with RxJS reactive streams.",
      "Spearheaded UI component re-usability and design consistency across advertiser and publisher panels.",
      "Profiled and optimized client-side bundle size, rendering performance, and network payload caching for high-density analytical dashboards.",
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "HTML5/CSS3", "REST APIs", "Ad-Tech Dashboards", "Performance Profiling"],
    impactMetric: "High-Traffic Ad-Tech Analytics Dashboards Serving Millions of Impressions",
  },
];

export const RESEARCH_PROJECT = {
  title: "Autonomous Agentic Text-to-Image Generation Framework",
  status: "Active Research Project",
  domain: "Generative AI • Multimodal Alignment • Agentic Systems",
  overview: "An ongoing research project developing an iterative, closed-loop agentic framework that systematically enhances the semantic fidelity and aesthetic quality of text-to-image generative models.",
  abstract: "Standard text-to-image diffusion models frequently suffer from attribute binding errors, spatial hallucination, and semantic drift between detailed prompts and synthesized pixels. This work introduces an agentic feedback cycle that couples cross-modal evaluation (CLIP + a custom PerceptionEncoder) with an autonomous LLM refinement loop. The agent inspects intermediate outputs, scores alignment, diagnoses discrepancies, and iteratively adjusts prompts and sampling trajectories for self-correcting generation.",
  keyInnovations: [
    {
      title: "Closed-Loop Perception Feedback",
      description: "Combines vision-language evaluation (CLIP score) with a custom PerceptionEncoder to detect missing entities, inverted attributes, and compositional inaccuracies.",
    },
    {
      title: "Iterative Prompt Refinement Loop",
      description: "Autonomous LLM agent analyzes perceptual discrepancies and dynamically synthesizes corrective prompt adjustments and negative conditioning tokens.",
    },
    {
      title: "Self-Correction & Autonomous Regeneration",
      description: "Eliminates trial-and-error human prompting by delegating verification and regeneration criteria to an autonomous, goal-directed agentic cycle.",
    },
  ],
  technologies: ["PyTorch", "CLIP", "LangChain", "LangGraph", "Python", "Diffusion Models", "Computer Vision"],
  futureWork: "Exploring multi-agent debate for visual verification and fine-grained spatial bounding box conditioning within the agentic feedback pipeline.",
};

export const PROJECTS: Project[] = [
  {
    id: "agentic-text-to-image",
    title: "Agentic Vision: Self-Correcting Text-to-Image Loop",
    category: "AI & Research",
    tagline: "Autonomous feedback loop for verifiable multimodal prompt-image alignment",
    description: "A research framework integrating an autonomous agentic reflection cycle into text-to-image generation. Employs cross-modal perception encoders to iteratively evaluate synthesized images, diagnose semantic misalignment, and auto-refine prompts until fidelity thresholds are met.",
    challenge: "Diffusion models struggle with compositional complexity, binding attributes correctly (e.g., 'a red sphere on a blue cube'), and adhering to dense narrative prompts without human intervention.",
    architecture: "Multi-stage cyclic graph built with PyTorch and LangGraph: Diffusion Generator -> PerceptionEncoder & CLIP Alignment Evaluator -> Discrepancy Reasoner (LLM) -> Prompt Rewriter -> Conditional Regeneration.",
    solution: "Designed a self-healing generation loop that evaluates semantic overlap and compositional correctness, formulating surgical prompt adjustments rather than random re-sampling.",
    impact: "Substantially improves prompt adherence and reduces hallucination in multi-object compositions without requiring complete model retraining.",
    technologies: ["PyTorch", "CLIP", "LangChain", "LangGraph", "HuggingFace", "Python"],
    metrics: [
      { label: "Architecture", value: "Closed-Loop Agent" },
      { label: "Evaluator", value: "PerceptionEncoder + CLIP" },
      { label: "Modality", value: "Multimodal Vision-Language" },
    ],
    githubUrl: "https://github.com/am-afl",
    featured: true,
    status: "In Progress / Research",
  },
  {
    id: "enterprise-backend-microservices",
    title: "Distributed Enterprise Backend Architecture",
    category: "Backend & Distributed",
    tagline: "High-throughput microservices ecosystem with Java Spring Boot, .NET Core & Kafka",
    description: "Production-grade enterprise backend services engineered with Domain-Driven Design (DDD) and Clean Architecture principles. Bridges synchronous low-latency REST endpoints with asynchronous distributed message streaming via Kafka and RabbitMQ.",
    challenge: "Handling concurrent enterprise transactions with strict consistency, preventing message loss during peak traffic bursts, and maintaining loose coupling between microservice boundaries.",
    architecture: "Hexagonal / Clean Architecture with Spring Cloud and ASP.NET Core microservices. Asynchronous event-driven communication via Kafka clusters and RabbitMQ exchanges; transactional outbox pattern with PostgreSQL.",
    solution: "Implemented robust event-driven choreography with transactional outbox, idempotent consumers, Redis caching layer for read-heavy operations, and optimized database indexing.",
    impact: "Empowered enterprise clients with sub-100ms API response SLAs and zero-downtime message recovery during network partitions.",
    technologies: ["Java Spring Boot", "ASP.NET Core", "Apache Kafka", "RabbitMQ", "PostgreSQL", "SQL Server", "Docker", "DDD"],
    metrics: [
      { label: "Design Pattern", value: "Clean Architecture / DDD" },
      { label: "Messaging", value: "Kafka + RabbitMQ" },
      { label: "Data Layers", value: "JPA & EF Core" },
    ],
    githubUrl: "https://github.com/am-afl",
    featured: true,
    status: "Production",
  },
  {
    id: "hojjre-precious-metals-exchange",
    title: "Hojjre: Dynamic Silver Trading Platform",
    category: "Full-Stack",
    tagline: "Full-stack commerce and dynamic valuation exchange for precious metals",
    description: "End-to-end full-stack web application designed for online silver trading, incorporating live market pricing engines, catalog administration, and client checkout workflows.",
    challenge: "Precious metals trading demands real-time price synchronization with dynamic markups, combined with responsive mobile shopping cart state and strict order validation.",
    architecture: "Next.js frontend with Context-based reactive state paired with Django REST Framework backend; PostgreSQL relational database for transactional integrity.",
    solution: "Engineered dynamic pricing update algorithms that automatically recalibrate SKU prices based on live silver bullion benchmark rates; built an ergonomic administrative dashboard for rapid inventory management.",
    impact: "Successfully streamlined inventory tracking, dynamic price recalculation, and end-user checkout for fine silver products.",
    technologies: ["Next.js", "React", "Django", "Python", "PostgreSQL", "Material UI", "REST APIs"],
    metrics: [
      { label: "Frontend", value: "Next.js / React" },
      { label: "Backend", value: "Django REST" },
      { label: "Feature", value: "Dynamic Live Pricing" },
    ],
    githubUrl: "https://github.com/am-afl",
    featured: true,
    status: "Production",
  },
  {
    id: "tapsell-adtech-dashboards",
    title: "Tapsell & Mediaad Ad-Tech Analytics Suite",
    category: "Systems",
    tagline: "High-volume ad impression monitoring and campaign management dashboards",
    description: "Enterprise analytics and operations dashboard built with Angular for managing large-scale digital advertising campaigns, performance metrics, and publisher payouts.",
    challenge: "Rendering high-density data tables and real-time chart visualisations without inducing client-side frame drops on low-spec client workstations.",
    architecture: "Angular architecture utilizing RxJS reactive pipelines, OnPush change detection strategies, and lazy-loaded administrative sub-modules.",
    solution: "Refactored UI components into lightweight, decoupled directives, implemented virtual scrolling on massive tabular datasets, and streamlined HTTP payload deserialization.",
    impact: "Elevated dashboard responsiveness across millions of daily impressions, improving campaign management efficiency for ad operations teams.",
    technologies: ["Angular", "TypeScript", "RxJS", "SCSS", "Performance Profiling", "REST APIs"],
    metrics: [
      { label: "Framework", value: "Angular + RxJS" },
      { label: "Domain", value: "Ad-Tech Analytics" },
      { label: "Optimization", value: "Virtual Scrolling & OnPush" },
    ],
    githubUrl: "https://github.com/am-afl",
    featured: false,
    status: "Production",
  },
  {
    id: "sharif-compiler-systems",
    title: "Sharif System Compiler & Code Generator",
    category: "Systems",
    tagline: "Multi-phase compiler architecture implementing lexical, syntactic, and code generation pipelines",
    description: "Comprehensive compiler implementation developed during academic coursework at Sharif University of Technology, demonstrating deep mastery of programming language theory and computer architecture.",
    challenge: "Translating high-level imperative language constructs into verifiable intermediate representations and target machine assembly while maintaining precise lexical error reporting.",
    architecture: "Multi-pass pipeline: Lexer -> Lexical/Syntax Analysis (AST generation) -> Type Checking & Semantic Analysis -> Three-Address Code (TAC) -> Target Assembly.",
    solution: "Implemented robust grammar parsing with predictive error recovery and optimal register allocation algorithms to produce clean, executable machine code.",
    impact: "Awarded top marks in Sharif's rigorous Compiler Design course; served as reference implementation for subsequent Teaching Assistant mentoring.",
    technologies: ["C", "Compiler Theory", "Lex/Yacc", "Assembly", "AST Parsing", "Optimization"],
    metrics: [
      { label: "Role", value: "Academic & TA Reference" },
      { label: "Scope", value: "Full-Pipeline Compiler" },
      { label: "School", value: "Sharif University of Tech" },
    ],
    githubUrl: "https://github.com/am-afl",
    featured: false,
    status: "Academic",
  },
];

export const TEACHING_EXPERIENCES: TeachingExperience[] = [
  {
    course: "Machine Learning",
    term: "Feb 2025 – Jun 2025",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Contributed to machine learning homework design, theoretical and practical coding assignments in Python/PyTorch.",
      "Co-designed midterm and final examination problems covering supervised learning, neural networks, and model evaluation metrics.",
    ],
    topics: ["Supervised Learning", "Deep Neural Networks", "Optimization", "Generalization & Regularization", "PyTorch"],
  },
  {
    course: "Scientific-Technical Presentation",
    term: "Oct 2024 – Feb 2025 & Feb 2025 – Jun 2025",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Mentored senior undergraduate students in structuring technical research talks and state-of-the-art computer science literature reviews.",
      "Conducted detailed critique sessions on technical communication, visual presentation design, and scholarly storytelling.",
    ],
    topics: ["Scholarly Literature Review", "Technical Public Speaking", "Scientific Writing", "Peer Review"],
  },
  {
    course: "Fundamentals of Programming",
    term: "Oct 2021 – Feb 2022 & Oct 2024 – Feb 2025",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Mentored incoming computer engineering students through foundational C programming, pointer semantics, recursion, and algorithmic thinking.",
      "Authored problem sets, managed automated grading pipelines, and held weekly coding recitation labs.",
    ],
    topics: ["C Language", "Memory Management", "Pointers & Arrays", "Recursion", "Algorithmic Problem Solving"],
  },
  {
    course: "Compiler Design",
    term: "Feb 2024 – Jun 2024",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Mentored student engineering teams through multi-phase compiler implementation: lexical tokenizing, AST parsing, semantic analysis, and code generation.",
      "Conducted code reviews and assisted in resolving edge cases in parsing algorithms and register allocation.",
    ],
    topics: ["Lexical Analysis", "LALR/LL Parsing", "AST Generation", "Type Checking", "Intermediate Code"],
  },
  {
    course: "Data Structures",
    term: "Feb 2024 – Jun 2024",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Guided students through computational complexity analysis, self-balancing binary search trees (AVL/Red-Black), graph traversals, and dynamic programming.",
      "Crafted hands-on algorithmic problem sets designed to reinforce rigorous proof-based theoretical intuition.",
    ],
    topics: ["Trees & Graphs", "Hashing", "Sorting Algorithms", "Asymptotic Analysis", "Heap Structures"],
  },
  {
    course: "Linear Algebra",
    term: "Feb 2024 – Jun 2024",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Assisted in grading and preparing computational problem sets covering vector spaces, linear transformations, eigenvalues/eigenvectors, and SVD.",
    ],
    topics: ["Vector Spaces", "Matrix Factorization", "SVD & PCA", "Eigenvalues", "Orthogonality"],
  },
  {
    course: "Advanced Programming",
    term: "Feb 2022 – Jun 2022",
    institution: "Sharif University of Technology",
    responsibilities: [
      "Mentored practical laboratory sessions focusing on Java, Object-Oriented Design (OOD), Design Patterns, and multi-threaded programming.",
      "Evaluated comprehensive team software engineering projects adhering to Clean Code standards.",
    ],
    topics: ["Java OOP", "Design Patterns", "Concurrency & Threads", "Unit Testing", "Software Architecture"],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Sharif University of Technology",
    degree: "B.Sc. in Computer Engineering",
    period: "2020 – 2025",
    location: "Tehran, Iran",
    gpa: "17.68 / 20.00",
    highlights: [
      "Sharif University of Technology is widely recognized as the premier institution for engineering and computer science in Iran, known globally for rigorous academic standards.",
      "Maintained a high GPA of 17.68/20.00 across advanced courses in Distributed Systems, Artificial Intelligence, Compilers, and Algorithms.",
      "Served as Teaching Assistant for 7 distinct departmental courses, mentoring hundreds of students.",
    ],
  },
  {
    institution: "Sadooghi High School (NODET)",
    degree: "Mathematics & Physics Diploma",
    period: "2018 – 2020",
    location: "Yazd, Iran",
    gpa: "19.52 / 20.00",
    highlights: [
      "National Organization for Development of Exceptional Talents (NODET / Sampad), admitting only top-scoring students through competitive nationwide entrance examinations.",
      "Graduated with exceptional academic distinction (GPA 19.52/20.00) with intensive focus on advanced mathematics, calculus, and physics.",
    ],
  },
];

export const AWARDS: Award[] = [
  {
    title: "Ranked Top 0.1% Nationwide — National University Entrance Exam",
    issuer: "Ministry of Science, Research and Technology (Sanjesh)",
    year: "2020",
    description: "Ranked among the top 0.1% out of more than 150,000 highly competitive participants nationwide in the Iranian National University Entrance Exam (Konkur) for Mathematics & Physics, securing admission to Sharif University of Technology.",
    metric: "Top 0.1% (150,000+ candidates)",
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    role: "Executive Staff",
    event: "ICPC Tehran Regional Site Contest",
    year: "2024 & 2022",
    description: "Coordinated contest operations, network infrastructure, and real-time team support for the prestigious International Collegiate Programming Contest (ICPC) Tehran Regional site hosted at Sharif University.",
  },
  {
    role: "Executive Staff",
    event: "Winter Seminar Series (WSS)",
    year: "2024",
    description: "Organized Sharif University's flagship annual computer science conference, featuring distinguished international keynote researchers and academic seminars in Artificial Intelligence and Systems.",
  },
  {
    role: "Executive Staff",
    event: "She'r ta Code (Spaghetti Code Contest)",
    year: "2024",
    description: "Co-organized a creative programming competition challenging participants to solve algorithmic puzzles while navigating intentionally obfuscated codebases.",
  },
  {
    role: "Executive Staff",
    event: "CODOCODILE Programming Competition",
    year: "2022",
    description: "Organized technical rounds and participant logistics for collegiate programming challenges at Sharif University of Technology.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Enterprise Microservices Architecture with Spring Boot & Kafka",
    issuer: "Domain-Driven Systems Engineering",
    year: "2026",
    focus: "Clean Architecture, Event Sourcing, Asynchronous Resilience",
  },
  {
    name: "Deep Learning & Multimodal Generative Modeling",
    issuer: "Sharif AI & Vision Research Labs",
    year: "2025",
    focus: "PyTorch, Transformers, CLIP, Diffusion Mechanics",
  },
  {
    name: "Concurrent Programming & Low-Latency Systems",
    issuer: "Sharif Department of Computer Engineering",
    year: "2024",
    focus: "JVM Internals, Memory Barriers, Lock-Free Data Structures",
  },
];
