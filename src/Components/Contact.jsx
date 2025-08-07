// src/components/ContactForm.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Miseconfirmite from './ElectricPageTemplate'; 
import Lowerbanner from './Lowerbanner'; // Adjust the import path as necessary
import FAQ from './FAQ';
import footer from './Footer'; // Adjust the import path as necessary
import Footer from './Footer';
import Banner from './Banner'; // Adjust the import path as necessary


import { FaPhoneAlt, FaRegFileAlt } from "react-icons/fa";


const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '+32472611952';
    const text = `Nom: ${form.name}%0AEmail: ${form.email}%0ATéléphone: ${form.phone}%0AMessage: ${form.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${text}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
    <Navbar />
   {/* <div
        className="electric-install-banner"
        style={{ backgroundImage: `url('../src/assets/lightbulb.jpg')` }} // Adjust the image path as necessary
      ></div>      */}
             
         <div className="electric-install-overlay2">
                  <h1 className="electric-install-title">Votre devis électricien gratuit</h1>
                  <p className="electric-install-subtitle">DEVIS ELECTRICIEN</p>
        
                  <div className="electric-install-buttons">
                    <button className="install-phone-btn">
                      <FaPhoneAlt />
                      <span>0472 61 19 52</span>
                    </button>
                    
                  </div>
                </div>
             

    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Téléphone" required onChange={handleChange} />
        <textarea name="message" placeholder="Message" rows="4" required onChange={handleChange}></textarea>
        <button type="submit">Envoyer via WhatsApp</button>
      </form>
    </div>
    <Banner />
    <FAQ></FAQ>
    <Footer></Footer>
    </>
  );
};

export default ContactForm;
