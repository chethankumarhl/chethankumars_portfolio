import React from "react";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Chethan_Resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="bg-[#0b0c1a] text-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with back icon */}
        <br />
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center text-purple-400 hover:underline text-sm"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center w-full -ml-10">
            My Resume
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6">
          <p className="text-gray-300 mb-6 text-sm sm:text-base text-center">
            View or download my full resume showcasing my education, skills, and project experience.
          </p>

          {/* Responsive iframe container */}
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-lg mb-6">
            <iframe
              src={resumePDF}
              title="Chethan Resume"
              className="w-full h-full border-none"
            ></iframe>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <a
              href={resumePDF}
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 text-white rounded-lg hover:border-purple-500 transition"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
