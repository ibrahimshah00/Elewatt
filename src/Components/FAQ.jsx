import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Qu'est-ce qu'un électricien ?",
    answer: "Un électricien est un professionnel qui intervient dans la conception, l'installation, la maintenance et la réparation des installations électriques."
  },
  {
    question: "Pourquoi faire appel à une entreprise d'électricité ?",
    answer: "Faire appel à une entreprise d'électricité permet de bénéficier de l'expertise de professionnels qualifiés et certifiés pour réaliser tous types de travaux électriques en toute sécurité."
  },
  {
    question: "Combien coûte un dépannage électrique ?",
    answer: "Le coût d'un dépannage électrique peut varier en fonction de la complexité du problème. Un simple remplacement d'un fusible peut coûter quelques dizaines d'euros, alors que le remplacement complet d'une installation électrique peut coûter des milliers d'euros."
  },
  {
    question: "Quels sont les signes d’un problème électrique ?",
    answer: "Des coupures fréquentes, des prises qui chauffent, ou des disjoncteurs qui sautent sont des signes qu’il peut y avoir un problème électrique."
  },
  {
    question: "Un électricien peut-il installer une borne de recharge ?",
    answer: "Oui, un électricien qualifié peut installer une borne de recharge pour véhicules électriques conformément aux normes en vigueur."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleFAQ = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="faq-section">
      <h2>FAQ</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <FaChevronDown className={`icon ${openItems[index] ? 'rotated' : ''}`} />
              <strong>{item.question}</strong>
            </div>
            {openItems[index] && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
