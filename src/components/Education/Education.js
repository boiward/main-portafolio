import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';
import { FaTools, FaUniversity } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

function Education() {
  const educationData = [
    {
      institution: 'SENA',
      degree: 'Técnico en Programación de Software',
      period: '2016 - 2018',
      institutionLogo: '/logos/sena.png',
      description:
        'El SENA me brindó una formación técnica sólida y enfocada en la práctica, fortaleciendo mi lógica de programación y habilidades de desarrollo desde una etapa temprana.',
    },
    {
      institution: 'Universidad del Quindío',
      degree: 'Ingeniero de Sistemas y Computación',
      period: '2018 - 2024',
      institutionLogo: '/logos/uniquindio.png',
      description:
        'En la Universidad del Quindío profundicé en los fundamentos teóricos de la ingeniería de software, bases de datos, arquitectura de sistemas y metodologías modernas de desarrollo.',
    },
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section id="education">
        <h2>Educación</h2>
        <p className="education-summary">
          <FaTools className="icon" color="#4fc3f7" />
          Inicié mi formación académica en el SENA, donde desarrollé una base técnica orientada a la resolución práctica de problemas reales.
          <br /><br />
          <FaUniversity className="icon" color="#c792ea" />
          Luego, en la Universidad del Quindío, consolidé mis conocimientos teóricos en ingeniería de sistemas, complementando la experiencia previa.
          <br /><br />
          <HiAcademicCap className="icon" color="#ffcb6b" />
          Esta combinación de formación técnica y universitaria me permite abordar proyectos con una visión integral y balanceada.
        </p>

        <div className="education-cards">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <img
                src={edu.institutionLogo}
                alt={`Logo de ${edu.institution}`}
                className="institution-logo"
              />
              <div className="education-info">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="period">{edu.period}</p>
                <p className="institution-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}

export default Education;
