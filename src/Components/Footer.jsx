import React from "react";
import {
  FaFacebookF,  FaInstagram,  FaLinkedinIn,  FaTwitter,  FaPhone,  FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h3>Elewatt</h3>
          <p>Solutions électriques professionnelles et fiables.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaPhone /> <a href="tel:+32472611952">0472 61 19 52</a></p>
          <p><FaEnvelope /> <a href="mailto:info@elewatt.be">info@elewatt.be</a></p>
        </div>

        <div className="footer-social">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2018-2024 - Elewatt - All rights reserved |
          VAT BE0700.626.941 |
          <a href="#"> Legal notices</a> |
          <a href="#"> Cookies policy</a> |
          <a href="#"> Terms and conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
