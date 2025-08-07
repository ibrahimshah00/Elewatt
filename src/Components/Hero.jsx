import React from 'react';
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Energie oplossingen voor de toekomst
        </h1>
        <p>
          Elewatt biedt duurzame energieoplossingen die perfect aansluiten bij uw behoeften en het milieu.
        </p>
        <a href="/contact" className="hero-button">
          Contacteer ons
        </a>
      </div>
    </section>
  );
}

export default Hero;
