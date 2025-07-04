"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import mainPage from "../../assets/images/projects/slayDayMainPage.png";
import calender from "../../assets/images/projects/slayDayCalender.png";
import checklist from "../../assets/images/projects/slayDayChecklist.png";
import checklistOverview from "../../assets/images/projects/slayDayChecklistOverview.png";
import eventForm from "../../assets/images/projects/slayDayEventForm.png";
import pomodoro from "../../assets/images/projects/slayDayPomodoro.png";
import BlurText from "../animations/BlurText";

const images = [
  mainPage,
  checklistOverview,
  checklist,
  calender,
  eventForm,
  pomodoro,
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;

    if (!container || !scrollContent) return;

    let interval: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const scrollTop = window.scrollY - container.offsetTop;
      const scrollDistance = scrollContent.scrollWidth - window.innerWidth;
      if (scrollTop >= 0 && scrollTop <= scrollDistance) {
        scrollContent.style.transform = `translateX(-${scrollTop}px)`;
      }
    };

    const setupScroll = () => {
      const isMobileOrTablet = window.innerWidth <= 1024;

      // Clear existing interval and listeners
      if (interval) clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);

      scrollContent.style.transform = `translateX(0px)`;

      if (isMobileOrTablet) {
        let scrollPos = 0;
        const scrollStep = 1;
        const maxScroll = scrollContent.scrollWidth - window.innerWidth;
        container.style.height = "auto";
        interval = setInterval(() => {
          scrollPos += scrollStep;
          if (scrollPos > maxScroll) scrollPos = 0;
          scrollContent.style.transform = `translateX(-${scrollPos}px)`;
        }, 16);
      } else {
        const totalScrollWidth = scrollContent.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalScrollWidth - viewportWidth;

        const containerHeight = scrollDistance + window.innerHeight;
        container.style.height = `${containerHeight}px`;

        window.addEventListener("scroll", handleScroll);
      }
    };

    setupScroll();

    window.addEventListener("resize", setupScroll);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener("resize", setupScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="w-full justify-center items-center flex">
        <BlurText
          text="Projects"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-heading font-bold text-center"
        />
      </div>

      <div ref={containerRef} className="relative w-screen">
        <div className="md:sticky top-0 overflow-x-hidden flex flex-col justify-center">
          <div className="text-center px-10 mt-10">
            <div className="w-fit my-4 mx-auto sm:mx-0 flex items-center justify-center sm:relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400 flex justify-center items-center sm:absolute sm:top-2 sm:-right-9 z-0 mr-2 sm:mr-0">
                <p className="text-xs font-medium text-white">01</p>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black relative z-10">
                SlayDay
              </h2>
            </div>

            <p className="text-md md:text-lg text-gray-500 max-w-3xl mx-auto my-8">
              SlayDay is a productivity app that combines event planning,
              checklist management, and Pomodoro-style time tracking — all with
              offline support and automatic daily backups to Cloud Firestore.
            </p>
          </div>

          <div className="flex items-center">
            <div
              ref={scrollContentRef}
              className="flex space-x-6 px-10 md:transition-transform md:duration-100 md:ease-out"
            >
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Project ${idx + 1}`}
                  width={300}
                  className="rounded-xl flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
