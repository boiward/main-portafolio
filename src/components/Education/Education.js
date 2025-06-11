import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      institution: "SENA",
      degree: "Técnico en Programación de Software",
      period: "2016 - 2018",
      institutionLogo: "/logos/sena.png",
      description:
        "El SENA ofrece formación técnica gratuita a millones de colombianos, con enfoque práctico y profesional.",
    },
    {
      institution: "Universidad del Quindío",
      degree: "Ingeniero de Sistemas y Computación",
      period: "2018 - 2024",
      institutionLogo: "/logos/uniquindio.png", // Asegúrate de tener esta imagen
      description:
        "Universidad pública ubicada en Armenia, Quindío, reconocida por su excelencia académica. El programa de Ingeniería de Sistemas y Computación cuenta con acreditación de alta calidad.",

    },
  ];


  return (
    <section id="education">
      <h2>Educación</h2>
      <p className="education-summary">
        A lo largo de mi formación académica, inicié con una sólida base técnica en el SENA y posteriormente profundicé en el desarrollo de software y la ingeniería de sistemas en la Universidad del Quindío. Esta combinación me ha permitido adquirir una visión práctica y estratégica del mundo tecnológico.
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

  );
}

export default Education;

