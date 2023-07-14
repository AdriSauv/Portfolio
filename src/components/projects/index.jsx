import React, { useState, useEffect } from 'react';
import './index.css';
import projectsData from '../../assets/data/projects.json';
import bookiImage from '../../assets/images/booki.webp';
import sophieImage from '../../assets/images/bluel.webp';
import ninaImage from '../../assets/images/nina.webp';
import kasaImage from '../../assets/images/kasa.webp';
import grimoireImage from '../../assets/images/grimoire.webp';

function Projects() {

  const images = [bookiImage, sophieImage, ninaImage, grimoireImage, kasaImage];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal')) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <section id="projects">
      <div className="projects_main_container">
        <h2 className="about_heading">
          <span className="heading__main">Projects</span>
          <span className="heading__sub">
            Here you will find some of the personal and client projects that I created with each project containing its own
            case study
          </span>
        </h2>
      </div>
      <div className="project_wrapper">
        <div className="slider">
          {projectsData.map((project, index) => (
            <div key={project.id} className="slider_item" onClick={() => openModal(project)}>
              <img src={images[index]} alt={project.title} />
              <div className="slider_overlay">
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.position}</p>
            <p>{selectedProject.mission}</p>
            <p>Skills :</p>
            <ul>
              {selectedProject.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <div className="modal_buttons">
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

