import React from 'react';
import './Experience.css';

function Experience() {
  const experienceData = [
  {
    title: "Desktop Cloud – Proyecto Universitario",
    date: "2023 - 2024",
    description:
      "Proyecto académico desarrollado como trabajo final de grado, cuyo objetivo fue ofrecer escritorios virtuales accesibles desde cualquier lugar mediante tecnologías de código abierto. El enfoque principal fue brindar una alternativa funcional y ligera a soluciones comerciales de escritorio remoto, facilitando el acceso a entornos de desarrollo en la nube.\n\nParticipé activamente en el diseño e implementación de los servicios backend utilizando Golang, definiendo flujos de autenticación, gestión de sesiones y conexión entre el cliente y el servidor. También estuve a cargo de la integración con el cliente de escritorio, facilitando la comunicación en tiempo real y la sincronización de recursos.\n\nDurante el desarrollo, adquirí experiencia práctica en virtualización de entornos, contenedorización con Docker, y gestión de datos con MariaDB, trabajando bajo principios de escalabilidad, modularidad y seguridad.",
    technologies: ['Golang', 'Javascript', 'Docker', 'MariaDB']
  },
  {
    title: "Aplicaciones personales como desarrollador independiente",
    date: "2024 - Actualidad",
    description:
      "En mi recorrido como desarrollador autodidacta, he creado múltiples aplicaciones desde cero, combinando tecnologías como React, .NET, Golang y Java para construir soluciones funcionales y eficientes.\n\nEstas aplicaciones han estado enfocadas en la optimización del rendimiento, la arquitectura limpia y el diseño accesible, con especial énfasis en garantizar una buena experiencia de usuario sin requerimientos técnicos elevados. Esto me ha permitido explorar el diseño de APIs REST, bases de datos eficientes, interfaces intuitivas y despliegues en entornos limitados.\n\nA través de estos proyectos he cultivado habilidades clave como autonomía, resolución de problemas, adaptación a nuevas tecnologías y buenas prácticas de desarrollo de software moderno.",
    technologies: ['Python', 'Java', 'Golang', 'React', 'Node.js']
  }
];


  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <p className='experience-summary'>
        Mi recorrido como desarrollador incluye iniciativas universitarias y proyectos personales donde he puesto en práctica conocimientos clave en Ingeniería de Sistemas y Computación, además del desarrllo de Software. Desde la implementación de arquitecturas backend eficientes hasta la creación de interfaces funcionales, cada experiencia ha contribuido a fortalecer mi criterio técnico, capacidad analítica y enfoque orientado a la solución de problemas reales.
      </p>
      <div className="experience-cards">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
          <div className="experience-header">
            <h3 className="experience-title">{exp.title}</h3>
            <span className="experience-date">{exp.date}</span>
          </div>
          <p className="experience-description">{exp.description}</p>
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

