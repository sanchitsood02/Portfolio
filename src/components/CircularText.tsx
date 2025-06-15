import React from "react";

const CircularTextManual = ({ text = "✦ EXPLORE ✦ FURTHER ", radius = 35 }) => {
  const characters = text.split("");
  const charCount = characters.length;
  const angleStep = 360 / charCount;

  return (
    <div style={{ position: "relative", width: `${radius * 2}px`, height: `${radius * 2}px` }}>
      {characters.map((char, i) => {
        const angle = i * angleStep - 90;
        const x = radius + radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius + radius * Math.sin((angle - 90) * (Math.PI / 180));

        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "center",
              color: "#aaa",
              fontSize: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "2px",
            }}
          >
            {char}
          </span>
        );
      })}

      {/* Center Arrow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "#f97316", // orange
          fontSize: "20px",
        }}
      >
        ↓
      </div>
    </div>
  );
};

export default CircularTextManual;
