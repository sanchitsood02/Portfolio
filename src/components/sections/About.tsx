"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { colors } from "@/src/lib/colors";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import educationAnimation from "../../assets/animations/Education.json";
import experienceAnimation from "../../assets/animations/Experience.json";
import skillsAnimation from "../../assets/animations/Skills.json";
import VariableProximity from "../VariableProximity";

const About = () => {
  const ref = useRef(null);
  const containerRef = useRef<any>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const educationLottieRef = useRef<LottieRefCurrentProps | null>(null);
  const experienceLottieRef = useRef<LottieRefCurrentProps | null>(null);
  const skillsLottieRef = useRef<LottieRefCurrentProps | null>(null);

  const handleHoverPlay = (
    ref: React.MutableRefObject<LottieRefCurrentProps | null>
  ) => {
    if (ref.current) {
      ref.current.stop();
      ref.current.play();
    }
  };

  useEffect(() => {
    educationLottieRef.current?.goToAndStop(30, true);
    experienceLottieRef.current?.goToAndStop(0, true);
    skillsLottieRef.current?.goToAndStop(0, true);
  }, []);

  return (
    <div
      id="about"
      ref={ref}
      className="p-6 md:p-12 min-h-screen flex flex-col items-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-4 gap-8 flex-grow max-w-5xl max-h-[75lan0px]">
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
        >
          <div className="max-w-4xl w-full">
            <div
              ref={containerRef}
              className="relative break-words whitespace-normal leading-tight"
            >
              <VariableProximity
                label={"Focused on function. \nDriven by design."}
                className="variable-proximity-demo text-3xl md:text-6xl break-words whitespace-pre-line leading-tight cursor-default"
                fromFontVariationSettings="'wght' 400, 'opsz' 30"
                toFontVariationSettings="'wght' 1000, 'opsz' 80"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            <div className="p-2 bg-amber-400 rounded-4xl absolute right-10 top-14 -rotate-35">
              <p>Hover me</p>
            </div>
            </div>
            <p className="text-lg mt-4 max-w-2xl">
              I design and develop meaningful digital experiences that blend
              creativity with functionality.
            </p>
          </div>
          <div className="mt-6 font-bold text-lg">⚡ brewbolt</div>
        </motion.div>

        {/* Journey So Far */}
        <motion.div
          onMouseEnter={() => handleHoverPlay(experienceLottieRef)}
          className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-3 rounded-4xl p-4 flex flex-col relative overflow-hidden"
          style={{
            backgroundColor: colors.pink.light,
            color: colors.pink.dark,
          }}
          initial={{ scale: 0, transformOrigin: "100% 0%" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative z-10 text-sm space-y-2">
            <h3 className="font-orbitron font-bold text-2xl mb-6 text-center">
              👨‍💻 Journey So Far
            </h3>
            <ul className="space-y-6 font-semibold text-base leading-snug">
              <li>
                <span className="block font-bold text-lg">
                  Development Engineer
                </span>
                <span className="text-sm italic">Current</span>
                <p className="mt-1">
                  Driving product quality, crafting performant features, and
                  scaling codebase efficiently.
                </p>
              </li>
            </ul>
            <div className="w-full h-full">
              <Lottie
                lottieRef={experienceLottieRef}
                animationData={experienceAnimation}
                loop={false}
                autoplay={false}
              />
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          onMouseEnter={() => handleHoverPlay(educationLottieRef)}
          className="rounded-4xl p-6 flex flex-col justify-between gap-4 lg:row-span-1 lg:col-span-2 relative"
          style={{
            backgroundColor: colors.green.light,
            color: colors.green.dark,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div>
            <h3 className="font-bold text-2xl mb-4">🎓 Education</h3>
            <p className="text-sm mt-2">B.Tech in Computer Science</p>
            <p className="text-sm">2019 – 2023</p>
          </div>

          <div className="absolute right-0 top-0">
            <div className="w-32 md:w-40">
              <Lottie
                lottieRef={educationLottieRef}
                animationData={educationAnimation}
                loop={false}
                autoplay={false}
              />
            </div>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          onMouseEnter={() => handleHoverPlay(skillsLottieRef)}
          className="lg:row-span-2 lg:col-span-2 rounded-4xl p-6 flex flex-col justify-center items-center text-center space-y-2 text-base font-semibold"
          style={{
            backgroundColor: colors.blue.light,
            color: colors.blue.dark,
          }}
          initial={{ scaleY: 0, transformOrigin: "bottom" }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div>
            <h3 className="font-bold text-2xl mb-4">💼 What I Do</h3>
            <p className="text-sm">
              💻 Full Stack Developer skilled in building responsive web and
              mobile apps using React, Next.js, Tailwind, and React Native.
            </p>
            <div className="w-56 m-auto">
              <Lottie
                lottieRef={skillsLottieRef}
                animationData={skillsAnimation}
                loop={false}
                autoplay={false}
              />
            </div>
          </div>
          <div className="text-sm font-semibold mt-2 italic">
            Let’s build or learn together.
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
        >
          <h3 className=" font-bold text-2xl mb-4">✨ Beyond Code</h3>
          <p className=" text-sm leading-relaxed">
            Astronomy enthusiast, physics geek, and a part-time blogger
            exploring the intersection of science and creativity.
          </p>
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
        >
          <h3 className="text-2xl mb-3">📚 Currently Learning</h3>
          <p className="text-lg">· Next.js · System Design</p>
          <p className="text-sm italic mt-2 max-w-xs">
            Building scalable and performant
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;