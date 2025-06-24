"use client";
import { useEffect, useRef, useState } from "react";

export default function Eye() {
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

  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    };

    const scheduleNextBlink = () => {
      setTimeout(() => {
        blink();
        scheduleNextBlink();
      }, 5000);
    };

    scheduleNextBlink();
  }, []);

  return (
    <div
      ref={eyeRef}
      className="w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-white inline-flex items-center justify-center relative overflow-hidden mx-1"
    >
      {/* Pupil */}
      <div
        className="rounded-full bg-black absolute transition-transform duration-75"
        style={{
          width: "33%",
          height: "33%",
          transform: `translate(${Math.cos(angle) * 4}px, ${Math.sin(angle) * 4}px)`,
        }}
      />

      {/* Eyelid */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black transition-transform duration-150 ease-in-out z-10 ${
          isBlinking ? "translate-y-0" : "-translate-y-full"
        }`}
      />
    </div>
  );
}