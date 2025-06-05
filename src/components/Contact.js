import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <div className="social-icons">
        <a href="https://github.com/boiward?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/john-edward-fajardo-londo%C3%B1o-44883a295/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
