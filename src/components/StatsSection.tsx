"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const [leetcodeCount, setLeetcodeCount] = useState(0);
  const [blogsCount, setBlogsCount] = useState(0);

  const leetIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const blogIntervalRef = useRef<NodeJS.Timeout | null>(null);
const [hasAnimated, setHasAnimated] = useState(false);
  const animateCount = (
    target: number,
    setter: (n: number) => void,
    intervalRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    let current = 0;
    const increment = Math.max(1, target / 50);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(Math.round(target));
        clearInterval(intervalRef.current!);
      } else {
        setter(Math.round(current));
      }
    }, 20);
  };

  useEffect(() => {
  if (hasAnimated) return;

  fetch("https://leetcode-stats-api.herokuapp.com/Mak3")
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        animateCount(data.totalSolved, setLeetcodeCount, leetIntervalRef);
        setHasAnimated(true);
      }
    });

  animateCount(2, setBlogsCount, blogIntervalRef);

  return () => {
    if (leetIntervalRef.current) clearInterval(leetIntervalRef.current);
    if (blogIntervalRef.current) clearInterval(blogIntervalRef.current);
  };
}, [hasAnimated]);

  const stats = [
    {
      label: "Leetcode Problems Solved",
      icon: "💻",
      value: leetcodeCount,
    },
    {
      label: "Blogs Written",
      icon: "✍️",
      value: blogsCount,
    },
  ];

  return (
    <section className="flex w-full justify-around">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="text-3xl font-bold">
            {stat.value}
          </div>
          <p className="text-xs mt-1 opacity-80">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}