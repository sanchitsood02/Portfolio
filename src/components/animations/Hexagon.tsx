"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const hexagonPoints = [
  [50, 0],
  [100, 25],
  [100, 75],
  [50, 100],
  [0, 75],
  [0, 25],
  [50, 0],
];

const Hexagon = () => {
  const { scrollYProgress } = useScroll();

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const rotateY = useTransform(scrollYProgress, [0.95, 1], [0, 360]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      style={{
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{duration: 2}}
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        {hexagonPoints.slice(0, -1).map((start, i) => {
          const end = hexagonPoints[i + 1];
          return (
            <motion.line
              key={i}
              x1={start[0]}
              y1={start[1]}
              x2={end[0]}
              y2={end[1]}
              stroke="#4f46e5"
              strokeWidth="5"
              strokeLinecap="round"
              style={{
                pathLength: progress,
              }}
            />
          );
        })}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="#4f46e5"
          fontSize="40"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          A
        </text>
      </svg>
    </motion.div>
  );
};

export default Hexagon;
