"use client";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const defaultItem = itemRefs.current["home"];
    if (defaultItem) {
      setPosition({
        top: defaultItem.offsetTop,
        left: defaultItem.offsetLeft,
        width: defaultItem.offsetWidth,
        height: defaultItem.offsetHeight,
      });
    }
  }, []);

  const handleItemClick = (label: string) => {
    const sectionId = label.toLowerCase();
    const section = document.getElementById(sectionId);
    const navItem = itemRefs.current[sectionId];

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (navItem) {
      setPosition({
        top: navItem.offsetTop,
        left: navItem.offsetLeft,
        width: navItem.offsetWidth,
        height: navItem.offsetHeight,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const navItem = itemRefs.current[id];
console.log(entry.isIntersecting, id)
          if (entry.isIntersecting && navItem) {
          
            setPosition({
              top: navItem.offsetTop,
              left: navItem.offsetLeft,
              width: navItem.offsetWidth,
              height: navItem.offsetHeight,
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((label) => {
      const id = label.toLowerCase();
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [menuItems]);

  return (
    <header className="lg:px-16 px-4 py-4 sticky top-0 z-9999 bg">
      <div className="flex-1 flex justify-between items-center">
        <div>
          <a href="#" className="text-xl">
            Company
          </a>
        </div>

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul
              ref={containerRef}
              className="relative md:flex items-center justify-between text-base pt-4 md:pt-0 gap-4"
            >
              {menuItems.map((label, index) => {
                const key = label.toLowerCase();
                return (
                  <motion.li
                    key={key}
                    ref={(el: any) => (itemRefs.current[key] = el)}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative cursor-pointer"
                    onClick={() => handleItemClick(label)}
                  >
                    <a
                      className="relative z-10 md:p-3 py-3 px-0 block"
                      href={`#${key}`}
                    >
                      {label}
                    </a>
                  </motion.li>
                );
              })}

              {/* 4 animated corner borders with spring transition */}
              {["tl", "tr", "bl", "br"].map((corner, i) => {
                const offsetX = corner.includes("r") ? position.width - 12 : 0;
                const offsetY = corner.includes("b") ? position.height - 12 : 0;
                const borderClasses = {
                  tl: "border-t-2 border-l-2",
                  tr: "border-t-2 border-r-2",
                  bl: "border-b-2 border-l-2",
                  br: "border-b-2 border-r-2",
                }[corner];

                return (
                  <motion.span
                    key={corner}
                    className={`absolute w-3 h-3 border-black pointer-events-none ${borderClasses}`}
                    initial={{ opacity: 0 }}
                    animate={{
                      top: position.top + offsetY,
                      left: position.left + offsetX,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
