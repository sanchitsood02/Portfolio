"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const navItems = [
  {
    icon: <HiOutlineMail size={22} />,
    label: "Email",
    color: "text-red-400",
    bg: "bg-black",
    link: "mailto:sanchitsood@gmail.com",
  },
  {
    icon: <FaLinkedinIn size={22} />,
    label: "LinkedIn",
    color: "text-blue-500",
    bg: "bg-white",
    link: "https://www.linkedin.com/in/sanchit-sood-7b32601b7/",
  },
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    color: "text-white",
    bg: "bg-gray-800",
    link: "https://github.com/sanchitsood02",
  },
  {
    icon: <FaInstagram size={22} />,
    label: "Instagram",
    color: "text-pink-500",
    bg: "bg-white",
    link: "https://www.instagram.com/sanchitsoodd_/?hl=en",
  },
];

export default function SocialMedia() {
  return (
    <div className="w-fit flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-neutral-800 to-gray-700/60 shadow-xl">
      {navItems.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, transformOrigin: "bottom" }}
          className="group relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            {item.label}
          </div>

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              item.bg || "bg-white/10"
            }`}
          >
            <span className={`${item.color}`}>{item.icon}</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}