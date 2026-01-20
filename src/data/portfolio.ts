import { IndianRupee } from "lucide-react";
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Code2,
    Database,
    Globe,
    Brain,
    ReceiptIndianRupee,
    Server,
    Wrench,
    Building2,
    Calendar,
    TrendingUp,
    Zap,
    Code,
    Users,
    GraduationCap,
    GitBranch,
    BookOpen,
    Award,
    Lightbulb,
    Music,
    ExternalLink,
    Send,
    MessageCircle
} from "lucide-react";
import React from "react";

export interface SocialProfile {
    platform: string;
    url: string;
    icon: React.ElementType;
}

export interface Experience {
    company: string;
    role: string;
    location: string;
    duration: string;
    type: string;
    projects: {
        name: string;
        impact: string;
        technologies: string[];
        achievements: string[];
    }[];
    highlight?: string;
}

export interface Project {
    title: string;
    description: string;
    icon: React.ElementType;
    features: string[];
    technologies: string[];
    highlight?: string;
    gradient: string;
    codeUrl?: string;
    liveUrl?: string;
}

export interface SkillCategory {
    id: string;
    label: string;
    icon: React.ElementType;
    skills: string[];
}

export interface TrainingArea {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    description: string;
    topics: string[];
    color: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    whatsapp: string;
}

