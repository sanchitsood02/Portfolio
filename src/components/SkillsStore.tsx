"use client";

import React, { cloneElement, ReactElement, ReactNode, useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMobileAlt,
  FaChartBar,
  FaDesktop,
  FaUsers,
} from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../lib/skills";
import user from "../assets/images/MyPic.png";
import reactNative from "../assets/images/React_Native.png";
import mernStack from "../assets/images/MERN_Stack.png";
import { FiSearch } from "react-icons/fi";

interface SkillItem {
  name: string;
  desc: string;
  badge?: string;
  icon: ReactNode;
  banner?: string;
  image?: StaticImageData | string;
}

interface SkillCategory {
  featured: SkillItem[];
  skills: SkillItem[];
  learning: SkillItem[];
  recent: SkillItem[];
}

const categories = [
  { icon: <FaCode />, name: "All" },
  { icon: <TbLayoutDashboard />, name: "Frontend & Product" },
  { icon: <FaServer />, name: "Backend & Systems" },
  { icon: <FaDatabase />, name: "Database" },
  { icon: <FaTools />, name: "Tools" },
  { icon: <FaMobileAlt />, name: "Mobile Development" },
  { icon: <FaChartBar />, name: "Machine Learning And Data Science" },
  { icon: <FaDesktop />, name: "Design & Technical Communication" },
  { icon: <FaUsers />, name: "Soft Skills" },
];

export default function SkillsStore() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function getCombinedData(): SkillCategory {
    return skillsData[selectedCategory];
  }

  const searchFilter = (arr?: SkillItem[]) =>
    arr?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? [];

  const filteredData = getCombinedData();

  return (
    <div className="flex flex-col md:flex-row bg-white text-black font-sans rounded-2xl w-full max-w-6xl h-auto md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden border-gray-300 border-[1px] shadow-sm">
      {/* Mobile Dropdown */}
      <div className="md:hidden w-full p-3 sm:p-4 bg-gray-100">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 bg-gray-200 text-black text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
        >
          {categories.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <div className="relative w-full mt-3">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-3 py-1.5 bg-gray-200 rounded-md text-sm text-black placeholder-zinc-500 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 lg:w-60 bg-gray-100 p-3 lg:p-4 gap-2">
        <div className="flex gap-2 mb-4 lg:mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="relative w-full mb-3 lg:mb-4">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-3 py-1.5 bg-gray-200 rounded-md text-sm text-black placeholder-zinc-500 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div className="text-zinc-400 text-xs lg:text-sm uppercase mb-1 lg:mb-2">Categories</div>
        {categories.map(({ icon, name }) => (
          <div
            key={name}
            onClick={() => setSelectedCategory(name)}
            className={`flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-1.5 lg:py-2 rounded cursor-pointer transition-all duration-200 ${
              selectedCategory === name && "bg-gray-300"
            }`}
          >
            <div className="text-base lg:text-lg text-blue-400">{icon}</div>
            <span className="text-xs lg:text-sm">{name}</span>
          </div>
        ))}
        <div className="mt-auto text-xs text-zinc-500 border-t border-gray-300 pt-3 lg:pt-4 flex items-center gap-2">
          <Image
            src={user}
            alt="user profile image"
            className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            priority
          />
          Dev SS
        </div>
      </aside>

      {/* Main Content */}
      <main className="hide-scrollbar flex-1 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 overflow-y-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        <div className="border-b-[1px] border-gray-300 py-1 sm:py-2">
          <h1 className="text-2xl sm:text-3xl font-semibold">{selectedCategory}</h1>
        </div>

        {/* Featured Cards */}
        {searchFilter(filteredData.featured)?.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + "-features"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
            >
              {searchFilter(filteredData.featured).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between h-full space-y-1.5 sm:space-y-2"
                >
                  <div className="text-xs text-blue-400 font-medium">
                    {item.badge}
                  </div>
                  <div className="text-base sm:text-lg font-semibold">{item.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {item.desc}
                  </div>
                  {item?.image ? (
                    <div className="h-32 sm:h-36 md:h-40 lg:h-44 w-full mt-auto rounded-xl overflow-hidden flex justify-center items-center bg-zinc-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={176}
                        height={176}
                        className="object-contain w-full h-full p-2"
                        priority
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-32 sm:h-36 md:h-40 lg:h-44 mt-auto rounded-xl flex justify-center items-center bg-gradient-to-br ${item.banner}`}
                    >
                      {React.cloneElement(
                        item.icon as React.ReactElement<any>,
                        {
                          className: `${
                            (item.icon as React.ReactElement<any>).props
                              .className || ""
                          } text-white text-4xl sm:text-5xl md:text-6xl`,
                        }
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Skills Section */}
        {searchFilter(filteredData.skills)?.length > 0 && (
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="text-base sm:text-lg font-medium">{selectedCategory} Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {searchFilter(filteredData.skills).map((app, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 border-b border-gray-300 pb-2 sm:pb-3 md:pb-4"
                >
                  <div className="text-xl sm:text-2xl font-semibold flex items-center gap-1 sm:gap-2">
                    {app.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-medium">{app.name}</div>
                    <div className="text-xs text-zinc-600">{app.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Section */}
        {searchFilter(filteredData.learning)?.length > 0 && (
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="text-base sm:text-lg font-medium">
              Installing / Currently Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {searchFilter(filteredData.learning).map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 border-b border-gray-300 pb-2 sm:pb-3 md:pb-4"
                >
                  <div className="text-xl sm:text-2xl font-semibold flex items-center gap-1 sm:gap-2">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-medium">{skill.name}</div>
                    <div className="text-xs text-zinc-600">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recently Used Section */}
        {searchFilter(filteredData.recent)?.length > 0 && (
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="text-base sm:text-lg font-medium">Recently used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {searchFilter(filteredData.recent).map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 border-b border-gray-300 pb-2 sm:pb-3 md:pb-4"
                >
                  <div className="text-xl sm:text-2xl font-semibold flex items-center gap-1 sm:gap-2">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-medium">{skill.name}</div>
                    <div className="text-xs text-zinc-600">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
