import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="services-section" id="about">
      <div className="services-header">
        <h2>NOS SERVICES</h2>
        <p>Un service de qualité donné par des professionnels</p>
      </div>

      <div className="services-grid">
        <div className="service-block">
          <img src="pic4.webp" alt="Dépannage électrique" />
          <h4>Dépannage électrique</h4>
          <p>
            Besoin d'une intervention urgente suite à une panne électrique ? Nous intervenons rapidement ! Toujours un technicien près de chez vous.
          </p>
        </div>
        <div className="service-block">
          <img src="pic5.webp" alt="Installation électrique" />
          <h4>Installation électrique</h4>
          <p>
            Nous réalisons des installations complètes selon vos besoins et votre budget. Nous vous fournissons un devis complet et précis pour un coût mesuré.
          </p>
        </div>
        <div className="service-block">
          <img src="pic3.webp" alt="Mise en conformité électrique" />
          <h4>Mise en conformité électrique</h4>
          <p>
            Contrôle et diagnostic de votre circuit électrique pour la mise en conformité. Obtention d’un certificat de conformité d’installation électrique.
          </p>
        </div>
        <div className="service-block">
          <img src="pic2.webp" alt="Installation éclairage" />
          <h4>Installation éclairage</h4>
          <p>
            Illuminer votre intérieur avec un éclairage adapté. Installation d’éclairages sécurisée de type standard ou design. Donnez de la lumière à votre espace.
          </p>
        </div>
      </div>

     {/* <div className="services-list">
          <p>
            <span className="services-title">DEPANNAGE ELECTRIQUE</span> <span className="services-description">- Nous intervenons pour votre dépannage électrique 24h/24 et 7j/7. Chez vous en 30 min ! Un service rapide, fiable et efficace.</span>
          </p>
          <p>
            <span className="services-title">NOUVELLE INSTALLATION</span> <span className="services-description">- Nous installons des circuits complets et sécurisés, et ce, du fusible à l’ampoule. Un travail soigné sur mesure et selon vos attentes.</span>
          </p>
          <p>
            <span className="services-title">RENOVATION ET REPARATION</span> <span className="services-description">- Nous remettons votre ancienne installation en norme et apportons toutes modifications nécessaires à sa remise à niveau.</span>
          </p>
          <p>
            <span className="services-title">PLAN D’INSTALLATION</span> <span className="services-description">- Nous vous fournissons un plan complet pour chacune de nos installation électrique effectué. Un travail pro du début à la fin.</span>
          </p>
          <p>
            <span className="services-title">MISE EN CONFORMITE</span> <span className="services-description">- Nous effectuons un contrôle et un diagnostic complet. Si celui-ci répond aux normes, nous vous attribuons votre certification de conformité.</span>
          </p>
          <p>
            <span className="services-title">ECLAIRAGE INTERIEUR/EXTERIEUR</span> <span className="services-description">- Nous installons vos éclairages intérieur et extérieur. Nous sommes également spécialisés dans l’éclairage design.</span>
          </p>
          <p>
            <span className="services-title">PARLOPHONE ET VIDEOPHONE</span> <span className="services-description">- Nous installons votre système de parlophone et de vidéophone. Nous vous proposons une gamme de produits étendue et moderne.</span>
          </p>
          <p>
            <span className="services-title">INSTALLATION DOMOTIQUE</span> <span className="services-description">- Nous rendons votre maison intelligente et entièrement connectée afin d’être contrôlable depuis votre smartphone.</span>
          </p>
        </div>   */}

        <div className="services-list">
  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">DEPANNAGE ELECTRIQUE</span>
      <span className="services-description"> - Nous intervenons pour votre dépannage électrique 24h/24 et 7j/7. Chez vous en 30 min ! Un service rapide, fiable et efficace.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">NOUVELLE INSTALLATION</span>
      <span className="services-description"> - Nous installons des circuits complets et sécurisés, et ce, du fusible à l’ampoule. Un travail soigné sur mesure et selon vos attentes.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">RENOVATION ET REPARATION</span>
      <span className="services-description"> - Nous remettons votre ancienne installation en norme et apportons toutes modifications nécessaires à sa remise à niveau.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">PLAN D’INSTALLATION</span>
      <span className="services-description"> - Nous vous fournissons un plan complet pour chacune de nos installation électrique effectué. Un travail pro du début à la fin.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">MISE EN CONFORMITE</span>
      <span className="services-description"> - Nous effectuons un contrôle et un diagnostic complet. Si celui-ci répond aux normes, nous vous attribuons votre certification de conformité.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">ECLAIRAGE INTERIEUR/EXTERIEUR</span>
      <span className="services-description"> - Nous installons vos éclairages intérieur et extérieur. Nous sommes également spécialisés dans l’éclairage design.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">PARLOPHONE ET VIDEOPHONE</span>
      <span className="services-description"> - Nous installons votre système de parlophone et de vidéophone. Nous vous proposons une gamme de produits étendue et moderne.</span>
    </p>
  </div>

  <div className="service-item">
    <FaCheckCircle className="check-icon" />
    <p>
      <span className="services-title">INSTALLATION DOMOTIQUE</span>
      <span className="services-description"> - Nous rendons votre maison intelligente et entièrement connectée afin d’être contrôlable depuis votre smartphone.</span>
    </p>
  </div>
</div>

    </section>
  );
}