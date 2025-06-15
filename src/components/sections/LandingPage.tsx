"use client";
import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import Navbar from "../common/Navbar";
import Eye from "../Eye";
import Image from "next/image";
import CircularText from "../CircularText";

const LandingPage = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const lightX = useMotionValue(0);
  const lightY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const cardRef = useRef(null);

  const handleMouseMove = (e: MouseEvent) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountY = ((x - centerX) / centerX) * 1.5;
    const rotateAmountX = -((y - centerY) / centerY) * 1.5;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);

    lightX.set(x);
    lightY.set(y);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    opacity.set(0);
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        perspective: "1000px",
      }}
      aria-label="Landing page main container"
    >
      <Navbar />
      <motion.div
        ref={cardRef}
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        style={{
          width: "90vw",
          height: "80vh",
          backgroundColor: "#3D90D7",
          position: "absolute",
          top: "10vh",
          left: "5vw",
          borderRadius: "30px",
          cursor: "pointer",
          overflow: "hidden",
          transformStyle: "preserve-3d",
          rotateX: springX,
          rotateY: springY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-label="Animated intro card"
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 80%)",
            x: lightX,
            y: lightY,
            translateX: "-50%",
            translateY: "-50%",
            opacity,
          }}
          aria-hidden="true"
        />
        <div
          className="relative h-full flex flex-col justify-center items-center bg-gray-900 px-6 sm:px-10"
          aria-label="Hero content section"
        >
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
            <circle cx="10%" cy="20%" r="30" fill="#1890ff">
              <animate attributeName="r" values="30;40;30" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="90%" cy="70%" r="20" fill="#52c41a">
              <animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>

          <div style={{ position: "relative", zIndex: 10 }} aria-label="Introduction Text">
            <h2
              className="text-center text-white text-lg sm:text-2xl font-medium mb-4"
              aria-label="Greeting and profession"
            >
              Hi, I'm Abdullah 👋 a Software Engineer
            </h2>

            <h1
              className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold text-center leading-snug text-white drop-shadow-lg font-display"
              aria-label="Tagline and title"
            >
              Crafting <br />
              Meaningful <br />
              <span
                className="flex justify-center items-center gap-1 mt-2"
                aria-label="Smooth Ideas with eyes"
              >
                Sm
                <Eye size={42} ariaLabel="Eye icon for 'o'" />
                <Eye size={42} ariaLabel="Eye icon for 'o'" />
                th Ideas
              </span>
            </h1>
          </div>

          <div
            className="md:absolute left-10 bottom-10 mt-8 md:mt-0"
            onClick={() => {
              const target = document.getElementById("about");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll to about section"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = document.getElementById("about");
                target?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <CircularText />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;