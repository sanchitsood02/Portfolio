import React from "react";
import SkillsStore from "../SkillsStore";

const Skills = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-heading font-bold">My Skill Store</h1>
      <div className="w-full min-h-screen flex items-center justify-center">
        <SkillsStore />
      </div>
    </div>
  );
};

export default Skills;
