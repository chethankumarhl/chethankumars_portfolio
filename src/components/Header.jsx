import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, spring } from "framer-motion";
import { a } from "framer-motion/client";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
const Header = () => {
  const [isOpen, SetOpen] = useState(false);
  const toggleOpen = () => {
    SetOpen(!isOpen);
  }
  return (
    <header className="absolute w-full z-50 transition-all duration-300 " id="Home">
      <div className="md:fixed md:top-0 md:left-0 md:w-full md:z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between  h-16 md:h-15">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <span className="text-xl font-bold md:ml-10  bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent ">CHETHAN KUMAR HL</span>
          </motion.div>

          {/* Navigation bar */}
          <nav className="lg:flex hidden space-x-8  ">
            {["Home", "About Me", "Projects", "Contact Me"].map((item, index) => (
              <motion.a href={item === "Home" ? "/" : `\\#${item.replace(/\s+/g, "")}`} key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>
          {/* socialicons */}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="https://github.com/chethankumarhl" target="_blank">
              <FiGithub className="w-5 h-5" title="Github" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="https://linkedin.com/in/chethankumarhl" target="_blank">
              <FiLinkedin className="w-5 h-5" title="Linkedin" />
            </motion.a>
            {/* RESUME */}
            <a href="/resume">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.6,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}

                className="ml-4 px-3 py-1.5 rounded-xl bg-transparent border  text-gray-300 font-bold hover:bg-gradient-to-r hover:from-violet-700 hover:to-purple-700 hover:text-gray-100 hover:border hover:border-purple-300 transition-all duration-500">Resume </motion.button></a>

          </div>
        </div>
        {/* mobile  */}
        <div className="md:hidden flex  items-center fixed top-5 right-5">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleOpen}
            className="text-gray-300">{isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}</motion.button>

        </div>
      </div>
      {/* mobile menu  */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-5 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About Me", "Projects", "Contact Me"].map((item) => (
            <ScrollLink
              key={item}
              to={item === "Home" ? "home" : item.replace(/\s+/g, "")}
              smooth={true}
              duration={600}
              offset={-70} // Adjust for fixed header height
              onClick={toggleOpen}
              className="text-gray-300 font-medium py-2 cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/chethankumarhl">
              <FiGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/chethankumarhl/">
              <FiLinkedin className="w-5 h-5 text-gray-300" />
            </a>
          </div>
          <a href="/resume">
            <button
              onClick={toggleOpen}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
            >
              Resume
            </button>
          </a>
        </div>
      </motion.div>

    </header>
  )
}

export default Header;