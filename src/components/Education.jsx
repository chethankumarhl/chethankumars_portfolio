import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    institute: "Jain (Deemed-To-Be University), Bangalore",
    location: "Bangalore, IN",
    course: "Bachelor of Technology in Computer Science",
    duration: "Aug 2022 – Aug 2026",
    result: "GPA: 8.89/10 (till 5th Semester)",
  },
  {
    institute: "APS College of Commerce",
    location: "Bangalore, IN",
    course: "Higher Secondary School",
    duration: "Jun 2020 – May 2022",
    result: "Percentage: 89%",
  },
  {
    institute: "Jain Vidyaniketan",
    location: "Bangalore, IN",
    course: "High School",
    duration: "Jun 2010 – Apr 2020",
    result: "Percentage: 89%",
  },
];

const EducationTimeline = () => {
  return (
    <section className="bg-black text-white px-5 py-16 w-full">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
    </div>
    <div className="flex items-center justify-center">
        <div className="relative border-l-4 border-purple-500 pl-6 space-y-12 text-center ">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-left"
            >
              {/* Icon Dot */}
              <span className="absolute -left-[34px] top-1 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                <FaGraduationCap size={12} />
              </span>

              {/* Text Content */}
              <h3 className="text-xl font-semibold">{edu.institute}</h3>
              <div className="text-sm text-gray-400 mb-1">
                {edu.location} • {edu.duration}
              </div>
              <p className="italic text-purple-300">{edu.course}</p>
              <p className="text-sm text-gray-300 mt-1">{edu.result}</p>
            </motion.div>
          ))}
        
      </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
