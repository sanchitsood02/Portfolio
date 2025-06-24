import React, { useState } from "react";
import GravityText from "../animations/GravityText";

const Footer = () => {
  const [effectStarted, setEffectStarted] = useState(false); 
  const handleClick = () => {
    console.log("first")
    setEffectStarted(true)
  }

  return (
    <div className="w-full h-60 bg-black text-white">
      <div onClick={handleClick}>
        something
      </div>
      <GravityText
        text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        trigger="custom"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
        customTriggered={effectStarted}
      />
    </div>
  );
};

export default Footer;
