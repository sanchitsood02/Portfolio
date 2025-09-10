import { JSX } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaMobileAlt,
  FaCode,
  FaDocker,
  FaUsers,
  FaCodeBranch,
  FaCheck,
  FaBug,
  FaComments,
  FaLightbulb,
  FaRandom,
  FaGraduationCap,
  FaBook,
  FaChartBar,
  FaChartLine,
  FaPuzzlePiece,
  FaFlask,
  FaFlag,
  FaDesktop,
  FaCloud,
  FaMobile,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiExpo,
  SiRealm,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import reactNative from "../assets/images/React_Native.png";
import mernStack from "../assets/images/MERN_Stack.png";
import { StaticImageData } from "next/image";

export type SkillItem = {
  name: string;
  desc: string;
  icon: JSX.Element;
  badge: string;
};

export type FeaturedItem = {
  name: string;
  desc: string;
  badge: string;
  icon: JSX.Element;
  banner?: string;
  image?: StaticImageData | string;
};

export type CategoryData = {
  featured: FeaturedItem[];
  skills: SkillItem[];
  learning: SkillItem[];
  recent: SkillItem[];
};

export type SkillsData = {
  [category: string]: CategoryData;
};

const skillsData: SkillsData = {
  "Machine Learning And Data Science": {
    skills: [
      {
        name: "Python",
        desc: "Core language for data science and machine learning projects.",
        badge: "CORE SKILL",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "Numpy",
        desc: "Used for numerical computing and array operations in data analysis.",
        badge: "DATA PROCESSING",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "Pandas",
        desc: "Leveraged for data manipulation, cleaning, and analysis.",
        badge: "DATA ANALYSIS",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "scikit-learn",
        desc: "Implemented various machine learning models and evaluation metrics.",
        badge: "ML FRAMEWORK",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "XGBoost",
        desc: "Applied for gradient boosting in classification and regression tasks.",
        badge: "ML ALGORITHM",
        icon: <FaPython className="text-green-500" />,
      },
      {
        name: "LightGBM",
        desc: "Used for efficient gradient boosting with faster training times.",
        badge: "ML ALGORITHM",
        icon: <FaPython className="text-green-500" />,
      },
      {
        name: "Statsmodels",
        desc: "Applied for statistical modeling and hypothesis testing.",
        badge: "STATISTICS",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "NLP",
        desc: "Experience with Whisper for speech recognition and embeddings for text analysis.",
        badge: "LANGUAGE PROCESSING",
        icon: <FaCode className="text-purple-500" />,
      },
      {
        name: "Feature Engineering",
        desc: "Created meaningful features to improve model performance.",
        badge: "ML TECHNIQUE",
        icon: <FaLightbulb className="text-yellow-400" />,
      },
      {
        name: "Model Selection",
        desc: "Evaluated and selected appropriate models for specific problems.",
        badge: "ML WORKFLOW",
        icon: <FaCheck className="text-green-500" />,
      },
    ],
    recent: [
      {
        name: "Time Series",
        desc: "Recently applied time series analysis for forecasting and trend detection.",
        badge: "FORECASTING",
        icon: <FaCode className="text-blue-500" />,
      },
      {
        name: "Drift Detection",
        desc: "Implemented methods to detect and address model and data drift.",
        badge: "ML OPS",
        icon: <FaRandom className="text-purple-500" />,
      },
    ],
    featured: [
      {
        name: "Predictive Analytics",
        desc: "Built end-to-end predictive models for business decision-making.",
        badge: "CORE EXPERTISE",
        icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
        banner: "from-blue-400 via-purple-400 to-indigo-500",
      },
      {
        name: "EDA",
        desc: "Conducted thorough exploratory data analysis to uncover patterns and insights.",
        badge: "DATA SCIENCE",
        icon: <FaDatabase className="text-blue-500 text-4xl" />,
        banner: "from-green-400 via-blue-500 to-purple-600",
      },
    ],
    learning: [
      {
        name: "Causal Intuition",
        desc: "Exploring causal inference methods beyond correlation analysis.",
        badge: "ADVANCED CONCEPT",
        icon: <FaLightbulb className="text-orange-400" />,
      },
      {
        name: "Mathematical Optimisation",
        desc: "Learning advanced optimization techniques for complex problems.",
        badge: "ALGORITHM",
        icon: <FaCode className="text-green-500" />,
      },
    ],
  },

  "Frontend & Product": {
    skills: [
      {
        name: "JavaScript/TypeScript",
        desc: "Proficient in both JavaScript and TypeScript for web development.",
        badge: "PROGRAMMING",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "React",
        desc: "Built interactive user interfaces with component-based architecture.",
        badge: "UI FRAMEWORK",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Next.js",
        desc: "Developed applications with server-side rendering and static generation.",
        badge: "FRAMEWORK",
        icon: <SiNextdotjs className="text-black" />,
      },
      {
        name: "Tailwind CSS",
        desc: "Created responsive designs with utility-first CSS framework.",
        badge: "STYLING",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "Bootstrap",
        desc: "Implemented responsive layouts using Bootstrap components.",
        badge: "UI FRAMEWORK",
        icon: <BsBootstrap className="text-purple-500" />,
      },
      {
        name: "HTML",
        desc: "Created semantic markup for accessible web applications.",
        badge: "MARKUP",
        icon: <FaHtml5 className="text-orange-500" />,
      },
    ],
    recent: [
      {
        name: "Vercel",
        desc: "Recently deployed applications using Vercel's platform.",
        badge: "DEPLOYMENT",
        icon: <SiVercel className="text-black" />,
      },
      {
        name: "Performance Optimisation",
        desc: "Improved web application performance through various techniques.",
        badge: "OPTIMIZATION",
        icon: <FaLightbulb className="text-yellow-400" />,
      },
    ],
    featured: [
      {
        name: "React",
        desc: "Built interactive and responsive user interfaces for web applications.",
        badge: "FRONTEND",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        banner: "from-cyan-400 via-blue-400 to-indigo-500",
      },
      {
        name: "Next.js",
        desc: "Developed applications with improved SEO and performance.",
        badge: "FULLSTACK",
        icon: <SiNextdotjs className="text-black text-4xl" />,
        banner: "from-neutral-800 via-gray-900 to-black",
      },
    ],
    learning: [
      {
        name: "Accessibility",
        desc: "Learning best practices for creating accessible web applications.",
        badge: "UX",
        icon: <FaUsers className="text-blue-500" />,
      },
    ],
  },

  "Backend & Systems": {
    skills: [
      {
        name: "Java",
        desc: "Developed backend services and applications using Java.",
        badge: "PROGRAMMING",
        icon: <FaCode className="text-red-500" />,
      },
      {
        name: "Go",
        desc: "Built efficient and concurrent backend services.",
        badge: "PROGRAMMING",
        icon: <FaCode className="text-blue-500" />,
      },
      {
        name: "Python",
        desc: "Created backend services and data processing pipelines.",
        badge: "PROGRAMMING",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "Distributed Systems",
        desc: "Designed and implemented distributed system architectures.",
        badge: "ARCHITECTURE",
        icon: <FaServer className="text-gray-500" />,
      },
      {
        name: "Microservices",
        desc: "Built scalable applications using microservices architecture.",
        badge: "ARCHITECTURE",
        icon: <FaServer className="text-blue-500" />,
      },
      {
        name: "API Design",
        desc: "Designed and implemented RESTful and gRPC APIs.",
        badge: "INTEGRATION",
        icon: <FaCode className="text-green-500" />,
      },
      {
        name: "Docker and Kubernetes",
        desc: "Containerized applications and managed deployments with Kubernetes.",
        badge: "DEVOPS",
        icon: <FaDocker className="text-blue-500" />,
      },
      {
        name: "AWS/GCP",
        desc: "Deployed and managed cloud infrastructure on AWS and GCP.",
        badge: "CLOUD",
        icon: <FaServer className="text-blue-300" />,
      },
      {
        name: "PostgreSQL & Redis",
        desc: "Worked with relational and in-memory databases for various applications.",
        badge: "DATABASE",
        icon: <FaDatabase className="text-blue-500" />,
      },
    ],
    recent: [
      {
        name: "Kafka",
        desc: "Recently implemented event-driven architectures using Kafka.",
        badge: "MESSAGING",
        icon: <FaCode className="text-red-500" />,
      },
      {
        name: "CI/CD",
        desc: "Set up continuous integration and deployment pipelines using Git and Jenkins.",
        badge: "DEVOPS",
        icon: <FaGitAlt className="text-orange-500" />,
      },
    ],
    featured: [
      {
        name: "Node.js",
        desc: "Efficient backend runtime used in scalable full-stack projects.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
        banner: "from-green-400 via-emerald-500 to-green-600",
      },
    ],
    learning: [
      {
        name: "Redis",
        desc: "Exploring for caching strategies and session storage while learning URL shortening.",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
    ],
  },

  Database: {
    skills: [
      {
        name: "PostgreSQL",
        desc: "Used in microservices architecture for e-commerce platform.",
        badge: "SQL",
        icon: <SiPostgresql className="text-blue-500" />,
      },
      {
        name: "Redis",
        desc: "Used for caching in event-driven ERP system.",
        badge: "IN-MEMORY",
        icon: <SiRedis className="text-red-500" />,
      },
      {
        name: "BigQuery",
        desc: "Used with GA4 for e-commerce analytics and data processing.",
        badge: "DATA WAREHOUSE",
        icon: <FaDatabase className="text-blue-500" />,
      },
      {
        name: "Looker",
        desc: "Used for business intelligence and analytics dashboards.",
        badge: "BI TOOL",
        icon: <FaDatabase className="text-green-500" />,
      },
      {
        name: "Power Query",
        desc: "Used for data transformation in e-commerce analytics pipeline.",
        badge: "ETL",
        icon: <FaDatabase className="text-blue-500" />,
      },
      {
        name: "Microsoft Excel",
        desc: "Used for data analysis and reporting in various projects.",
        badge: "DATA ANALYSIS",
        icon: <FaDatabase className="text-green-500" />,
      },
    ],
    recent: [
      {
        name: "RealmDB",
        desc: "Recently used for persistent storage in mobile app(SlayDay) built with Expo.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
    ],
    featured: [
      {
        name: "Firestore",
        desc: "Used for live syncing and user authentication data in mobile apps.",
        badge: "REALTIME DB",
        icon: <SiFirebase className="text-orange-500 text-4xl" />,
        banner: "from-yellow-300 via-orange-400 to-red-500",
      },
    ],
    learning: [],
  },

  Tools: {
    skills: [
      {
        name: "Docker",
        desc: "Used for containerization in microservices architecture.",
        badge: "CONTAINERIZATION",
        icon: <FaDocker className="text-blue-500" />,
      },
      {
        name: "Agile",
        desc: "Worked in Agile teams for software development and delivery.",
        badge: "METHODOLOGY",
        icon: <FaUsers className="text-green-500" />,
      },
      {
        name: "CI/CD",
        desc: "Implemented continuous integration and deployment on AWS.",
        badge: "DEVOPS",
        icon: <FaCodeBranch className="text-blue-500" />,
      },
      {
        name: "Pytest",
        desc: "Used for unit testing in Python projects.",
        badge: "TESTING",
        icon: <FaCheck className="text-green-500" />,
      },
      {
        name: "Debugging",
        desc: "Proficient in debugging and troubleshooting software issues.",
        badge: "DEVELOPMENT",
        icon: <FaBug className="text-red-500" />,
      },
      {
        name: "Stakeholder Management",
        desc: "Experienced in managing stakeholder expectations and communication.",
        badge: "SOFT SKILL",
        icon: <FaUsers className="text-blue-500" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "Firebase",
        desc: "Used for user authentication, real-time DB, and hosting.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400 text-4xl" />,
        banner: "from-yellow-300 via-orange-400 to-amber-500",
      },
    ],
    learning: [
      {
        name: "Postman",
        desc: "Exploring advanced API test automation with collections.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
    ],
  },

  "Design & Technical Communication": {
    skills: [
      {
        name: "Figma",
        desc: "Created UI mockups and user flows for application design.",
        badge: "UI/UX",
        icon: <SiFigma className="text-purple-500" />,
      },
      {
        name: "Excalidraw/Mermaid",
        desc: "Designed architecture and sequence diagrams for technical documentation.",
        badge: "DIAGRAMMING",
        icon: <FaCodeBranch className="text-blue-500" />,
      },
      {
        name: "draw.io/Lucidchart",
        desc: "Created flowcharts and diagrams for system architecture.",
        badge: "DIAGRAMMING",
        icon: <FaCodeBranch className="text-orange-500" />,
      },
      {
        name: "Miro",
        desc: "Facilitated collaborative whiteboarding sessions for project planning.",
        badge: "COLLABORATION",
        icon: <FaUsers className="text-blue-500" />,
      },
      {
        name: "Notion/Confluence",
        desc: "Created comprehensive technical documentation and RFCs.",
        badge: "DOCUMENTATION",
        icon: <FaBook className="text-gray-500" />,
      },
      {
        name: "Jupyter/Quarto",
        desc: "Developed interactive analysis reports with code and visualizations.",
        badge: "DATA REPORTING",
        icon: <FaPython className="text-orange-500" />,
      },
    ],
    recent: [
      {
        name: "LaTeX",
        desc: "Recently used for creating professional papers and documentation.",
        badge: "TYPESETTING",
        icon: <FaCode className="text-gray-700" />,
      },
      {
        name: "Looker Studio/Tableau",
        desc: "Created interactive data visualizations and dashboards.",
        badge: "DATA VIZ",
        icon: <FaChartBar className="text-blue-500" />,
      },
    ],
    featured: [
      {
        name: "Figma",
        desc: "Designed user interfaces and prototypes for web and mobile applications.",
        badge: "DESIGN",
        icon: <SiFigma className="text-purple-500 text-4xl" />,
        banner: "from-purple-400 via-pink-500 to-red-500",
      },
      {
        name: "Notion",
        desc: "Created comprehensive documentation and knowledge bases for projects.",
        badge: "DOCUMENTATION",
        icon: <FaBook className="text-gray-700 text-4xl" />,
        banner: "from-gray-300 via-gray-400 to-gray-500",
      },
    ],
    learning: [
      {
        name: "Keynote/Google Slides",
        desc: "Learning to create effective stakeholder presentations and decks.",
        badge: "PRESENTATION",
        icon: <FaDesktop className="text-blue-500" />,
      },
    ],
  },

  "Soft Skills": {
    skills: [
      {
        name: "Technical Communication",
        desc: "Effectively communicated complex technical concepts to diverse audiences.",
        badge: "COMMUNICATION",
        icon: <FaComments className="text-blue-500" />,
      },
      {
        name: "Data Storytelling",
        desc: "Transformed data insights into compelling narratives for stakeholders.",
        badge: "COMMUNICATION",
        icon: <FaChartLine className="text-green-500" />,
      },
      {
        name: "Problem Decomposition",
        desc: "Broke down complex problems into manageable components for effective solutions.",
        badge: "PROBLEM SOLVING",
        icon: <FaPuzzlePiece className="text-yellow-500" />,
      },
      {
        name: "Experiment Design",
        desc: "Designed and implemented rigorous experiments to test hypotheses.",
        badge: "METHODOLOGY",
        icon: <FaFlask className="text-purple-500" />,
      },
      {
        name: "A/B Testing",
        desc: "Conducted controlled experiments to evaluate design and feature changes.",
        badge: "TESTING",
        icon: <FaCode className="text-blue-500" />,
      },
      {
        name: "Stakeholder Management",
        desc: "Built and maintained relationships with key stakeholders across projects.",
        badge: "LEADERSHIP",
        icon: <FaUsers className="text-blue-500" />,
      },
    ],
    recent: [
      {
        name: "Product Sense",
        desc: "Recently developed intuition for product features and user needs.",
        badge: "PRODUCT",
        icon: <FaLightbulb className="text-yellow-500" />,
      },
      {
        name: "Collaboration and Code Review",
        desc: "Participated in collaborative development and thorough code reviews.",
        badge: "TEAMWORK",
        icon: <FaCodeBranch className="text-green-500" />,
      },
    ],
    featured: [
      {
        name: "Technical Communication",
        desc: "Effectively communicated complex technical concepts to diverse audiences.",
        badge: "CORE SKILL",
        icon: <FaComments className="text-blue-500 text-4xl" />,
        banner: "from-blue-400 via-indigo-500 to-purple-600",
      },
      {
        name: "Adaptability",
        desc: "Quickly adapted to new technologies, environments, and challenges.",
        badge: "MINDSET",
        icon: <FaRandom className="text-purple-500 text-4xl" />,
        banner: "from-purple-400 via-pink-500 to-red-500",
      },
    ],
    learning: [
      {
        name: "Ownership and Bias for Action",
        desc: "Developing stronger ownership mentality and proactive problem-solving approach.",
        badge: "LEADERSHIP",
        icon: <FaFlag className="text-red-500" />,
      },
    ],
  },

  "Mobile Development": {
    skills: [
      {
        name: "React Native",
        desc: "Built cross-platform mobile applications with native performance.",
        badge: "FRAMEWORK",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Expo",
        desc: "Used for rapid development and deployment of React Native apps.",
        badge: "TOOLCHAIN",
        icon: <SiExpo className="text-black" />,
      },
      {
        name: "Native Modules",
        desc: "Integrated native functionality into React Native applications.",
        badge: "INTEGRATION",
        icon: <FaMobile className="text-gray-500" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "React Native",
        desc: "Built cross-platform mobile app components with animations and accessibility improvements.",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        banner: "from-blue-400 via-cyan-500 to-teal-400",
      },
    ],
    learning: [],
  },

  All: {
    skills: [
      {
        name: "React Native",
        desc: "Built animated, cross-platform mobile components with charts and Firebase in work and personal projects",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Expo",
        desc: "Used to streamline React Native development, updates, and builds.",
        badge: "MOBILE",
        icon: <SiExpo className="text-black" />,
      },
      {
        name: "Python",
        desc: "Used for AI/ML projects, scripting, and solving 550+ LeetCode coding problems.",
        badge: "VERSATILE & POPULAR",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "React.js",
        desc: "Used to build interactive UIs in web projects and dashboards using reusable components.",
        badge: "TOP SKILL",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Next.js",
        desc: "Built my portfolio using it to ensure good SEO and fast load times.",
        badge: "FULLSTACK",
        icon: <SiNextdotjs className="text-black text-4xl" />,
      },
      {
        name: "TypeScript",
        desc: "Use TypeScript regularly in both my professional React Native work and personal projects to maintain type safety and catch bugs early.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        desc: "Utilized for fast and custom UI design in portfolio and product-based UIs.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "NativeWind",
        desc: "Used to bring Tailwind-like utility-first styling to React Native apps, improving dev speed and consistency.",
        badge: "UTILITY STYLE",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "HTML5 & CSS3",
        desc: "Built responsive layouts and semantic markup for client websites and projects.",
        badge: "CORE WEB",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "JavaScript",
        desc: "Used in React Native and web projects, including state and DOM manipulation.",
        badge: "Most Used",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "Bootstrap",
        desc: "Used for responsive design during internships and personal projects.",
        badge: "UI TOOLKIT",
        icon: <BsBootstrap className="text-indigo-400" />,
      },
      {
        name: "Node.js",
        desc: "Built backend services and REST APIs for full-stack apps using Express.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Firestore",
        desc: "Integrated with Firebase for real-time database syncing in react native based app and client web sites.",
        badge: "REAL-TIME DB",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "RealmDB",
        desc: "Used for offline-first local storage in React Native projects.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
      {
        name: "Firebase",
        desc: "Implemented user auth, analytics, and database in mobile/web apps.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "Vercel",
        desc: "Deployed portfolio with seamless CI/CD workflows.",
        badge: "DEPLOY",
        icon: <SiVercel className="text-black" />,
      },
      {
        name: "MongoDB",
        desc: "Used as NoSQL database for full-stack project with Mongoose ORM.",
        badge: "FLEXIBLE STORAGE",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        name: "MySQL",
        desc: "Used in Spring Boot projects during internship to store structured data.",
        badge: "TRUSTED DB",
        icon: <SiMysql className="text-blue-500" />,
      },
      {
        name: "SQL",
        desc: "Proficient in writing complex queries for relational data analysis.",
        badge: "DATA ACCESS",
        icon: <FaDatabase className="text-purple-400" />,
      },
      {
        name: "Git",
        desc: "Used for version control and collaborative development across teams.",
        badge: "CONTROL",
        icon: <FaGitAlt className="text-orange-400" />,
      },
      {
        name: "Postman",
        desc: "Used for API testing, debugging, and sharing during backend development.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
      {
        name: "Express.js",
        desc: "Used with Node.js to create RESTful APIs and middleware for projects.",
        badge: "FULL-STACK",
        icon: <FaServer className="text-gray-300" />,
      },
    ],

    recent: [
      {
        name: "Tailwind CSS",
        desc: "Used in recent portfolio redesigns for rapid prototyping.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "TypeScript",
        desc: "Actively used in React Native codebases for type safety and bug prevention.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Node.js",
        desc: "Used recently in full-stack project with MongoDB and Firebase integration.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "RealmDB",
        desc: "Recently used for persistent storage in mobile app(SlayDay) built with Expo.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
    ],

    featured: [
      {
        name: "Python",
        desc: "Built predictive maintenance modules and meeting-intelligence automation.",
        badge: "TOP SKILL",
        icon: <FaPython className="text-blue-400 text-4xl" />,
        banner: "from-blue-400 via-blue-500 to-blue-600",
        image: reactNative,
      },
      {
        name: "Data Analysis",
        desc: "Created analytics pipelines and visualizations for business intelligence.",
        badge: "ANALYTICS",
        icon: <FaDatabase className="text-green-500 text-4xl" />,
        banner: "from-green-400 via-green-500 to-green-600",
        image: mernStack,
      },
    ],

    learning: [
      {
        name: "Next.js",
        desc: "Exploring for advanced server-side rendering and API routes.",
        badge: "FRAMEWORK",
        icon: <SiNextdotjs className="text-black" />,
      },
      {
        name: "Framer Motion",
        desc: "Used for animations and smooth transitions in this portfolio.",
        badge: "ANIMATION",
        icon: <SiFramer className="text-pink-400" />,
      },
      {
        name: "Redis",
        desc: "Exploring for caching strategies and session storage while learning URL shortening",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
      {
        name: "Postman",
        desc: "Exploring advanced API test automation with collections.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
    ],
  },

  "All": {
    skills: [
      // Include skills from all categories
      {
        name: "Python",
        desc: "Core language for data science and machine learning projects.",
        badge: "CORE SKILL",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "React.js",
        desc: "Built interactive user interfaces with component-based architecture.",
        badge: "UI FRAMEWORK",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Java",
        desc: "Developed backend services and applications using Java.",
        badge: "PROGRAMMING",
        icon: <FaCode className="text-red-500" />,
      },
      {
        name: "Figma",
        desc: "Created wireframes, prototypes, and UI designs for web and mobile applications.",
        badge: "DESIGN",
        icon: <SiFigma className="text-purple-500" />,
      },
      {
        name: "Leadership",
        desc: "Led teams and projects, providing direction and mentorship.",
        badge: "SOFT SKILL",
        icon: <FaFlag className="text-red-500" />,
      },
    ],
    recent: [
      {
        name: "Tailwind CSS",
        desc: "Used in recent portfolio redesigns for rapid prototyping.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "Kafka",
        desc: "Recently implemented event-driven architectures using Kafka.",
        badge: "MESSAGING",
        icon: <FaCode className="text-red-500" />,
      },
    ],
    featured: [
      {
        name: "Python",
        desc: "Built predictive maintenance modules and meeting-intelligence automation.",
        badge: "TOP SKILL",
        icon: <FaPython className="text-blue-400 text-4xl" />,
        banner: "from-blue-400 via-blue-500 to-blue-600",
      },
      {
        name: "React",
        desc: "Built interactive and responsive user interfaces for web applications.",
        badge: "FRONTEND",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        banner: "from-cyan-400 via-blue-400 to-indigo-500",
      },
    ],
    learning: [
      {
        name: "Redis",
        desc: "Exploring for caching strategies and session storage while learning URL shortening.",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
      {
        name: "Accessibility",
        desc: "Learning best practices for creating accessible web applications.",
        badge: "UX",
        icon: <FaUsers className="text-blue-500" />,
      },
    ],
  },
};

export default skillsData;
