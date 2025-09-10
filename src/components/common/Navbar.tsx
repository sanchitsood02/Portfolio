"use client";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import user from "../../assets/images/MyPic.png";

const Navbar = () => {
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [isDesktop, setIsDesktop] = useState(false);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > prevScroll) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  // Set default border position to "Home"
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

  // Animate underline to selected item
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

    setMenuOpen(false); // close mobile menu
  };

  // Update border on scroll to section
  useEffect(() => {
    // Observer for most sections
    const defaultObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const navItem = itemRefs.current[id];
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

    // Observer for "projects" with a lower threshold
    const projectsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const navItem = itemRefs.current[id];
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
      { threshold: 0.2 }
    );

    menuItems.forEach((label) => {
      const id = label.toLowerCase();
      const section = document.getElementById(id);
      if (section) {
        if (id === "projects") {
          projectsObserver.observe(section);
        } else {
          defaultObserver.observe(section);
        }
      }
    });

    return () => {
      defaultObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, [menuItems]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="sticky top-0 z-50 px-6 py-4 bg-white"
    >
      <div className="flex justify-between items-center">
        {/* Left: Profile */}
        <div className="flex items-center gap-2">
          <Image
            src={user}
            alt="user profile image"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-black font-medium">Sanchit Sood</p>
        </div>

        {/* Hamburger Icon - mobile only */}
        <div className="md:hidden z-50">
          <button
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-4 h-0.5 bg-black origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-black origin-center"
            />
          </button>
        </div>

        {/* Desktop Menu */}
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
                      role="link"
                      className="relative z-10 md:p-3 py-3 px-0 block"
                      href={`#${key}`}
                    >
                      {label}
                    </a>
                  </motion.li>
                );
              })}

              {/* Corner borders */}
              {isDesktop &&
                ["tl", "tr", "bl", "br"].map((corner) => {
                  const offsetX = corner.includes("r")
                    ? position.width - 12
                    : 0;
                  const offsetY = corner.includes("b")
                    ? position.height - 12
                    : 0;
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[64px] left-0 w-full bg-white z-40 overflow-hidden shadow-md rounded-b-xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg">
              {menuItems.map((label) => {
                const key = label.toLowerCase();
                return (
                  <li
                    key={key}
                    className="cursor-pointer"
                    onClick={() => handleItemClick(label)}
                  >
                    <a href={`#${key}`}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
