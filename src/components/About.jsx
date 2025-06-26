import React from "react";
import { motion } from "framer-motion";
import laptopImage from "../assets/laptop.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const glassCardStyles =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:backdrop-blur-lg transition-all duration-500";

const About = () => {
  return (
    <section className="w-full px-4 py-12 bg-black" id="AboutMe">

      <div className="text-white text-center text-5xl mb-8 mx-10 font-semibold" >
        About Me
      </div>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-4 auto-rows-[200px]">

        {/* Grid Item 1 */}
        <motion.div
  custom={1}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  whileHover={{ scale: 1.02 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    type: "spring",
    stiffness: 300,
    damping: 25,
    delay: 0.1,
  }}
  viewport={{ once: true }}
  className={`relative col-span-2 row-span-2 overflow-hidden p-0 ${glassCardStyles}`}
>
  <img
    src={laptopImage}
    alt="Laptop"
    className="w-full h-full object-cover opacity-30"
  />

  {/* Centered Content Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 bg-black/10 backdrop-blur-sm">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug drop-shadow-md">
      Writing code that<br className="hidden md:block" />
      <span className="text-purple-400">connects ideas</span> to impact
    </h2>

    <p className="mt-6 text-sm md:text-lg text-white font-medium tracking-wide">
      Full-Stack Developer · AI Enthusiast<br />
      Turning ideas into scalable solutions
    </p>
  </div>
</motion.div>

        {/* Grid Item 2 */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className={`col-span-2 row-span-1 p-5 text-center text-white text-sm md:text-base font-light ${glassCardStyles}`}
        >
          <p>
            I’m a full-stack developer passionate about building responsive, user-friendly web applications and smart backend systems. <br />
            With hands-on experience in technologies like React, Node.js, Flask, MongoDB, and Firebase, I love turning ideas into scalable software.
            <br /> <span className="text-purple-400">- Chethan Kumar HL</span>
          </p>
        </motion.div>

        {/* Grid Item 3 */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className={`col-span-2 row-span-1 p-6 text-white ${glassCardStyles}`}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Techstacks and Technologies
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-2 sm:gap-1">
            {[
              "Python",
              "Java",
              "Javascript",
              "React.js",
              "Node.js",
              "Flask",
              "PHP",
              "Next.js",
              "AWS",
              "SQL",
              "MongoDB",
              "Machine Learning",
              "Firebase",
            ].map((tech, i) => (
              <span
              id="Projects"
                key={i}
                className="bg-white/10 text-white px-4 py-2 rounded-md text-sm sm:text-xs border border-white/10 hover:bg-purple-600 hover:border-purple-500 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
