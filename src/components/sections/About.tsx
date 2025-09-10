"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { colors } from "@/src/lib/colors";
import Lottie from "lottie-react";
import educationAnimation from "../../assets/animations/Education.json";
import skillsAnimation from "../../assets/animations/Skills.json";
import VariableProximity from "../animations/VariableProximity";
import { MdLocationOn } from "react-icons/md";
import AnimatedSearchBar from "../animations/AnimatedSearchBar";
import StatsSection from "../StatsSection";

const About = () => {
  const ref = useRef(null);
  const containerRef = useRef<any>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      id="about"
      ref={ref}
      className="p-6 md:p-12 flex flex-col items-center"
      role="region"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">
        About Section
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-4 gap-4 flex-grow max-w-5xl">
        {/* Hero Text */}
        <motion.div
          className="col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-2 rounded-4xl p-6 flex flex-col justify-between"
          style={{
            backgroundColor: colors.lavender.light,
            color: colors.lavender.dark,
          }}
          initial={{ scale: 0, transformOrigin: "0% 0%" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="hero-title"
        >
          <div className="max-w-4xl w-full">
            <div
              ref={containerRef}
              className="relative break-words whitespace-normal leading-tight"
            >
              <VariableProximity
                label={"Focused on outcomes\nDriven by engineering"}
                className="variable-proximity-demo text-3xl md:text-6xl break-words whitespace-pre-line leading-tight cursor-default"
                fromFontVariationSettings="'wght' 400, 'opsz' 30"
                toFontVariationSettings="'wght' 1000, 'opsz' 80"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
            <div
              className="px-2 py-1 bg-amber-300 rounded-4xl inline-block -rotate-12 hidden md:inline-block shadow-md transform hover:scale-110 transition-transform duration-300 z-10 mb-4 mt-2"
              aria-hidden="true"
            >
              <p className="font-medium text-sm m-0">Hover me</p>
            </div>
            <p className="text-lg mt-4 max-w-2xl" id="hero-title" tabIndex={0}>
              I build reliable, data-driven software that turns messy workflows into simple, high-performing products—across web apps, analytics, and factory-floor AI. Comfortable working in Agile teams, following SDLC, writing clean, well-documented code, and shipping fast without breaking things.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-0 font-bold text-lg flex items-center gap-2"
            aria-label="Location: Bristol, United Kingdom"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              <MdLocationOn size={20} />
            </motion.span>
            <span>📍 Bristol, United Kingdom</span>
          </motion.div>
        </motion.div>

        {/* Free Time Highlights */}
        <motion.div
          className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1 rounded-4xl p-6 flex flex-col relative overflow-hidden shadow-md"
          style={{
            backgroundColor: colors.blue.light,
            color: colors.blue.dark,
          }}
          initial={{ scale: 0, transformOrigin: "100% 0%" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="free-time-heading"
        >
          <div className="relative z-10 text-sm space-y-4">
            <h3
              className="font-bold text-2xl text-center"
              id="free-time-heading"
            >
              🧠 Free Time Highlights
            </h3>
            <div className="text-sm leading-relaxed mt-2">
              <p className="mb-2">Open-source & hacks: small PRs, weekend prototypes, campus hackathons</p>
              <p className="mb-2">Problem-solving reps: LeetCode/Codeforces practice (algorithms, debugging)</p>
              <p className="mb-2">Certs & learning: cloud + AI fundamentals, version control, unit testing</p>
            </div>
            <StatsSection />
          </div>
        </motion.div>

        {/* Journey So Far */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col justify-center lg:row-span-2 lg:col-span-2"
          style={{
            backgroundColor: colors.pink?.light || "#A0F0ED",
            color: colors.pink?.dark || "#004B50",
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="journey-heading"
        >
          <h3
            className="font-bold text-2xl mb-6 text-center"
            id="journey-heading"
          >
            👨‍💻 Journey So Far
          </h3>
          <ul className="space-y-4 text-sm">
            {[
              {
                role: "Software Engineer Intern",
                company: "VeeGee Kaushiko",
                duration: "2025",
                description: "Built meeting-intelligence and PLC-log analysis prototypes; debugged production issues, wrote documentation, and iterated features in sprints."
              },
              {
                role: "Founder/Advisor",
                company: "The Manga Store",
                duration: "2021–2025",
                description: "Scaled an e-commerce brand; automated fulfilment analytics, returns/exchange flows, and CRM via APIs; practiced requirements gathering with non-tech stakeholders."
              },
              {
                role: "Junior Web Developer",
                company: "Arteno Creations",
                duration: "2021",
                description: "Shipped a React-based 3D configurator; added tests, improved load times, and learned code reviews and Git workflows."
              },
            ].map((exp, idx) => (
              <li key={idx} className="bg-white/20 p-3 rounded-xl">
                <p className="text-base font-bold">{exp.role}</p>
                <p className="text-xs mt-1 opacity-90">
                  {exp.company} · {exp.duration}
                </p>
                <p className="text-xs mt-1">{exp.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col justify-between gap-4 lg:row-span-1 lg:col-span-2 relative"
          style={{
            backgroundColor: colors.green.light,
            color: colors.green.dark,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="education-heading"
        >
          <div>
            <h3 className="font-bold text-2xl mb-4" id="education-heading">
              🎓 Education
            </h3>
            <p className="text-sm mt-2">🎓 B.Sc. (Hons) IT Management for Business — UWE Bristol (2023–2026)</p>
            <p className="text-sm">Relevant modules: Algorithms & Data Structures, Databases, Web Engineering, Analytics & Visualization, Project Management.</p>
          </div>
          <div className="absolute right-0 top-0" aria-hidden="true">
            <div className="w-32 md:w-40">
              <Lottie animationData={educationAnimation} />
            </div>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="lg:row-span-2 lg:col-span-2 rounded-4xl p-6 flex flex-col justify-center items-center text-left space-y-2 text-base"
          style={{
            backgroundColor: colors.blue.light,
            color: colors.blue.dark,
          }}
          initial={{ scaleY: 0, transformOrigin: "bottom" }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="skills-heading"
        >
          <div>
            <h3 className="font-bold text-2xl mb-4" id="skills-heading">
              💼 What I Do
            </h3>
            <p className="text-sm mb-2">
              Software Development (Frontend/Backend): React/Next.js, Node/Python; REST APIs; component systems; accessibility.
            </p>
            <p className="text-sm mb-2">
              Data & ML foundations: Python (Pandas/NumPy), SQL, exploratory analysis; simple models and dashboards.
            </p>
            <p className="text-sm mb-2">
              Dev practices: Git, unit testing, linting, CI basics, documentation, code reviews, issue tracking.
            </p>
            <p className="text-sm mb-2">
              Ways of working: Agile/Scrum, sprint planning, stand-ups, tickets, writing clear requirements/acceptance criteria.
            </p>
            <div className="w-[80%] m-auto my-2" aria-hidden="true">
              <Lottie animationData={skillsAnimation} />
            </div>
          </div>
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col justify-center lg:row-span-1 lg:col-span-2"
          style={{
            backgroundColor: colors.orange.light,
            color: colors.orange.dark,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="beyond-heading"
        >
          <h3 className="font-bold text-2xl mb-4" id="beyond-heading">
            ✨ Beyond Code
          </h3>
          <ol className="list-decimal list-inside text-sm leading-relaxed">
            <li>
              Fitness & routine—keeps the mind sharp.
            </li>
            <li>
              Builder at heart—turn ideas into revenue and learn fast from users.
            </li>
            <li>
              Community—mentor/volunteer for youth coding where possible.
            </li>
          </ol>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col items-center justify-center text-center font-bold text-base space-y-2 lg:col-span-2"
          style={{
            backgroundColor: colors.yellow.light,
            color: colors.yellow.dark,
          }}
          initial={{ scale: 0, transformOrigin: "bottom" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="learning-heading"
        >
          <h3 className="text-2xl" id="learning-heading">
            📚 Currently Learning
          </h3>
          <p className="text-sm mb-2">
            MLOps basics (experiments, data/versioning)
          </p>
          <p className="text-sm mb-2">
            C++ & systems refresh for performance work
          </p>
          <p className="text-sm mb-2">
            Next.js (RSC) & server actions for production apps
          </p>
          <p className="text-sm mb-2">
            AWS patterns and cost-aware hosting
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
