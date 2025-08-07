import React from "react";
import ElectricPageTemplate from "./ElectricPageTemplate";
import depannageImage from "../assets/pic5.webp"; // adjust path



const depannageFaqData = [
  {
    title: "Installations électrique avec Elewatt",
    content: "Une installation électrique fiable et efficace est essentielle pour tout bâtiment, qu'il s'agisse d'une maison ou d'une entreprise. Chez Elewatt, nous offrons des services d'installation électrique professionnels pour répondre à tous vos besoins en matière d'électricité.Nos électriciens qualifiés ont une vaste expérience dans l'installation de tous types de systèmes électriques, qu'il s'agisse de petites ou grandes installations. Nous sommes fiers de fournir un service de qualité supérieure à nos clients dans les zones de Bruxelles et Brabant Wallon. Nous sommes équipés des dernières technologies pour garantir la sécurité et la fiabilité de nos installations électriques. Nous utilisons uniquement des équipements et des matériaux de qualité pour garantir la durabilité et la longévité de nos installations. Nous respectons les normes de sécurité en vigueur pour garantir la sécurité de nos clients et de leurs biens. Nous offrons une gamme complète de services d'installation électrique, allant de l'installation de systèmes de câblage complets à l'installation de prises et de luminaires électriques. Nous pouvons également installer des systèmes d'éclairage extérieur et des systèmes d'alarme pour votre sécurité et votre confort. Nous nous engageons à fournir des solutions d'installation électrique adaptées à vos besoins spécifiques. Nos électriciens travaillent en étroite collaboration avec nos clients pour comprendre leurs besoins et leurs exigences en matière d'installation électrique. Nous sommes fiers de fournir un service personnalisé et de qualité supérieure à nos clients. Nous offrons également des services de maintenance électrique préventive pour aider nos clients à prévenir les problèmes électriques avant qu'ils ne surviennent. Nous proposons des inspections régulières pour détecter tout problème potentiel et effectuer les réparations nécessaires avant qu'ils ne deviennent des problèmes majeurs. Chez Elewatt, nous sommes passionnés par notre métier et nous nous engageons à fournir des services d'installation électrique de qualité supérieure à nos clients. Nous sommes fiers de notre réputation d'excellence et de notre engagement envers la satisfaction de nos clients. En conclusion, si vous avez besoin de services d'installation électrique fiables et professionnels dans les zones de Bruxelles et Brabant Wallon, Elewatt est là pour vous aider. Nous sommes fiers de fournir un service de qualité supérieure à un prix abordable. Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous aider à installer un système électrique fiable et efficace pour votre maison ou votre entreprise. ",
  },
  {
    title: "Nos installations électrique à Bruxelles",
    content: "Chez Elewatt, nous sommes experts en installations électriques pour tous les types de bâtiments à Bruxelles. Nous proposons une large gamme de services, depuis l'installation initiale de votre système électrique jusqu'à la mise à niveau de votre installation existante. Nous sommes fiers de notre capacité à travailler avec nos clients pour leur offrir des solutions qui répondent à leurs besoins spécifiques. Nos électriciens qualifiés et expérimentés sont en mesure de vous offrir une installation électrique fiable, sûre et efficace pour votre maison ou votre entreprise à Bruxelles. Nous travaillons avec les meilleurs produits et matériaux de qualité pour garantir la sécurité et la durabilité de votre installation électrique. Nous prenons également en compte les normes de sécurité en vigueur dans la région de Bruxelles pour vous offrir une installation électrique en conformité. Nous offrons des services d'installation électrique pour tous les types de bâtiments à Bruxelles, y compris les maisons, les appartements, les bureaux, les commerces, les industries et les entrepôts. Nous travaillons avec des architectes, des entrepreneurs généraux et des propriétaires pour garantir une installation électrique sans problème et adaptée à vos besoins. Chez Elewatt, nous sommes fiers de notre service à la clientèle exceptionnel et nous sommes toujours là pour vous aider à répondre à toutes vos questions et à résoudre vos problèmes. Contactez-nous aujourd'hui pour obtenir un devis gratuit pour vos installations électriques à Bruxelles.",
  },
   {
    title: "Nos installations électrique dans le Barabant-Wallon",
    content: "Chez Elewatt, nous sommes fiers de proposer des services d'installation électrique de haute qualité dans le Brabant Wallon. Nous avons une équipe d'électriciens qualifiés et expérimentés qui travaillent en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et leur fournir des solutions sur mesure. Nous prenons en charge tous types d'installations électriques, qu'il s'agisse d'une nouvelle installation dans une maison en construction, d'une rénovation ou d'un agrandissement de maison. Nous travaillons avec les meilleures marques de matériel électrique pour garantir une qualité supérieure à chaque étape du projet. Notre équipe peut également vous aider à améliorer l'efficacité énergétique de votre maison en vous proposant des solutions pour économiser de l'énergie et réduire vos coûts d'électricité. Nous pouvons également vous aider à choisir des produits électriques respectueux de l'environnement pour votre maison. Chez Elewatt, nous sommes engagés à fournir un service de qualité supérieure à nos clients. Nous nous assurons que toutes nos installations électriques respectent les normes de sécurité et les réglementations en vigueur dans le Brabant Wallon. Nous sommes également disponibles pour les interventions d'urgence 24 heures sur 24 et 7 jours sur 7. Si vous cherchez un service d'installation électrique fiable et professionnel dans le Brabant Wallon, n'hésitez pas à contacter Elewatt. Nous serons ravis de vous aider à réaliser votre projet électrique.",
  },
];



export default function Depannages() {
  return (
    <>
    <ElectricPageTemplate
      title="Installation électrique"
      subtitle="Installation électrique professionnels"
      description="Appelez-nous pour une installation électrique fiable et efficace"
      bgImage={depannageImage}

       accordionData={depannageFaqData}
      
    />
    
    </>
  );
}
