import type { ResumeContent } from "@/types/resume";

/**
 * Single source of truth for all resume-derived content. Every scene
 * component reads from here — never hardcode a resume fact in a component.
 * Sourced verbatim from Abhi Jain's CV; nothing here is invented.
 */
export const resume: ResumeContent = {
  contact: {
    name: "Abhi Jain",
    headline:
      "Assistant Professor – Business Statistics & AI | AI Educator & Applied AI Engineer",
    location: "New Delhi, India",
    email: "ajgearupgirl@gmail.com",
    phone: "+91 858 698 0446",
    linkedin: "linkedin.com/in/abhijain-ai-engineer",
    github: "github.com/abhi-jain-ai-engineer",
  },

  profileSummary:
    "Academician and AI practitioner with 10 years of teaching and training experience " +
    "and hands-on industry experience building production AI systems. Currently Assistant " +
    "Professor at Hi-Tech Institute of Engineering & Technology, teaching Business Statistics " +
    "and Artificial Intelligence. Served as Visiting Faculty for AI & ML across multiple " +
    "institutes and universities. Combines a business and actuarial-statistics foundation " +
    "(BBA; Chartered Enterprise Risk Actuary track, IFoA UK) with an MSc in Machine Learning " +
    "& AI, bringing real-world engineering in agentic LLMs, RAG and automation into the " +
    "classroom.",

  highlights: [
    { label: "Learners taught", value: "500+ over 10 years" },
    { label: "Learner satisfaction", value: "4.8 / 5" },
    { label: "Sales-conversion uplift (AI training platform)", value: "20%" },
    { label: "Time reduction in curriculum generation (automation)", value: "99%" },
  ],

  experience: [
    {
      role: "Assistant Professor",
      org: "Hi-Tech Institute of Engineering & Technology",
      start: "Sept 2026",
      end: "Present",
      summary: "Business Statistics and Artificial Intelligence.",
      highlights: [
        "Teach core courses in Business Statistics (descriptive statistics, probability, sampling, hypothesis testing, correlation & regression) and Artificial Intelligence (ML fundamentals, generative AI, LLMs and applied AI).",
        "Contribute to curriculum building: developing syllabi, course plans and industry-aligned modules on AI, data analytics and emerging technologies.",
        "Prepare course files, lesson plans and CO–PO mapping under the Outcome-Based Education (OBE) framework; design question papers, assignments and evaluation rubrics.",
        "Integrate hands-on learning using Excel, Python and AI tools through lab sessions, case studies and real-world datasets.",
        "Mentor students on academic progress, projects, internships and AI career pathways; guide minor and major projects.",
        "Support departmental activities including workshops, guest lectures, hackathons, accreditation documentation and industry–academia collaboration.",
      ],
    },
    {
      role: "Contract AI Trainer & Consultant",
      org: "Contract engagements with multiple corporate and institutional clients (incl. LevelApp, Edvi)",
      start: "Jan 2026",
      end: "Aug 2026",
      summary: "AI literacy and upskilling programs for corporate teams, colleges and training institutions.",
      highlights: [
        "Designed and delivered AI literacy and upskilling programs for corporate teams, colleges and training institutions.",
        "Trained 100+ learners per month in prompt engineering, generative AI tools (ChatGPT, Claude, Gemini, Midjourney) and workflow automation (n8n).",
        "Built structured curricula on LLM fundamentals, automation and practical AI integration for non-technical audiences.",
        "Conducted live workshops, cohort-based courses and 1:1 mentoring; maintained a 4.8/5 satisfaction rating.",
        "Created project assignments and real-world case studies bridging theory and hands-on application.",
      ],
    },
    {
      role: "Visiting Faculty – Artificial Intelligence & Machine Learning",
      org: "Multiple institutes and universities",
      start: "June 2025",
      end: "July 2026",
      summary: "Lectures on AI, Machine Learning and Generative AI for undergraduate and postgraduate students.",
      highlights: [
        "Delivered lectures and sessions on Artificial Intelligence, Machine Learning and Generative AI to undergraduate and postgraduate students across multiple institutions.",
        "Bridged theory with practice through industry case studies, live demonstrations and hands-on problem-solving; guided students on AI projects and careers.",
      ],
    },
    {
      role: "AI Engineer",
      org: "JetLearn B.V. | New Delhi",
      start: "June 2025",
      end: "Jan 2026",
      summary: "Multi-agent LLM orchestration systems with RAG pipelines.",
      highlights: [
        "Architected multi-agent LLM orchestration systems (LangChain, AutoGen) with RAG pipelines on Pinecone, FAISS and knowledge graphs.",
        "Built a conversational AI training platform (Claude, Azure OpenAI) that improved sales conversion by 20%; automated curriculum generation with 99% time reduction.",
        "Developed a customer-intelligence system with 89% data accuracy and an AI transcript-QA engine cutting weekly analysis from 8 hours to 15 minutes.",
        "Led cross-functional teams; managed REST API integrations with HubSpot and Salesforce alongside growth analytics.",
      ],
    },
    {
      role: "AI Engineer – Client Automation",
      org: "Meera Samuh | Remote / New Delhi",
      start: "Apr 2023",
      end: "May 2025",
      summary: "End-to-end AI automation using multi-agent LLM pipelines.",
      highlights: [
        "Delivered end-to-end AI automation using multi-agent LLM pipelines (LangChain, CrewAI) for document intelligence and compliance checking.",
        "Built RAG knowledge systems over regulatory manuals and SOPs; integrated Azure Event Hub and REST APIs for real-time data feeds.",
        "Deployed ML models (Melanoma Detection, Telecom Churn, House Price Prediction) aligned to client business goals.",
      ],
    },
    {
      role: "AI & Coding Educator",
      org: "Multiple education platforms and institutions",
      start: "Apr 2016",
      end: "Feb 2023",
      summary: "Python programming, Machine Learning and Deep Learning, taught to 500+ students over 7 years.",
      highlights: [
        "Taught 500+ students in Python programming, Machine Learning and Deep Learning over 7 years.",
        "Designed curriculum and course material; organised hackathons (incl. AI Hackathon, Amritsar) and delivered corporate AI webinars.",
        "Mentored learners from beginners to working professionals transitioning into AI and data careers.",
      ],
    },
  ],

  education: [
    {
      institution: "Liverpool John Moores University, UK",
      credential: "MSc Machine Learning & Artificial Intelligence",
      start: "2024",
      end: "2026",
    },
    {
      institution: "IIIT Bangalore & upGrad",
      credential: "PG Program in Machine Learning & AI",
      start: "2023",
      end: "2024",
    },
    {
      institution: "Institute & Faculty of Actuaries, UK (IFoA)",
      credential: "Chartered Enterprise Risk Actuary (CERA)",
      start: "2020",
      end: "Pursuing",
      status: "in_progress",
    },
    {
      institution: "Bharati Vidyapeeth University",
      credential: "Bachelor of Business Administration (BBA)",
      start: "2014",
      end: "2017",
    },
  ],

  skills: [
    {
      id: "statistics",
      title: "Statistics & Analytics",
      items: [
        "Descriptive & inferential statistics",
        "Probability",
        "Regression",
        "Time-series basics",
        "Risk modelling",
        "Excel",
        "Pandas",
        "NumPy",
        "Tableau",
        "Power BI",
      ],
    },
    {
      id: "pedagogy",
      title: "Pedagogy",
      items: [
        "Curriculum design",
        "OBE & CO–PO mapping",
        "Assessment & rubric design",
        "Case-based learning",
        "Project-based learning",
        "Mentoring",
      ],
    },
    {
      id: "ai-teaching",
      title: "AI Tools for Teaching",
      items: ["ChatGPT", "Claude", "Gemini", "Copilot", "Midjourney", "DALL·E"],
    },
    {
      id: "agentic-ai",
      title: "LLM & Agentic AI",
      items: [
        "OpenAI",
        "Azure OpenAI",
        "Claude API",
        "Hugging Face",
        "LangChain",
        "CrewAI",
        "AutoGen",
        "RAG (Pinecone, FAISS, Chroma)",
        "Knowledge graphs",
      ],
    },
    {
      id: "ml-dl",
      title: "ML & Deep Learning",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost"],
    },
    {
      id: "engineering",
      title: "Engineering",
      items: [
        "Python",
        "FastAPI",
        "Flask",
        "REST APIs",
        "SQL / MySQL",
        "Docker",
        "Git",
        "AWS (EC2, S3)",
        "Azure",
        "Kafka",
        "n8n",
        "Make.com",
        "Zapier",
      ],
    },
  ],

  projects: [
    {
      id: "ai-literacy-curriculum",
      name: "AI Literacy Curriculum",
      year: "2026",
      description:
        "End-to-end course from LLM concepts to hands-on tools (Claude, ChatGPT, Gemini, n8n) for college students and early-career professionals.",
      tools: ["Claude", "ChatGPT", "Gemini", "n8n"],
    },
    {
      id: "parent-simulator",
      name: "Parent Simulator",
      year: "2025",
      description:
        "Multi-agent conversational training platform built at JetLearn for sales enablement.",
      tools: ["Claude", "Azure OpenAI"],
      outcome: "20% sales-conversion uplift",
    },
    {
      id: "transcript-analysis-engine",
      name: "Transcript Analysis Engine",
      year: "2025",
      description:
        "RAG-powered QA automation with monitoring and fallback, built at JetLearn.",
      tools: ["RAG", "Monitoring & fallback pipeline"],
      outcome: "Weekly analysis reduced from 8 hours to 15 minutes",
    },
    {
      id: "resume-screening-system",
      name: "Resume Screening System",
      year: "2024",
      description:
        "NLP and knowledge-graph candidate screening with automated CV parsing, matching and ranking, built at Meera Samuh.",
      tools: ["Python", "FastAPI", "MySQL", "Docker"],
    },
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
  ],
};
