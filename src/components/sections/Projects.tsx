"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import mainPage from "../../assets/images/projects/slayDayMainPage.png";
import calender from "../../assets/images/projects/slayDayCalender.png";
import checklist from "../../assets/images/projects/slayDayChecklist.png";
import checklistOverview from "../../assets/images/projects/slayDayChecklistOverview.png";
import eventForm from "../../assets/images/projects/slayDayEventForm.png";
import pomodoro from "../../assets/images/projects/slayDayPomodoro.png";

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

    const totalScrollWidth = scrollContent.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth;

    const containerHeight = scrollDistance + window.innerHeight;
    container.style.height = `${containerHeight}px`;

    const handleScroll = () => {
      const scrollTop = window.scrollY - container.offsetTop;

      if (scrollTop >= 0 && scrollTop <= scrollDistance) {
        scrollContent.style.transform = `translateX(-${scrollTop}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center font-heading font-bold">Projects</h1>
      <div ref={containerRef} className="relative w-screen">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Title and Description */}
          <div className="text-center px-10 mt-10">
            <div className="relative w-fit my-4">
              <div className="absolute top-2 -right-9 w-12 h-12 rounded-full bg-amber-400 flex justify-center items-center z-0">
                <p className="text-xs font-medium text-white">01</p>
              </div>
              <h2 className="text-4xl font-heading text-black relative z-10">
                SlayDay
              </h2>
            </div>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto my-4">
              SlayDay is a productivity app that combines event planning,
              checklist management, and Pomodoro-style time tracking — all with
              offline support and automatic daily backups to Cloud Firestore.
            </p>
          </div>

          {/* Horizontally Scrolling Images */}
          <div className="flex items-center">
            <div
              ref={scrollContentRef}
              className="flex space-x-6 px-10 transition-transform duration-100 ease-out"
            >
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Project ${idx + 1}`}
                  width={320}
                  className="rounded-xl flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
