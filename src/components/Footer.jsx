import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const email = "chethankumar.lingaraju@gmail.com";
  return (
    <footer className="bg-[#0b0c1a] text-white px-6 py-5  ">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
      className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-semibold">Chethan Kumar HL</h2>
          <p className="text-sm text-gray-400 mt-1">
            Passionately crafting digital experiences through clean code and design.
          </p>
        </div>

        {/* Middle - Contact Info */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-xs">+91 7829585655</p>
          <p className="text-gray-500 text-xs">Bangalore, India</p>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/chethankumarhl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            title="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://github.com/chethankumarhl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            title="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-purple-400 transition"
            title="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
      className="mt-10 text-center text-gray-600 text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Chethan Kumar HL. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
