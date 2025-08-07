import React from "react";
import bgImage from "../assets/lamp.jpg"; // replace with your image path
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />
      <div className="content">
        <h1>DEPANNAGES 7j/7 & 24h/24</h1>
        <p>Appelez-nous directement pour une intervention rapide</p>
        <a href="tel:+32472611952" className="call-btn">
          📞 0472 61 19 52
        </a>
      
      </div>
    </section>
  );
}

export default Hero;
