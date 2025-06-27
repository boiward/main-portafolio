import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import { FaUniversity, FaTools } from 'react-icons/fa';
import { SiBackendless, SiFrontendmentor } from 'react-icons/si';

function Experience() {
  const experienceData = [
    {
      title: "Desktop Cloud – Proyecto Universitario",
      date: "2023 - 2024",
      description: `Proyecto de grado enfocado en ofrecer escritorios virtuales accesibles desde cualquier lugar mediante tecnologías de código abierto. 
      
Lideré el diseño e implementación del backend en Golang, creando flujos de autenticación, gestión de sesiones y conexiones remotas. También integré el cliente de escritorio, facilitando la sincronización en tiempo real.

Adquirí experiencia práctica en virtualización de entornos, contenedorización con Docker y bases de datos con MariaDB, todo bajo principios de escalabilidad, modularidad y seguridad.`,
      technologies: ['Golang', 'Javascript', 'Docker', 'MariaDB']
    },
    {
      title: "Aplicaciones personales como desarrollador independiente",
      date: "2024 - Actualidad",
      description: `He desarrollado diversas aplicaciones fullstack combinando tecnologías como React, .NET, Golang y Java, enfocadas en eficiencia, arquitectura limpia y usabilidad.

Exploré el diseño de APIs REST, interfaces accesibles y despliegue en entornos de recursos limitados. Estas experiencias fortalecieron mi autonomía, adaptabilidad y enfoque práctico en soluciones reales.`,
      technologies: ['Python', 'Java', 'Golang', 'React', 'Node.js']
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section id="experience">
        <h2>Experiencia</h2>
        <p className="experience-summary">
          <FaUniversity className="icon" color="#4fc3f7" />
          Mi experiencia combina proyectos universitarios y personales, aplicando de forma práctica los principios de la Ingeniería de Sistemas.
          <br /><br />
          <SiBackendless className="icon" color="#c792ea" />
          He desarrollado soluciones backend eficientes y escalables,
          <br />
          <SiFrontendmentor className="icon" color="#f78c6c" />
          así como interfaces funcionales centradas en el usuario.
          <br /><br />
          <FaTools className="icon" color="#ffcb6b" />
          Estas experiencias han fortalecido mis habilidades técnicas, pensamiento crítico y capacidad para resolver problemas del mundo real.
        </p>

        <div className="experience-cards">
          {experienceData.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="experience-description">
                {exp.description.split('\n\n').map((para, i) => (
                  <span key={i}>
                    {para}
                    <br /><br />
                  </span>
                ))}
              </p>
              <div className="tech-tags">
                {exp.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}

export default Experience;