import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './App.css';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="main-layout">
      <div className="sidebar">
        <h1>John Edward Fajardo</h1>
        <h2>Desarrollador Java Junior</h2>
        <p className="slogan">Transformando ideas en software funcional</p>

        <nav className="nav-menu">
          <a href="#about">Acerca de mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#education">Educación</a>
          <a href="#projects">Proyectos</a>
          <div className="social-icons">
            <a href="https://github.com/boiward?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub size={35} />
            </a>
            <a href="https://www.linkedin.com/in/john-edward-fajardo-londo%C3%B1o-44883a295/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={35} />
            </a>
          </div>
        </nav>
      </div>

      <div className="content">
        <section id="about"><h2>Acerca de mí</h2></section>
        <section id="experience"><h2>Experiencia</h2></section>
        <section id="education"><h2>Educación</h2></section>
        <section id="projects"><h2>Proyectos</h2></section>
      </div>
    </div>
  );
}

export default App;
