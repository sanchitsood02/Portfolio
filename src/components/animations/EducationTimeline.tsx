import { motion } from "framer-motion";

const years = [2018, 2019, 2020, 2021, 2022, 2023];

const EducationTimeline = () => {
  const startIndex = 1.5; // 2019
  const endIndex = 4.5;   // 2023
  const totalYears = years.length;
  const colWidth = 100 / totalYears;

  return (
    <div className="relative w-full max-w-xl mx-auto mt-2">
      {/* Animated selected range (like iOS calendar) */}
      <motion.div
        initial={{ left: `${colWidth * startIndex}%`, width: 0 }}
        animate={{
          left: `${colWidth * startIndex}%`,
          width: `${colWidth * (endIndex - startIndex + 1)}%`,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 bg-indigo-200 rounded-full z-0"
      />

      {/* Year blocks */}
      <div className="grid grid-cols-6 relative z-10">
        {years.map((year) => (
          <div
            key={year}
            className="text-center py-3 text-sm font-semibold rounded-md"
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;