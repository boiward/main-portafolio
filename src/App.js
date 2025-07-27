
/**
 * Componente principal de la aplicación del portafolio.
 * Gestiona la navegación entre secciones, el seguimiento de la sección activa y
 * la animación del fondo según el movimiento del mouse.
 */
import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import './i18n'; // Configuración de internacionalización
import Sidebar from './components/Sidebar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';



function App() {
  // Estado para la sección actualmente visible/activa
  const [activeSection, setActiveSection] = useState('about');

  // Lista de IDs de las secciones principales del portafolio
  // useMemo evita que el array se regenere en cada render
  const sections = useMemo(() => ['about', 'skills', 'education', 'experience', 'projects'], []);

  /**
   * Maneja el click en la navegación lateral.
   * Hace scroll suave a la sección seleccionada y la marca como activa.
   * @param {string} id - ID de la sección a mostrar
   */
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    // Actualiza las variables CSS para el fondo animado según el mouse
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Observa qué sección está visible en el viewport para actualizar el menú
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Ajusta cuándo se considera visible
        threshold: 0,
      }
    );

    // Observa cada sección principal
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [sections]);

  // Render principal: layout con barra lateral y contenido de secciones
  return (
    <div className="scroll-container relative">
      <div className="main-layout">
        {/* Barra lateral de navegación */}
        <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
        <div className="content">
          {/* Secciones principales del portafolio */}
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
