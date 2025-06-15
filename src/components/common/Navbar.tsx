import { motion } from "framer-motion";

const Navbar = () => {
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl">
          Company
        </a>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
            {menuItems.map((label, index) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <a className="md:p-4 py-3 px-0 block" href="#">
                  {label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;