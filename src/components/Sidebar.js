import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Sidebar.css';

function Sidebar({ activeSection, onNavClick }) {
  const renderNavLink = (id, label) => (
    <button
      className={activeSection === id ? 'active nav-link' : 'nav-link'}
      onClick={() => onNavClick(id)}
    >
      <span
        className="nav-indicator"
        style={{
          width: activeSection === id ? '30px' : '10px',
          backgroundColor: activeSection === id ? 'white' : 'gray',
          height: '2px',
          transition: 'width 0.3s ease, background-color 0.3s ease'
        }}
      ></span>
      {label}
    </button>
  );

  return (
    <div className="sidebar">
      <h1>John Edward Fajardo</h1>
      <h2>Desarrollador Junior</h2>
      <p className="slogan">Transformando ideas en software funcional</p>

      <nav className="nav-menu">
        {renderNavLink('about', 'Acerca de mí')}
        {renderNavLink('education', 'Educación')}
        {renderNavLink('experience', 'Experiencia')}
        {renderNavLink('projects', 'Proyectos')}
      </nav>

      <div className="social-social-icons">
        <a href="https://github.com/boiward?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={35} />
        </a>
        <a href="https://www.linkedin.com/in/john-edward-fajardo-londo%C3%B1o-44883a295/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={35} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
