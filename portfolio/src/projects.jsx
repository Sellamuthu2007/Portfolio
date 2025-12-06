// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const projectData = [
  {
    title: "SilentSOS",
    description: "AI-powered emergency app for women with gesture recognition.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam veniam numquam repellat rerum inventore aut voluptas ipsum a. Cupiditate ea ratione dolores. Possimus, quo. Soluta fugit dignissimos odio. Distinctio?",
    tech: "React Native, Node.js, MongoDB",
  },
  {
    title: "RuralMint",
    description: "Blockchain-based rural artisan marketplace with virtual booths.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum aliquid? Delectus debitis quos veritatis maxime a natus blanditiis quasi dolores, similique excepturi minus. Deserunt velit adipisci et non aspernatur!",
    tech: "React, Tailwind, Express, MongoDB",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio website with React + Framer Motion.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ex. Minus consectetur repellendus quas cumque quibusdam dolorem ullam, quisquam voluptatibus tenetur reiciendis? Fuga inventore, quod enim itaque aliquid ad molestiae?",
    tech: "React, CSS, AOS",
  },
  {
    title: "Instagram Clone",
    description: "Modern animated portfolio website with React + Framer Motion.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ex. Minus consectetur repellendus quas cumque quibusdam dolorem ullam, quisquam voluptatibus tenetur reiciendis? Fuga inventore, quod enim itaque aliquid ad molestiae?",
    tech: "React,Bootstrap,CSS,AOS, node.js",
  },
  {
    title: "Dost",
    description: "Modern animated portfolio website with React + Framer Motion.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ex. Minus consectetur repellendus quas cumque quibusdam dolorem ullam, quisquam voluptatibus tenetur reiciendis? Fuga inventore, quod enim itaque aliquid ad molestiae?",
    tech: "React,Bootstrap,CSS,AOS, node.js",
  },
  {
    title: "MoneyMan",
    description: "Modern animated portfolio website with React + Framer Motion.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ex. Minus consectetur repellendus quas cumque quibusdam dolorem ullam, quisquam voluptatibus tenetur reiciendis? Fuga inventore, quod enim itaque aliquid ad molestiae?",
    tech: "React,Bootstrap,CSS,AOS, node.js",
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="projects-title"
      >
        My Projects
      </motion.h1>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3, // stagger effect
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              style = {{"textDecoration" : "none" }}
            >{proj.title} Repo</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
