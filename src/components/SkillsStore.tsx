"use client";

import { cloneElement, useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../lib/skills";
import user from "../assets/images/MyPic.jpg";
import reactNative from "../assets/images/React_Native.png";
import mernStack from "../assets/images/MERN_Stack.png";

interface SkillItem {
  name: string;
  desc: string;
  badge?: string;
  icon: any;
  banner?: string;
  image?: any;
}

interface SkillCategory {
  featured: SkillItem[];
  skills: SkillItem[];
  learning: SkillItem[];
  recent: SkillItem[];
}

const categories = [
  { icon: <FaCode />, name: "All" },
  { icon: <TbLayoutDashboard />, name: "Frontend" },
  { icon: <FaServer />, name: "Backend" },
  { icon: <FaDatabase />, name: "Database" },
  { icon: <FaTools />, name: "Tools" },
  { icon: <FaMobileAlt />, name: "Mobile Development" },
];

export default function SkillsStore() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function getCombinedData(): SkillCategory {
    if (selectedCategory === "All") {
      const all: SkillCategory & { featured: SkillItem[] } = {
        featured: [],
        skills: [],
        learning: [],
        recent: [],
      };

      const seen = {
        skills: new Set<string>(),
        learning: new Set<string>(),
        recent: new Set<string>(),
      };

      for (const category of Object.values(skillsData) as SkillCategory[]) {
        for (const key of ["skills", "learning", "recent"] as const) {
          if (category[key]) {
            for (const item of category[key]) {
              if (!seen[key].has(item.name)) {
                all[key].push(item);
                seen[key].add(item.name);
              }
            }
          }
        }
      }

      const featuredSeen = new Set<string>();
      const featuredItems = [
        {
          name: "MERN Stack",
          desc: "Full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
          badge: "Web Favorite",
          icon: <FaCode className="text-green-400 text-4xl" />,
          banner: "from-green-400 via-green-500 to-green-600",
          image: mernStack,
        },
        {
          name: "React Native",
          desc: "Build native mobile apps using JavaScript and React.",
          badge: "Mobile Favorite",
          icon: <FaMobileAlt className="text-blue-400 text-4xl" />,
          banner: "from-blue-400 via-blue-500 to-blue-600",
          image: reactNative,
        },
      ];

      for (const item of featuredItems) {
        if (!featuredSeen.has(item.name)) {
          all.featured.push(item);
          featuredSeen.add(item.name);
        }
      }
      return all;
    }
    return skillsData[selectedCategory];
  }

  const searchFilter = (arr?: SkillItem[]) =>
    arr?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? [];

  const filteredData = getCombinedData();

  return (
    <div className="flex flex-col md:flex-row bg-black text-white font-sans rounded-2xl w-full max-w-6xl h-[700px] overflow-hidden">
      {/* Mobile Dropdown */}
      <div className="md:hidden w-full p-4 bg-zinc-900">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 bg-zinc-800 text-white text-sm rounded"
        >
          {categories.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-zinc-900 p-4 gap-2">
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full px-3 py-1.5 bg-zinc-800 rounded text-sm text-white placeholder-zinc-400 mb-4"
        />
        <div className="text-zinc-400 text-sm uppercase mb-2">Categories</div>
        {categories.map(({ icon, name }) => (
          <div
            key={name}
            onClick={() => setSelectedCategory(name)}
            className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-all duration-200 ${
              selectedCategory === name ? "bg-zinc-700" : "hover:bg-zinc-800"
            }`}
          >
            <div className="text-lg">{icon}</div>
            <span className="text-sm">{name}</span>
          </div>
        ))}
        <div className="mt-auto text-xs text-zinc-500 border-t border-zinc-800 pt-4 flex items-center gap-2">
          <Image src={user} alt="user" className="w-8 h-8 rounded-full" />
          Dev MAK
        </div>
      </aside>

      {/* Main Content */}
      <main className="hide-scrollbar flex-1 p-6 md:p-12 overflow-y-auto space-y-10">
        <h1 className="text-3xl font-semibold">{selectedCategory}</h1>

        {/* Featured Cards */}
        {searchFilter(filteredData.featured)?.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + "-features"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {searchFilter(filteredData.featured).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between h-full space-y-2"
                >
                  <div className="text-xs text-blue-400 font-medium">
                    {item.badge}
                  </div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <div className="text-sm text-zinc-400 line-clamp-2">
                    {item.desc}
                  </div>
                  {item?.image ? (
                    <div className="h-44 w-full mt-auto rounded-xl overflow-hidden flex justify-center items-center bg-zinc-800">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={176}
                        height={176}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-44 mt-auto rounded-xl flex justify-center items-center bg-gradient-to-br ${item.banner}`}
                    >
                      {cloneElement(item.icon, {
                        className: `${
                          item.icon.props.className || ""
                        } text-white text-6xl`,
                      })}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Skills Section */}
        {searchFilter(filteredData.skills)?.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">{selectedCategory} Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchFilter(filteredData.skills).map((app, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-zinc-800 pb-4"
                >
                  <div className="text-2xl font-semibold flex items-center gap-2">
                    {app.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{app.name}</div>
                    <div className="text-xs text-zinc-400">{app.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Section */}
        {searchFilter(filteredData.learning)?.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">
              Installing / Currently Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchFilter(filteredData.learning).map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-zinc-800 pb-4"
                >
                  <div className="text-2xl font-semibold flex items-center gap-2">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{skill.name}</div>
                    <div className="text-xs text-zinc-400">
                      {skill.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recently Used Section */}
        {searchFilter(filteredData.recent)?.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Recently used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchFilter(filteredData.recent).map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-zinc-800 pb-4"
                >
                  <div className="text-2xl font-semibold flex items-center gap-2">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{skill.name}</div>
                    <div className="text-xs text-zinc-400">Used Recently</div>
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
