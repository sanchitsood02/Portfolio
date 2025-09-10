"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import mainPage from "../../assets/images/projects/slayDayMainPage.png";
import calender from "../../assets/images/projects/slayDayCalender.png";
import checklist from "../../assets/images/projects/slayDayChecklist.png";
import checklistOverview from "../../assets/images/projects/slayDayChecklistOverview.png";
import eventForm from "../../assets/images/projects/slayDayEventForm.png";
import pomodoro from "../../assets/images/projects/slayDayPomodoro.png";
import vgAutomotiveParts from "../../assets/images/projects/vgAutomotiveParts.svg";
import imsDashboard from "../../assets/images/projects/imsDashboard.svg";
import factoryTroubleshooting from "../../assets/images/projects/factoryTroubleshooting.svg";
// Note: Using existing images as placeholders for Sanchit's projects
import BlurText from "../animations/BlurText";

// Project data
const projectData = [
  {
    id: 1,
    title: "Factory Edge Analyzer",
    description: "Prototype that parses PLC logs, surfaces anomalies, and notifies teams; built with Python + lightweight stream processing; added tests and ops docs.",
    color: "bg-amber-400",
    images: [factoryTroubleshooting, factoryTroubleshooting]
  },
  {
    id: 2,
    title: "Meeting Intelligence",
    description: "Local, real-time speech-to-text with action-item extraction and webhook integrations; improved notes, follow-ups, and hand-offs; wrote setup & user guides.",
    color: "bg-blue-400",
    images: [vgAutomotiveParts, vgAutomotiveParts]
  },
  {
    id: 3,
    title: "E-commerce Ops Dashboard",
    description: "Shopify/Unicommerce → Python/Power BI; tracked fulfilment SLAs, RTO/returns, and inventory health to support decisions.",
    color: "bg-green-400",
    images: [imsDashboard, imsDashboard]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="w-full justify-center items-center flex mb-12">
        <BlurText
          text="Projects"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-heading font-bold text-center"
        />
      </div>
      
      {/* Project Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {projectData.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProject === index
                ? `${project.color} text-white shadow-md`
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Project {project.id}
          </button>
        ))}
      </div>
      
      {/* Active Project Display */}
      <motion.div
        key={activeProject}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* Project Details */}
        <div className="order-2 lg:order-1">
          <div className="flex items-start mb-4">
            <div className={`w-12 h-12 ${projectData[activeProject].color} rounded-full flex items-center justify-center flex-shrink-0 mr-4`}>
              <span className="text-white font-medium">{String(projectData[activeProject].id).padStart(2, '0')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black">
              {projectData[activeProject].title}
            </h2>
          </div>
          
          <p className="text-md md:text-lg text-gray-500 mb-8">
            {projectData[activeProject].description}
          </p>
        </div>
        
        {/* Project Images */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            {projectData[activeProject].images.map((img, idx) => (
              <div 
                key={idx}
                className={`rounded-lg overflow-hidden shadow-lg ${idx === 0 ? 'z-10 relative' : 'absolute top-6 left-6 z-0'}`}
                style={idx === 1 ? {filter: 'brightness(0.7)'} : {}}
              >
                <Image
                  src={img}
                  alt={`${projectData[activeProject].title} screenshot ${idx + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Project Indicators */}
      <div className="flex justify-center mt-12 space-x-2">
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeProject === index
                ? `${projectData[index].color}`
                : "bg-gray-300"
            }`}
            aria-label={`View project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
