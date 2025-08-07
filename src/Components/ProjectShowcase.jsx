// ProjectShowcase.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Installation de panneaux électrique",
    description:
      "Installation du boitier électrique central et configuration.",
    image: "src/assets/wire.webp",
  },
  {
    title: "Installation cablages électrique",
    description:
      "Nous effectuons l'installations de tout le cablage électrique de l'installation.",
    image: "src/assets/inst.webp",
  },
  {
    title: "Installation éclairage électrique",
    description:
      "Nous installons tout type d'éclairage électrique en intérieur et en extérieur.",
    image: "src/assets/bulb.webp",
  },
];

const ProjectShowcase = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact'); // Make sure this route exists in your router setup
  };
  return (
    <div className="project-container">
      <h2 className="project-title">Nos réalisations</h2>
      <div className="project-images">
        {projects.map((project, index) => (
          <div className="image-wrapper" key={index}>
            <img src={project.image} alt={`Projet ${index + 1}`} />
            {project.title && (
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="quote-section">
        <div className="quote-text">
          <h3>BESOIN D'UN DEVIS COMPLET ?</h3>
          <p>
            Contactez-nous pour une offre précise et sur mesure selon vos réels
            besoins
          </p>
        </div>
        <button className="quote-button" onClick={handleQuoteClick}>DEVIS GRATUIT</button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
