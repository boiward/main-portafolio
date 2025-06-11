import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});

  const sections = ['about', 'education', 'experience', 'projects'];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    // Actualizar posición de la iluminación según mouse
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Setup Intersection Observer para secciones
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionRefs.current[id] = el;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-layout">
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      <div className="content">
        <About />
        <Education />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
