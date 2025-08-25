import React from 'react'
import "./projects.css";


// Sample project data - replace with your actual projects
const projectData = [
  {
    title: 'Code Clarity Analyzer',
    description: 'A web application that allows users to paste in code snippets (currently supports JavaScript and Python) and receive feedback on code readability, potential areas for simplification, and adherence to common style guides. Includes syntax highlighting and a user-friendly report generation.',
    image: '/images/project1.png', // Path to your project image
    liveLink: 'https://live-demo-link-1.com',
    codeLink: 'https://github.com/yourusername/project1',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Personal Finance Tracker Mobile App',
    description: 'A mobile application (built with React Native) to help users track their income and expenses. Features include transaction logging, categorization of spending, visual charts for financial overview, and the ability to set budget goals.',
    image: '/images/project2.png', // Path to your project image
    liveLink: 'https://live-demo-link-2.com',
    codeLink: 'https://github.com/yourusername/project2',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Interactive Recipe Blog',
    description: 'A dynamic blog built with a CMS (like WordPress or a custom backend) where users can browse recipes, filter by ingredients or cuisine, save their favorite recipes, and leave comments. Includes high-quality food photography and clear, step-by-step instructions.',
    image: '/images/project3.png', // Path to your project image
    liveLink: null, // If no live demo
    codeLink: 'https://github.com/yourusername/project3',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            {/* {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )} */}
            <div className="project-details">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              {/* <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;