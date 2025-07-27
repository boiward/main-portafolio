import React from 'react';
import './Footer.css';

function Footer({ isCentered }) {
  return (
    <div className={`footer ${isCentered ? 'footer-centered' : ''}`}>
      &copy; {new Date().getFullYear()} John Edward Fajardo Londoño. Todos los derechos reservados.
    </div>
  );
}

export default Footer;
