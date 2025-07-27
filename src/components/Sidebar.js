import React from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Sidebar({ activeSection, onNavClick }) {
  const { t } = useTranslation();

  const renderNavLink = (id, labelKey) => (
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
      {t(labelKey)}
    </button>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>John Edward Fajardo</h1>
        <h2>{t('sidebar.role')}</h2>
        <div className="divider"></div>
        <p className="slogan">{t('sidebar.slogan')}</p>
        <div className="social-icons">
          <a
            href="https://github.com/boiward?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-tooltip"
            data-tooltip={t('sidebar.github')}
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/john-edward-fajardo-londo%C3%B1o-44883a295/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-tooltip"
            data-tooltip={t('sidebar.linkedin')}
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="icon-tooltip"
            data-tooltip={t('sidebar.downloadCV')}
          >
            <FaFileAlt className="custom-cv-icon" />
          </a>
        </div>
      </div>

      <nav className="nav-menu">
        {renderNavLink('about', 'sidebar.about')}
        {renderNavLink('skills', 'sidebar.skills')}
        {renderNavLink('education', 'sidebar.education')}
        {renderNavLink('experience', 'sidebar.experience')}
        {renderNavLink('projects', 'sidebar.projects')}
      </nav>
    </div>
  );
}

export default Sidebar;
