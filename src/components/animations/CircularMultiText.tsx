import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CircularMultiText = () => {
  const menuItems = [
  "MERN Stack Developer",
  "React Native Developer",
  "Tutor",
  "UI Enthusiast",
  "Tech Blogger",
];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % menuItems.length);
    }, 2000 + menuItems[currentIndex].length * 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, menuItems]);

  const currentWord = menuItems[currentIndex];

  const wordWidth = useMemo(() => {
    const base = 20;
    const spacing = 8;
    return currentWord.length * base + spacing;
  }, [currentWord]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 },
  };

  return (
    <div className="justify-center items-center">
      <motion.div
        className="rounded-full overflow-hidden"
        animate={{ width: wordWidth }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          duration: 0.8,
        }}
        style={{ height: "auto", padding: 6 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentWord}
            className="flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentWord.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="text-xl font-semibold px-1"
                transition={{ duration: 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CircularMultiText;
