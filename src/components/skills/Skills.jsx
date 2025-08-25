import React from 'react'
import "./skills.css";

const Skills = () => {
  // Sample data for skills - you can fetch this from an API or a data file
  const skillsData = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'React', 'Redux', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'GitHub/GitLab', 'Webpack', 'Babel', 'Docker', 'VS Code'],
    },
    {
      category: 'Other',
      items: ['Problem Solving', 'Communication', 'Teamwork', 'Agile Methodologies'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul className="skill-list">
              {skillCategory.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;