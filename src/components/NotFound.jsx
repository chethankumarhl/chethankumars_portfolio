import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#0b0c1a] text-white flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold mb-4"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl mb-6 text-gray-400"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <Link
        to="/"
        className="inline-block px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-600 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
