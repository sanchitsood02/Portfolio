"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="group">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-500">
                <span className="text-xl font-bold">MD</span>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Manuel Dala
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Innovating digital experiences one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons (same as original) */}
              {[
                {
                  href: "https://www.linkedin.com/in/mohammed-abdullah-khan-7b82a31a5/",
                  bg: "bg-blue-500",
                  icon: (
                    <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition duration-300" />
                  ),
                },
                {
                  href: "https://github.com/Mak-3",
                  bg: "bg-sky-500",
                  icon: (
                    <FaGithub className="w-6 h-6 hover:text-gray-400 transition duration-300" />
                  ),
                },
                {
                  href: "https://wa.me/916301793703",
                  bg: "bg-purple-500",
                  icon: (
                    <FaWhatsapp className="w-6 h-6 hover:text-sky-400 transition duration-300" />
                  ),
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:${item.bg} hover:shadow-lg hover:shadow-${item.bg}/30 transition-all duration-300`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="group">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "Projects", "Services", "Blog"].map((label, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              {[
                {
                  label: "Email",
                  value: "mohammedabdullahkhan26523@gmail.com",
                  href: "mailto:mohammedabdullahkhan26523@gmail.com",
                  icon: <FiMail className="text-lg" />,
                },
                {
                  label: "Phone",
                  value: "+91 6301793703",
                  href: "tel:+916301793703",
                  icon: <FiPhone className="text-lg" />,
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-400 transition"
                    >
                      {item.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {" "}
            Made with <span className="text-red-500">♥</span> · All rights
            reserved · © {currentYear}
          </p>
        </div>
      </div>

      <motion.div
        className="orb absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 filter blur-3xl pointer-events-none"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </footer>
  );
};

export default Footer;
