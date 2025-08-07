import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ElectricianBanner() {

    const handleScroll = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="electrician-banner">
      <div className="banner-text">
        <h2 className="banner-title">
          Des électriciens qualifiés 24h/7j
        </h2>
        <p className="banner-subtitle">
          Découvrez notre services en installations et dépannages électricité
        </p>
      </div>
      <button className="banner-button" onClick={handleScroll}>
        SERVICES
      </button>
    </div>
  );
}
