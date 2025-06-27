import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaCodeBranch
} from 'react-icons/fa';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section id="about">
        <h2>Acerca de mí</h2>
        <p className="about-summary">
          ¡Hola! Soy John Edward Fajardo Londoño, Ingeniero de Sistemas y Computación. Desde que inicié en el mundo del desarrollo de software
          <FaLaptopCode className="icon" color="#4fc3f7" />,
          me ha apasionado crear soluciones comprensibles, funcionales y con impacto real.
          <br /><br />

          He trabajado con tecnologías como <strong>Java</strong>, <strong>Golang</strong>, <strong>.NET</strong>, <strong>Python</strong> y <strong>Node.js</strong>,
          enfocándome especialmente en el desarrollo backend y el diseño de sistemas eficientes y sostenibles
          <FaCogs className="icon" color="#ffb74d" />.
          <br /><br />

          Me motiva el aprendizaje constante
          <FaLightbulb className="icon" color="#fdd835" />, el descubrimiento de nuevas herramientas y enfoques, y enfrentar desafíos técnicos que fortalezcan mis habilidades profesionales
          <FaCodeBranch className="icon" color="#81c784" />.
          <br /><br />

          Valoro profundamente la claridad del código, la colaboración efectiva y el trabajo en equipo
          <FaUsers className="icon" color="#64b5f6" />.
          Además, cuento con un nivel de inglés B1
          <FaGlobe className="icon" color="#90caf9" />, lo cual me permite desenvolverme en entornos globales, acceder a documentación técnica y seguir aprendiendo de forma autónoma.
        </p>
      </section>
    </motion.section>
  );
}

export default About;
