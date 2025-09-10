"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";

export default function StatsSection() {
  const [blogsCount, setBlogsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const blogIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const animateCount = (
    target: number,
    setter: (n: number) => void,
    intervalRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    let current = 0;
    const increment = target / 50;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(intervalRef.current!);
      } else {
        setter(Math.floor(current));
      }
    }, 20);
  };

  useEffect(() => {
    if (hasAnimated) return;

    animateCount(2, setBlogsCount, blogIntervalRef);
    setHasAnimated(true);

    return () => {
      if (blogIntervalRef.current) clearInterval(blogIntervalRef.current);
    };
  }, []);

  const stats = [
    {
      label: "Blogs Written",
      value: blogsCount,
      icon: <FaMedium className="w-4 h-4" />,
      tooltip: "Medium →",
      link: "https://medium.com/@sanchitsood",
    },
  ];

  return (
    <section className="flex w-full justify-around">
      {stats.map((stat, index) => {
        const StatContent = (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative flex flex-col items-center group cursor-pointer"
            key={index}
          >
            {/* Tooltip */}
            {stat.tooltip && (
              <div className="absolute -top-10 bg-black text-white text-xs px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {stat.tooltip}
              </div>
            )}

            <div className="text-3xl font-bold flex items-center gap-1">
              {stat.value}
              {stat.icon}
            </div>

            <p className="text-xs mt-1 opacity-80">{stat.label}</p>
          </motion.div>
        );

        return stat.link ? (
          <a
            key={stat.label}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {StatContent}
          </a>
        ) : (
          <div key={stat.label}>{StatContent}</div>
        );
      })}
    </section>
  );
}