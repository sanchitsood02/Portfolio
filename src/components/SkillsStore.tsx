import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../lib/skills";
import user from "../assets/images/MyPic.jpg"

const categories = [
  { icon: <FaCode />, name: "All" },
  { icon: <FaCode />, name: "Frontend" },
  { icon: <FaServer />, name: "Backend" },
  { icon: <FaDatabase />, name: "Database" },
  { icon: <FaTools />, name: "Tools" },
  { icon: <FaMobileAlt />, name: "Mobile Development" },
];

export default function SkillsStore() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [searchTerm, setSearchTerm] = useState("");

  function getCombinedData() {
    if (selectedCategory === "All") {
      const all = { featured: [], skills: [], learning: [], recent: [] };
      for (const category of Object.values(skillsData)) {
        for (const key of ["featured", "skills", "learning", "recent"]) {
          if (category[key]) {
            all[key].push(...category[key]);
          }
        }
      }
      return all;
    }
    return skillsData[selectedCategory];
  }

  const searchFilter = (arr) =>
    arr?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredData = getCombinedData();

  return (
    <div className="flex bg-black text-white font-sans overflow-hidden max-w-6xl max-h-[700px] m-20 rounded-2xl">
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
          <Image src={user} alt="user" className="w-8 h-8 rounded-full"/>
          Dev MAK
        </div>
      </aside>

      {/* Main Content */}
      <main className="hide-scrollbar flex-1 p-6 md:p-12 overflow-y-auto space-y-10">
        <h1 className="text-3xl font-semibold">{selectedCategory}</h1>

        {/* Feature Cards */}
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
                <div key={idx} className="space-y-2">
                  <div className="text-xs text-blue-400 font-medium">
                    {item.badge}
                  </div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <div className="text-sm text-zinc-400">{item.desc}</div>
                  <div className="h-44 bg-zinc-800 rounded-xl overflow-hidden">
                    <img
                      src={item.banner}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* App List */}
        {searchFilter(filteredData.skills)?.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">
              Great {selectedCategory} Apps and Updates
            </h2>
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
                  <button className="px-4 py-1.5 bg-zinc-800 text-sm rounded hover:bg-zinc-700 transition">
                    Get
                  </button>
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
                      Currently in progress
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-zinc-800 text-sm rounded hover:bg-zinc-700 transition">
                    Installing
                  </button>
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
                    <div className="text-xs text-zinc-400">
                      Used Recently
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-zinc-800 text-sm rounded hover:bg-zinc-700 transition">
                    Open
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
