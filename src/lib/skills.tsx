import { JSX } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaServer,
  FaDatabase,
  FaTools,
  FaJava,
  FaCuttlefish,
  FaGitAlt,
  FaNodeJs,
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
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

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
  banner?: any;
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
  Frontend: {
    skills: [
      {
        name: "React.js",
        desc: "Build powerful UIs using the React library.",
        badge: "TOP SKILL",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "HTML5 & CSS3",
        desc: "Create semantic and visually engaging web pages.",
        badge: "CORE WEB",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "Bootstrap",
        desc: "Popular CSS framework for responsive web design.",
        badge: "UI TOOLKIT",
        icon: <BsBootstrap className="text-indigo-400" />,
      },
      {
        name: "JavaScript",
        desc: "Core scripting language for dynamic web behavior.",
        badge: "APP WE LOVE",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "TypeScript",
        desc: "Typed JavaScript for scalable frontend codebases.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first CSS for building custom designs.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
    recent: [
      {
        name: "Tailwind CSS",
        desc: "Utility-first CSS for building custom designs.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "TypeScript",
        desc: "Typed JavaScript for scalable frontend codebases.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
    ],
    featured: [
      {
        name: "JavaScript",
        desc: "Core scripting language for dynamic web behavior.",
        badge: "APP WE LOVE",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "React.js",
        desc: "Build powerful UIs using the React library.",
        badge: "TOP SKILL",
        icon: <FaReact className="text-cyan-400" />,
      },
    ],
    learning: [
      {
        name: "Next.js",
        desc: "React framework for production web apps.",
        badge: "FRAMEWORK",
        icon: <SiNextdotjs className="text-white" />,
      },
      {
        name: "Framer Motion",
        desc: "Powerful animations in React apps.",
        badge: "ANIMATION",
        icon: <SiFramer className="text-pink-400" />,
      },
    ],
  },

  Backend: {
    skills: [
      {
        name: "Node.js",
        desc: "Asynchronous JavaScript runtime for scalable backend.",
        badge: "APP WE LOVE",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express.js",
        desc: "Minimalist web framework for Node.js.",
        badge: "FULL-STACK",
        icon: <FaServer className="text-gray-300" />,
      },
      {
        name: "Java",
        desc: "Versatile language for enterprise-grade systems.",
        badge: "STRONG TYPING",
        icon: <FaJava className="text-red-500" />,
      },
      {
        name: "C & C++",
        desc: "Low-level language for performance-critical tasks.",
        badge: "SYSTEMS",
        icon: <FaCuttlefish className="text-slate-200" />,
      },
    ],
    recent: [
      {
        name: "Node.js",
        desc: "Asynchronous JavaScript runtime for scalable backend.",
        badge: "APP WE LOVE",
        icon: <FaNodeJs className="text-green-500" />,
      },
    ],
    featured: [
      {
        name: "Node.js",
        desc: "Asynchronous JavaScript runtime for scalable backend.",
        badge: "APP WE LOVE",
        icon: <FaNodeJs className="text-green-500" />,
      },
    ],
    learning: [
      {
        name: "Redis",
        desc: "In-memory key-value database, great for caching.",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
    ],
  },

  Database: {
    skills: [
      {
        name: "MongoDB",
        desc: "NoSQL database for modern applications.",
        badge: "FLEXIBLE STORAGE",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        name: "Firestore",
        desc: "NoSQL cloud database by Firebase for scalable apps.",
        badge: "REAL-TIME DB",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "RealmDB",
        desc: "Mobile-first NoSQL database for offline-first apps.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
      {
        name: "MySQL",
        desc: "Reliable RDBMS for structured data.",
        badge: "TRUSTED DB",
        icon: <SiMysql className="text-blue-500" />,
      },
      {
        name: "SQL",
        desc: "Query and manipulate relational data efficiently.",
        badge: "DATA ACCESS",
        icon: <FaDatabase className="text-purple-400" />,
      },
    ],
    recent: [
      {
        name: "RealmDB",
        desc: "Mobile-first NoSQL database for offline-first apps.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
    ],
    featured: [
      {
        name: "MongoDB",
        desc: "NoSQL database for modern applications.",
        badge: "FLEXIBLE STORAGE",
        icon: <SiMongodb className="text-green-600" />,
      },
    ],
    learning: [],
  },

  Tools: {
    skills: [
      {
        name: "Firebase",
        desc: "Backend as a service for rapid app development.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "Git",
        desc: "Version control to track and manage changes.",
        badge: "CONTROL",
        icon: <FaGitAlt className="text-orange-400" />,
      },
      {
        name: "Postman",
        desc: "API testing and collaboration tool.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
      {
        name: "Vercel",
        desc: "Platform to deploy Next.js and frontend apps.",
        badge: "DEPLOY",
        icon: <SiVercel className="text-white" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "Firebase",
        desc: "Backend as a service for rapid app development.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400" />,
      },
    ],
    learning: [
      {
        name: "Postman",
        desc: "API testing and collaboration tool.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
    ],
  },

  "Mobile Development": {
    skills: [
      {
        name: "React Native",
        desc: "Build cross-platform mobile apps with React.",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Expo",
        desc: "Fast-track mobile app development with React Native.",
        badge: "MOBILE",
        icon: <SiExpo className="text-white" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "React Native",
        desc: "Build cross-platform mobile apps with React.",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400" />,
      },
    ],
    learning: [],
  },

  AI: {
    skills: [
      {
        name: "Artificial Intelligence (AI)",
        desc: "Explore intelligent systems and automation.",
        badge: "FUTURE TECH",
        icon: <img src="/ai.png" alt="AI" className="w-6 h-6" />,
      },
      {
        name: "Generative AI",
        desc: "Harness LLMs and models for creative solutions.",
        badge: "INNOVATION",
        icon: <img src="/genai.png" alt="GenAI" className="w-6 h-6" />,
      },
      {
        name: "AI for Devs",
        desc: "Specialization in generative AI for development workflows.",
        badge: "CERTIFIED",
        icon: <img src="/certified_ai.png" alt="AI Devs" className="w-6 h-6" />,
      },
    ],
    recent: [],
    featured: [],
    learning: [],
  },

  DSA: {
    skills: [
      {
        name: "Data Structures",
        desc: "Foundational concepts for organizing data.",
        badge: "DSA CORE",
        icon: <img src="/ds.png" alt="DS" className="w-6 h-6" />,
      },
      {
        name: "Algorithms",
        desc: "Learn algorithmic thinking for efficient solutions.",
        badge: "OPTIMIZATION",
        icon: <img src="/algo.png" alt="Algorithms" className="w-6 h-6" />,
      },
      {
        name: "Creative Problem Solving",
        desc: "Think out of the box and craft optimal solutions.",
        badge: "THINKING EDGE",
        icon: <img src="/creativity.png" alt="Creative" className="w-6 h-6" />,
      },
      {
        name: "Problem Solving (Basic)",
        desc: "Sharpen your logic with beginner challenges.",
        badge: "STARTER",
        icon: <img src="/ps.png" alt="Problem Solving" className="w-6 h-6" />,
      },
    ],
    recent: [],
    featured: [],
    learning: [],
  },
};

export default skillsData;