export const portfolioData: {
    personal: {
        name: string;
        role: string;
        tagline: string;
        profileImage: string;
        resumeUrl: string;
        socials: SocialProfile[];
    };
    about: {
        description: string[];
        stats: {
            value: string;
            label: string;
            sub: string;
            color: string;
        }[];
    };
    skills: SkillCategory[];
    projects: Project[];
    training: TrainingArea[];
    experience: Experience[];
    contact: ContactInfo;
} = {
    personal: {
        name: "Shivam Jayswal",
        role: "Fullstack Developer | AI Integrator",
        tagline: "Building scalable systems and empowering the next generation of Python & AI developers",
        profileImage: "/shivam-ai-persona/image2.png",
        // profileImage: "/shivam-ai-persona/Media.jpg",
        resumeUrl: "/shivam-ai-persona/Shivam-Jayswal-Resume.pdf", // Assuming basename is /shivam-ai-persona
        socials: [
            {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/shivam-jayswal-developer",
                icon: Linkedin
            },
            {
                platform: "GitHub",
                url: "https://github.com/shivamrj1035",
                icon: Github
            }
        ]
    },
    about: {
        description: [
            "Passionate Fullstack Developer with hands-on experience in Python, Django, SQL, and React through professional roles and innovative projects.",
            "I specialize in building scalable applications and integrating cutting-edge Generative AI solutions to solve real-world problems.",
            "Strong collaborator with a growth mindset, eager to continuously develop technical and professional skills while mentoring the next generation of developers."
        ],
        stats: [
            { value: "1+", label: "Years Experience", sub: "in Software Development", color: "primary" },
            { value: "AI", label: "AI Integration Expert", sub: "Generative AI & Machine Learning", color: "accent" },
            { value: "10x", label: "Efficiency Improvement", sub: "through Automation & AI", color: "primary" }
        ]
    },
    skills: [
        {
            id: "backend",
            label: "Backend & APIs",
            icon: Server,
            skills: ["Python", "Django", "FastAPI", "Celery", "Flower", "REST APIs"]
        },
        {
            id: "frontend",
            label: "Frontend & UI",
            icon: Globe,
            skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn UI", "JavaScript"]
        },
        {
            id: "database",
            label: "Databases",
            icon: Database,
            skills: ["MySQL", "MongoDB", "SQL Server", "PostgreSQL", "Database Design"]
        },
        {
            id: "aiml",
            label: "AI/ML & Tools",
            icon: Brain,
            skills: ["Machine Learning", "Deep Learning", "Generative AI", "Gemini AI", "Python ML"]
        },
        {
            id: "tools",
            label: "Tools & Platforms",
            icon: Wrench,
            skills: ["Docker", "AWS", "GitHub", "Google Workspace", "n8n Automation", "Convex DB"]
        },
        {
            id: "languages",
            label: "Programming",
            icon: Code2,
            skills: ["Python", "JavaScript", "SQL", "Core Java", "Jinja2", "Pandas"]
        }
    ],
    projects: [
        {
            title: "Crack It: AI-Based Mock Interview Platform",
            description: "Revolutionary AI-powered platform helping candidates practice mock interviews with personalized feedback and real-time evaluation.",
            icon: Brain,
            features: [
                "AI-Generated Questions tailored to job roles",
                "Personalized Feedback with improvement suggestions",
                "Gemini AI integration for natural conversation",
                "End-to-End Implementation with authentication",
                "Real-time AI evaluation and scoring"
            ],
            technologies: ["Next.js", "Convex DB", "Clerk Auth", "n8n Automation", "Gemini AI"],
            highlight: "Featured Project",
            gradient: "from-primary to-accent",
            liveUrl: "https://crack-it-eight.vercel.app/dashboard",
            codeUrl: "https://github.com/shivamrj1035/crack-it"
        },
        {
            title: "Sangeet: Harmonizing Music Streaming",
            description: "Full-stack music streaming application with seamless Spotify API integration and modern user experience.",
            icon: Music,
            features: [
                "Full-stack architecture with React & Django",
                "Spotify API integration via RapidAPI",
                "MongoDB for complex data flow management",
                "Responsive and intuitive user interface",
                "Efficient music track fetching and management"
            ],
            technologies: ["Django", "MongoDB", "React", "RapidAPI", "Spotify API"],
            gradient: "from-accent to-primary",
            codeUrl: "https://github.com/shivamrj1035/sangeet"
        },
        {
            title: "Property Purchase Management System",
            description: "Web application to simplify and track your home buying financial journey with funding sources, EMI tracking, expense management, and reports.",
            icon: ReceiptIndianRupee,
            features: [
                "Track multiple funding sources including loans and personal contributions",
                "Automated EMI tracking with reminders for upcoming payments",
                "Comprehensive analytics and financial reports",
                "Expense management for builder payments and fees",
                "Detailed interest breakdown and exportable CSV/PDF reports"
            ],
            technologies: [
                "Next.js 14",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Zustand",
                "Recharts",
                "TanStack Table",
                "Framer Motion",
                "FastAPI",
                "JWT Authentication",
                "Cloud Firestore",
                "SendGrid",
                "APScheduler"
            ],
            gradient: "from-accent to-primary",
            liveUrl: "https://purchase-management-webapp.vercel.app/",
            codeUrl: "https://github.com/shivamrj1035/purchase-management-webapp"
        }
    ],
    training: [
        {
            title: "Python Development",
            subtitle: "Foundations to Advanced",
            icon: Code,
            description: "Comprehensive Python training covering fundamentals, OOP, web development with Django/FastAPI, and advanced concepts.",
            topics: [
                "Python Fundamentals & Syntax",
                "Object-Oriented Programming",
                "Django Framework Mastery",
                "FastAPI & REST APIs",
                "Database Integration & ORM",
                "Testing & Debugging"
            ],
            color: "primary"
        },
        {
            title: "Smart Development with AI",
            subtitle: "Integrating LLMs & Generative AI",
            icon: Brain,
            description: "Modern development practices incorporating AI tools, LLM integration, and building intelligent applications.",
            topics: [
                "Generative AI Integration",
                "LLM API Implementation",
                "AI-Powered Automation",
                "Machine Learning Workflows",
                "Prompt Engineering",
                "AI Ethics & Best Practices"
            ],
            color: "accent"
        },
        {
            title: "GitHub for Better Contribution",
            subtitle: "Collaboration & Version Control",
            icon: GitBranch,
            description: "Essential Git workflows, collaboration patterns, and open source contribution strategies for developers.",
            topics: [
                "Git Fundamentals & Workflows",
                "Branch Management Strategies",
                "Pull Request Best Practices",
                "Code Review Processes",
                "Open Source Contribution",
                "Team Collaboration Patterns"
            ],
            color: "primary"
        }
    ],
    experience: [
        {
            company: "Cerebulb India Pvt. Ltd.",
            role: "Jr. Fullstack Developer",
            location: "GIFT, Gandhinagar, India",
            duration: "Mar 2025 – Present",
            type: "Full-time",
            projects: [
                {
                    name: "Asset Performance Management",
                    impact: "Optimized large-scale SQL queries and implemented advanced filtering for high-performance data analytics",
                    technologies: ["Pandas", "Django", "Flower", "React.js", "Celery", "SQL Server", "Docker"],
                    achievements: [
                        "Built REST APIs for aggregating large-scale equipment data",
                        "Implemented Celery with Django for background data-sync jobs",
                        "Customized Flower dashboard for monitoring distributed tasks",
                        "Collaborated with QA teams ensuring smooth production delivery"
                    ]
                },
                {
                    name: "Automation of Asset Metadata & Tag Creation",
                    impact: "Delivered 10x improvement in efficiency, eliminating repetitive manual work",
                    technologies: ["Python", "FastAPI", "Jinja2", "SQL Server"],
                    achievements: [
                        "Built end-to-end automation system in just one week",
                        "Leveraged AI tools and rapid prototyping skills",
                        "Generated PI SDK tags with metadata validation",
                        "Reduced manual effort and error rates significantly"
                    ]
                }
            ],
            highlight: "Current Role"
        },
        {
            company: "Technman",
            role: "Python Intern",
            location: "India",
            duration: "Jul 2024 – Feb 2025",
            type: "Training & Development",
            projects: [
                {
                    name: "Technical Training Programs",
                    impact: "Python development and Docker AWS Learning",
                    technologies: ["Python", "Django", "AI/ML", "GitHub", "Docker", "AWS"],
                    achievements: [
                        "Delivered comprehensive Python development courses",
                        "Taught Smart Development with AI integration",
                        "Mentored students in GitHub collaboration practices",
                        "Achieved 95% student satisfaction rating"
                    ]
                }
            ]
        }
    ],
    contact: {
        email: "shivam.jayswal.1003@gmail.com",
        phone: "+91 9054401780",
        location: "Ahmedabad, Gujarat, India",
        whatsapp: "https://wa.me/919054401780"
    }
};
