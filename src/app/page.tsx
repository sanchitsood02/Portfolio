"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Footer from "../components/common/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import LandingPage from "../components/sections/LandingPage";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Navbar from "../components/common/Navbar";
import DeviceNotice from "../components/DeviceNotice";

export default function Home() {
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { amount: 0.5 });

  return (
    <>
      <DeviceNotice />
      <motion.div
        className="font-body min-h-screen transition-colors duration-500"
        style={{
          backgroundColor: isContactInView ? "#0F0F0F" : "#FFFFFF",
        }}
      >
        <Navbar />
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
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
        <Footer />
      </motion.div>
    </>
  );
}
