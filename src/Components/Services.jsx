import React from "react";
import { FaCheckCircle, FaRegEye, FaShieldAlt } from "react-icons/fa";

export default function QualityFeatures() {
  return (
       
    <div className="features-container">
      <div className="feature-item">
        <div className="feature-item-flex">
        <FaCheckCircle className="feature-icon" />
        </div>
        <div className="feature-item-text">
        <h3 className="feature-title">SERVICE DE QUALITÉ</h3>
        <p className="feature-text">
          Nos équipes sont spécialisées dans le domaine de l'électricité.<br />
          Nous vous garantissons un travail professionnel et de qualité.
        </p>
      </div>
      </div>

      <div className="feature-item">
        <div className="feature-item-flex">
        <FaRegEye className="feature-icon" />
        </div>
        <div className="feature-item-text">
        <h3 className="feature-title">TRANSPARENCE DES PRIX</h3>
        <p className="feature-text">
          Chez nous, pas de mauvaise surprise en fin de mission !<br />
          Des tarifs clairs, un devis précis et un travail dans les temps.
        </p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-item-flex">
        <FaShieldAlt className="feature-icon" />
      </div>
      <div className="feature-item-text">
        <h3 className="feature-title">SATISFACTION GARANTIE</h3>
        <p className="feature-text">
          Nos clients sont nos meilleurs ambassadeurs !<br />
          Nos équipes répondent aux attentes de notre clientèle avec le sourire.
        </p>
        </div>
      </div>
    </div>
   
  );
}
