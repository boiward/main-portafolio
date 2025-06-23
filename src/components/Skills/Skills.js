import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades y Tecnologías</h2>
      <p className='skills-summary'>
        Mi conjunto de habilidades combina herramientas técnicas modernas como React, Golang, .NET y Docker, con buenas prácticas de desarrollo como la escritura de código limpio, el diseño modular y la optimización del rendimiento. A nivel personal, destaco por mi autonomía, pensamiento crítico, adaptabilidad y comunicación efectiva, cualidades que me permiten integrarme con facilidad a equipos de trabajo y afrontar proyectos de forma proactiva y colaborativa.      </p>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Lenguajes y Tecnologías</h3>
          <ul>
            <li>Java</li>
            <li>Golang</li>
            <li>C#</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Habilidades Blandas</h3>
          <ul>
            <li>Comunicación efectiva</li>
            <li>Trabajo en equipo</li>
            <li>Autonomía y proactividad</li>
            <li>Resolución de problemas</li>
            <li>Capacidad de aprendizaje continuo</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Otros conocimientos</h3>
          <ul>
            <li>Patrones de Diseño</li>
            <li>Control de versiones con Git</li>
            <li>Diseño de APIs REST</li>
            <li>Pruebas unitarias</li>
            <li>Optimización y rendimiento</li>
            <li>Inglés nivel B1</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
