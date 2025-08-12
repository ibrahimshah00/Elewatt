import React from "react";

import { FaPhoneAlt } from "react-icons/fa";

export default function EmergencyCallout() {
  return (
    <div className="callout-container">
      <div className="callout-header">
        <h2>Dépannages en 30 min. chez vous !</h2>
        <p>Appelez-nous 24h/7j pour toutes interventions en dépannages électricité</p>
        <div className="callout-phone">
          <FaPhoneAlt className="phone-icon" />
          <span>0471 72 74 42</span>
        </div>
      </div>

      <div className="callout-content">
        <div className="callout-left">
          <h3>
            Chez Electricien Rapide, nous sommes fiers de fournir des solutions
            électriques de qualité supérieure à nos clients.
          </h3>
        </div>

        <div className="callout-right">
          <p>
            Nous sommes spécialisés dans l'installation, la réparation et la
            maintenance de systèmes électriques pour les maisons et les
            entreprises.
          </p>
          <p>
            Notre équipe d'électriciens qualifiés possède les compétences et
            l'expérience nécessaires pour résoudre tous les problèmes
            électriques, qu'il s'agisse de réparer une panne de courant,
            d'installer un nouveau système électrique, ou de conseiller sur les
            dernières technologies économes en énergie.
          </p>
        </div>
      </div>

      <div className="callout-grid">
        <p>
          Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs
          besoins uniques et fournir des solutions personnalisées pour répondre à leurs
          exigences spécifiques. Notre engagement envers l'excellence signifie que nous
          utilisons uniquement des matériaux de haute qualité pour garantir la sécurité et la
          fiabilité de nos installations.
        </p>
        <p>
          Nous sommes également fiers de proposer des services de maintenance préventive pour aider
          nos clients à prévenir les problèmes électriques avant qu'ils ne surviennent. Nous offrons des
          inspections régulières pour détecter tout problème potentiel et effectuer les réparations
          nécessaires avant qu'ils ne deviennent des problèmes majeurs.
        </p>
        <p>
          Chez Electricien Rapide, nous croyons que la satisfaction de nos clients est primordiale. Nous sommes
          engagés à fournir un service professionnel, rapide et efficace à tous nos clients, et nous nous
          efforçons de dépasser leurs attentes à chaque fois. Contactez-nous aujourd'hui pour découvrir
          comment nous pouvons répondre à vos besoins électriques.
        </p>
      </div>
    </div>
  );
}
