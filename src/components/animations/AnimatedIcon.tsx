"use client";
import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaUserAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const rotatingIcons = [
  { icon: <FaGraduationCap className="text-5xl" />, label: "Education" },
  { icon: <FaBriefcase className="text-5xl" />, label: "Experience" },
  { icon: <FaProjectDiagram className="text-5xl" />, label: "Projects" },
  { icon: <FaCode className="text-5xl" />, label: "Skills" },
  { icon: <FaUserAlt className="text-5xl" />, label: "About Me" },
];

const AnimatedIcon = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingIcons.length);
    }, 2000); // change icon every 2s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex text-white justify-center items-center h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -60 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {rotatingIcons[index].icon}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedIcon;