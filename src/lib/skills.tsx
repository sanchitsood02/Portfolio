import { JSX } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaServer,
  FaDatabase,
  FaJava,
  FaCuttlefish,
  FaGitAlt,
  FaNodeJs,
  FaPython,
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
        desc: "Used to build interactive UIs in web projects and dashboards using reusable components.",
        badge: "TOP SKILL",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "HTML5 & CSS3",
        desc: "Built responsive layouts and semantic markup for client websites and projects.",
        badge: "CORE WEB",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "Bootstrap",
        desc: "Used for responsive design during internships and personal landing pages.",
        badge: "UI TOOLKIT",
        icon: <BsBootstrap className="text-indigo-400" />,
      },
      {
        name: "JavaScript",
        desc: "Used for frontend logic and React-based applications, including state and DOM manipulation.",
        badge: "Most Used",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "TypeScript",
        desc: "Used in React Native and web projects for better type safety and maintainability.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        desc: "Utilized for fast and custom UI design in portfolio and product-based UIs.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
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
    ],
    featured: [
      {
        name: "Tailwind CSS",
        desc: "Utility-first CSS framework for rapid UI development.",
        badge: "DESIGN TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
        banner: "from-sky-400 via-blue-300 to-blue-500",
      },
      {
        name: "Next.js",
        desc: "Used for building SEO-optimized, server-rendered apps and blogs.",
        badge: "FULLSTACK",
        icon: <SiNextdotjs className="text-white text-4xl" />,
        banner: "from-neutral-800 via-gray-900 to-black",
      },
    ],
    learning: [
      {
        name: "Next.js",
        desc: "Exploring for advanced server-side rendering and API routes.",
        badge: "FRAMEWORK",
        icon: <SiNextdotjs className="text-white" />,
      },
      {
        name: "Framer Motion",
        desc: "Used for animations and smooth transitions in this portfolio.",
        badge: "ANIMATION",
        icon: <SiFramer className="text-pink-400" />,
      },
    ],
  },

  Backend: {
    skills: [
      {
        name: "Node.js",
        desc: "Built backend services and REST APIs for full-stack apps using Express.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express.js",
        desc: "Used with Node.js to create RESTful APIs and middleware for projects.",
        badge: "FULL-STACK",
        icon: <FaServer className="text-gray-300" />,
      },
      {
        name: "Python",
        desc: "Used for AI/ML projects, scripting, and solving 550+ LeetCode DSA problems.",
        badge: "VERSATILE & POPULAR",
        icon: <FaPython className="text-blue-400" />,
      },
    ],
    recent: [
      {
        name: "Node.js",
        desc: "Used recently in full-stack project with MongoDB and Firebase integration.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
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
        desc: "Exploring for caching strategies and session storage while learning system design",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
    ],
  },

  Database: {
    skills: [
      {
        name: "MongoDB",
        desc: "Used as NoSQL database for full-stack projects with Mongoose ORM.",
        badge: "FLEXIBLE STORAGE",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        name: "Firestore",
        desc: "Integrated with Firebase for real-time database syncing in apps.",
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
    ],
    recent: [
      {
        name: "RealmDB",
        desc: "Recently used for persistent storage in mobile apps built with Expo.",
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
        name: "Firebase",
        desc: "Implemented user auth, analytics, and database in mobile/web apps.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400" />,
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
        name: "Vercel",
        desc: "Deployed frontend apps and portfolios with seamless CI/CD workflows.",
        badge: "DEPLOY",
        icon: <SiVercel className="text-white" />,
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

  "Mobile Development": {
    skills: [
      {
        name: "React Native",
        desc: "Built cross-platform mobile apps with animations, charts, and Firebase integration.",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Expo",
        desc: "Used to streamline React Native development, updates, and builds.",
        badge: "MOBILE",
        icon: <SiExpo className="text-white" />,
      },
      {
        name: "RealmDB",
        desc: "Integrated into mobile apps to support offline data and local sync.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "React Native",
        desc: "Built cross-platform mobile apps with animations and accessibility improvements.",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        banner: "from-blue-400 via-cyan-500 to-teal-400",
      },
    ],
    learning: [],
  },
};

export default skillsData;