"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import Footer from "../components/common/Footer";
import Hexagon from "../components/animations/Hexagon";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import LandingPage from "../components/sections/LandingPage";
import Skills from "../components/sections/Skills";
import "./globals.css";
import Projects from "../components/sections/Projects";
import Navbar from "../components/common/Navbar";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "#38bdf8", // Sky Blue
      "#f472b6", // Pink
      "#facc15", // Yellow
      "#34d399", // Teal
      "#a78bfa", // Violet
    ]
  );
  return (
    // <motion.div style={{ background, transition: "background 0.5s ease" }} ref={ref}>
    <motion.div>
      <div>
        <Hexagon />
      </div>
      <Navbar/>
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </motion.div>
  );
}
