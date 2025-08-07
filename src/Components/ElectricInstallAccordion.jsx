// ElectricInstallAccordion.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ElectricInstallAccordion = ({ accordionData, title }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="electric-install-accordion">
      <h2 className="electric-install-accordion-title">{title || "FAQ"}</h2>
      {accordionData.map((item, index) => (
        <div key={index} className="electric-install-accordion-item">
          <div
            className="electric-install-accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && (
            <div className="electric-install-accordion-body">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ElectricInstallAccordion;
