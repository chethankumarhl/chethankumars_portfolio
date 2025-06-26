import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import salonImage from '../assets/thestylestudio.png';
import mobcheckImage from '../assets/mobcheck.png';
import fitnessImage from '../assets/fitness.png';
import ieeeImage from '../assets/ieee.jpg';
import constrImg from '../assets/underconst.jpg';

const projectsData = [
  {
    image: salonImage,
    title: 'Salon Management Web App',
    tag: 'PHP App',
    description:
      'Developed a salon booking system with login, real-time slots, and MySQL backend. Hosted using InfinityFree.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/chethankumarhl/salon_booking_management',
    liveLink: 'http://thestylestudio.kesug.com/',
  },
  {
    image: mobcheckImage,
    title: 'MOBCHECK: A Flask-based Application',
    tag: 'Flask App',
    description:
      'Predicts used mobile price using ML model. Built with Flask and MongoDB. Secure login and deployed on Render.',
    techStack: ['Python', 'Flask', 'MongoDB', 'Machine Learning'],
    githubLink: 'https://github.com/chethankumarhl/mobcheck',
    liveLink: 'https://mobcheck.onrender.com/',
  },
  {
    image: ieeeImage,
    title: 'ML-Driven Parkinson’s Detection',
    tag: 'Research',
    description:
      'IEEE paper on CatBoost + PCA for Parkinson’s detection. Achieved 97.4% accuracy via vocal features.',
    techStack: ['Python', 'Machine Learning', 'CatBoost', 'PCA'],
    githubLink: 'https://github.com/chethankumarhl/parkinson_detection_ml_pca',
    // liveLink: 'https://github.com/chethankumarhl/parkinson_detection_ml_pca',
  },
  {
    image: fitnessImage,
    title: 'FITMINDS: A Basic Frontend Web App',
    tag: 'Web App',
    description:
      'Frontend-only fitness site with login and plans using HTML, CSS, and JS. Hosted on GitHub Pages.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/chethankumarhl/Fitness_website_html_css_js',
    liveLink: 'https://chethankumarhl.github.io/Fitness_website_html_css_js/',
  },
  {
    image: constrImg,
    title: 'Blood Line: A next.js app',
    tag: 'next.js',
    description:
      'A next js application with focus on fully functional app for the blood doner and the patients who require blood.',
    techStack: ['next', 'react', 'MongoDB','auth','socket io'],
   
  },
  {
    image: constrImg,
    title: 'LLM based public request prioritizer',
    tag: 'LLM',
    description:
      'A LLM based web app where the request of the public to the government will be prioritized and grouped according to departments.',
    techStack: ['LLM', 'Machine Learning', 'React','SQL'],
    
  },
  
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const Projects = () => {
  return (
    <div className="mt-10 p-10 sm:p-5" >
      <div className="text-white text-center text-5xl mb-10 mx-10  font-semibold">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-10 md:px-10 md:mx-10 sm:px-1">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
