import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Card = ({ image, title, tag, description, techStack, githubLink, liveLink }) => {
  return (
    <div className="relative w-full max-w-[26rem] h-[520px] rounded-xl p-[2px] cursor-pointer bg-gray-500 transition-all duration-500 group hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500">
      <div className="bg-black w-full h-full rounded-xl overflow-hidden flex flex-col justify-between">
        
        {/* Image and Badge */}
        <div className="relative h-60">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl opacity-98" />
          <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium border border-white/20 shadow-sm">
            {tag}
          </span>
        </div>

        {/* Content and Buttons */}
        <div className="flex-1 flex flex-col justify-evenly px-4 py-3">
          <div>
            <h6 className="text-xl font-bold text-white mb-5">{title}</h6>
            <p className="text-sm text-gray-300 mb-7">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {techStack?.map((tech, i) => (
                <span key={i} className="bg-white/5 text-sm text-gray-200 px-3 py-1 rounded-md border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gray-500 "
              >
                <span className="relative px-5 py-2.5 transition-all duration-75 bg-black rounded-md border border-transparent group-hover:border-white flex items-center gap-2 hover:opacity-70 ">
                  <FiGithub /> GitHub
                </span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gray-500"
                // group-hover:bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300
              >
                <span className="relative md:px-5 md:py-2.5 p-3 py-2.5 transition-all duration-75 bg-black rounded-md border border-transparent group-hover:border-white flex items-center gap-2 hover:opacity-70 ">
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
