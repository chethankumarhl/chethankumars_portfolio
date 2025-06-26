import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Floating glowing particles
  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 90 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.4 + 0.3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        moveX: Math.random() * 30 - 15,
        moveY: Math.random() * 30 - 15,
        duration: Math.random() * 4 + 5,
        delay: Math.random() * 10,
        color: `rgba(255, 255, 255, 0.9)`,
      })),
    []
  );

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="relative min-h-screen text-white flex flex-col items-center justify-center px-6 overflow-hidden bg-metal-violet"
      onMouseMove={handleMouseMove} id='Hero'
    >
      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none shimmer-overlay" />

      {/* Floating particles */}
      {floatingParticles.map((particle) => {
        const particleX = window.innerWidth * particle.x / 100;
        const particleY = window.innerHeight * particle.y / 100;
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particleX, 2) +
          Math.pow(mousePosition.y - particleY, 2)
        );

        const hoverEffect =
          distance < 100
            ? {
              scale: 1.8,
              rotate: Math.random() * 30 - 15,
              transition: { duration: 0.6, ease: 'easeOut' },
            }
            : {};

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: particle.color,
              filter: `drop-shadow(0 0 8px ${particle.color})`,
            }}
            initial={{ scale: 1 }}
            animate={{
              x: [0, particle.moveX, -particle.moveX, 0],
              y: [0, particle.moveY, -particle.moveY, 0],
              ...hoverEffect,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 2.2,
              rotate: 10,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          />
        );
      })}

      {/* Hero Content */}
      <div className="z-10 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Hey There . <span className="text-purple-400">I'm Chethan.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-purple-100"
        >
          With an eye for detail and a passion for clean architecture, I develop full-stack solutions that are as intuitive as they are powerful. Let’s bring your vision to life through code.
        </motion.p>
        <a href="\#AboutMe">
        <motion.button 
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        class="relative inline-flex items-center justify-center mt-10 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Explore My Profile
          </span>
        </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
