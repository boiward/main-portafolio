import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Memoriza las secciones para evitar que cambien en cada render
  const sections = useMemo(() => ['about', 'skills', 'education', 'experience', 'projects'], []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    // Observa las secciones visibles
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div className="scroll-container">
      <div className="main-layout">
        <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
        <div className="content">
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
