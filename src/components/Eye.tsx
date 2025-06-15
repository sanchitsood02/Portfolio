"use client";
import { useEffect, useRef, useState } from "react";

export default function Eye({ size = 28 }: { size?: number }) {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angleRad = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
      setAngle(angleRad);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Random blinking effect
  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150); // duration of blink
    };

    const scheduleNextBlink = () => {
      const timeout = 5000
      setTimeout(() => {
        blink();
        scheduleNextBlink();
      }, timeout);
    };

    scheduleNextBlink();
  }, []);

  const pupilSize = size / 3.5;
  const offset = size / 5;

  return (
    <div
      ref={eyeRef}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 4px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Pupil */}
      <div
        style={{
          width: pupilSize,
          height: pupilSize,
          borderRadius: "50%",
          background: "black",
          position: "absolute",
          transform: `translate(${Math.cos(angle) * offset}px, ${Math.sin(angle) * offset}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* Eyelid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "black",
          transform: isBlinking ? "translateY(0%)" : "translateY(-100%)",
          transition: "transform 0.15s ease-in-out",
          zIndex: 10,
        }}
      />
    </div>
  );
}