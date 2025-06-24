"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBlogger,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const startScroll = ref.current?.offsetTop || 0;
  const endScroll = startScroll + window.innerHeight * 1;

  let progress = (scrollY - startScroll) / (endScroll - startScroll);
  progress = Math.min(Math.max(progress, 0), 1);

  const interpolate = (start: number, end: number) =>
    start + (end - start) * progress;

  const rawCursorX = useMotionValue(0);
  const rawCursorY = useMotionValue(0);

  const springCursorX = useSpring(rawCursorX, { stiffness: 100, damping: 15 });
  const springCursorY = useSpring(rawCursorY, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxOffset = 20;

      const offsetX = (dx / distance) * maxOffset || 0;
      const offsetY = (dy / distance) * maxOffset || 0;

      rawCursorX.set(offsetX);
      rawCursorY.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawCursorX, rawCursorY]);

  const cardData = useMemo(() => {
    const { width, height } = windowSize;
    return [
      {
        id: 1,
        x: -width * 0.25,
        y: -height * 0.25,
        label: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: <FaLinkedin size={40} color="#0e76a8" />,
      },
      {
        id: 2,
        x: 0,
        y: -height * 0.3,
        label: "Instagram",
        url: "https://instagram.com/yourprofile",
        icon: <FaInstagram size={40} color="#e4405f" />,
      },
      {
        id: 3,
        x: width * 0.25,
        y: -height * 0.17,
        label: "GitHub",
        url: "https://github.com/yourprofile",
        icon: <FaGithub size={40} color="#333" />,
      },
      {
        id: 4,
        x: -width * 0.3,
        y: height * 0.17,
        label: "LeetCode",
        url: "https://leetcode.com/yourprofile",
        icon: <SiLeetcode size={40} color="#FFA116" />,
      },
      {
        id: 5,
        x: 0,
        y: height * 0.33,
        label: "Twitter",
        url: "https://twitter.com/yourprofile",
        icon: <FaTwitter size={40} color="#1DA1F2" />,
      },
      {
        id: 6,
        x: width * 0.3,
        y: height * 0.17,
        label: "Blog",
        url: "https://yourblog.com",
        icon: <FaBlogger size={40} color="#f57d00" />,
      },
    ];
  }, [windowSize]);

  return (
    <div
      ref={ref}
      className="relative h-[240vh] bg-gradient-to-b from-gray-200 to-gray-400"
    >
      <div className="sticky top-0 h-screen w-full">
        <motion.div
          className="bg-gray-900 text-white flex items-center justify-center text-3xl h-full w-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full w-full flex items-center justify-center  bg-blue-100 overflow-hidden">
            {cardData.map(({ id, x, y, icon, label }) => {
              const currentX = interpolate(0, x);
              const currentY = interpolate(0, y);

              const offsetX = useTransform(
                springCursorX,
                (cursor) => currentX + cursor
              );
              const offsetY = useTransform(
                springCursorY,
                (cursor) => currentY + cursor
              );
              return (
                <motion.a
                  key={id}
                  style={{
                    x: offsetX,
                    y: offsetY,
                  }}
                  className="absolute bg-white rounded-2xl p-6 flex flex-col items-center justify-center w-32 h-32 cursor-pointer"
                >
                  {icon}
                  <span className="mt-2 text-sm font-semibold text-gray-800">
                    {label}
                  </span>
                </motion.a>
              );
            })}
            <div
              className="absolute text-center px-4"
              style={{ scale: interpolate(0, 1) }}
            >
              <h1
                className="text-4xl font-bold text-purple-800"
                style={{ opacity: interpolate(0, 1) }}
              >
                Let's connect
              </h1>
              <motion.p
                className="text-purple-700 mt-2 max-w-xs mx-auto"
                style={{ opacity: interpolate(0, 1) }}
              >
                Whether you have an idea, a collaboration in mind, or just want
                to say hello — feel free to get in touch. I’d love to hear from
                you!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;