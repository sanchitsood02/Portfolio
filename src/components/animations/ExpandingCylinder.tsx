"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myPic from "../../assets/images/MyPic.jpg";

const ExpandingCylinder = ({
  image = myPic,
  duration = 1,
  delay = 0.5,
  width = "w-24",
  height = "h-48",
}) => {
  return (
    <motion.div
      className={`${width} ${height} rounded-full overflow-hidden bg-amber-400 shadow-md`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1, transformOrigin: "bottom" }}
      transition={{ duration, delay }}
      style={{ willChange: "transform" }}
    >
      <Image
        src={image}
        priority
        quality={100}
        alt="Abdullah"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ExpandingCylinder;