import React from "react";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const certifications = [
  {
    name: "The Complete 2024 Web Development Bootcamp (Udemy)",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-da33bb61-bba8-4eeb-b0d1-38e379dcc582/",
  },
  {
    name: "Japanese Language NAT-TEST Q5 ",
    year: "2025",
    link: "https://www.nat-test.com/",
  },
  {
    name: "IBM Machine Learning (Coursera)",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/48KC0NUZ36IS",
  },
  {
    name: "Principles of UX/UI Design",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/QCQNPOM321QQ",
  },  {
    name: "CISCO Networking Academy - CCNA ",
    year: "2024",
    link: "https://www.netacad.com/",
  },
];

const Certificates = () => {
  return (
    <section className="px-4 py-16 bg-black text-white w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col gap-2 items-start p-5 border border-gray-700 rounded-lg bg-gradient-to-br from-[#111827] to-[#0f172a] shadow-md hover:shadow-purple-800/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <MdVerified size={24} className="text-purple-500" />
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.year}</p>
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-sm text-blue-400 font-medium inline-flex items-center hover:underline mt-2"
                >
                  Check Certificate
                  <FiArrowUpRight className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
