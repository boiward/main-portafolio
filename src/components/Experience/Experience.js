import React from 'react';
import './Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Desktop Cloud - Proyecto Universitario",
      description:
        "Una iniciativa académica orientada a ofrecer escritorios virtuales en la nube usando tecnologías open source. Participé en el diseño e implementación de los servicios backend y la integración con el cliente de escritorio.",
      technologies: ['Golang', 'Javascript', 'Docker', 'MariaDB']
    },
    {
      title: "Aplicaciones personales como desarrollador independiente",
      description:
        "He desarrollado soluciones completas desde cero con .NET, React y Java, enfocadas en optimización de rendimiento y accesibilidad, adaptadas a contextos con recursos limitados.",
      technologies: ['Python', 'Java', 'Golang', 'React', 'Node.js']
    }
  ];

  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <div className="experience-cards">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.title}</h3>
            <p className="description">{exp.description}</p>
            <div className="tech-tags">
              {exp.technologies.map((tech, i) => (
                <span className="tech-tag" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

