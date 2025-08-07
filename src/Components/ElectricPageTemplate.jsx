import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ElectricInstallAccordion from "./ElectricInstallAccordion";
import FAQ from "./FAQ";
import Lowerbanner from "./Lowerbanner";

import { FaPhoneAlt, FaRegFileAlt } from "react-icons/fa";

function ElectricPageTemplate({ title, subtitle, bgImage, description,accordionData }) {
  return (
    <>
      <Navbar />

      <div
        className="electric-install-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="electric-install-overlay">
          <h1 className="electric-install-title">{title}</h1>
          <p className="electric-install-subtitle">{subtitle}</p>

          <div className="electric-install-buttons">
            <button className="install-phone-btn2">
              
              <div className="phone2">
                <a href="tel:+32472611952"><FaPhoneAlt /> 0472 61 19 52</a>
              </div>
            </button>
            <button className="install-quote-btn">
             
                      <a href="/contact" className="hero-button">
           <FaRegFileAlt /> Contacteer ons
        </a>
            </button>
          </div>
        </div>
      </div>

      <div className="electric-install-cta">
        <h2>
          <strong>{subtitle}</strong>
        </h2>
        <p>{description}</p>
        <button className="install-phone-btn">
          <FaPhoneAlt />
          <span>0471 72 74 42</span>
        </button>
      </div>

       {accordionData && <ElectricInstallAccordion accordionData={accordionData} />}
      <Lowerbanner />
      <FAQ />
      <Footer />
    </>
  );
}


export default ElectricPageTemplate;
