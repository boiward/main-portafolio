import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaReact, FaDocker, FaPeopleArrows, FaBrain, FaJava, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiGo, SiPython, SiJavascript, SiMysql, SiApachespark } from 'react-icons/si';
import { BsLightbulb } from 'react-icons/bs';
import { MdOutlineDesignServices, MdApi } from 'react-icons/md';
import { TbLanguage } from 'react-icons/tb';
import { AiOutlineTeam, AiOutlineComment, AiOutlineBulb } from 'react-icons/ai';


function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Habilidades y Tecnologías</h2>
      <p className="skills-summary">
        <FaReact className="icon" color="#61dafb" />
        Trabajo con tecnologías modernas como React,{' '}
        <SiGo className="icon" color="#00ADD8" /> Golang,{' '}
        <SiDotnet className="icon" color="#512bd4" /> .NET y{' '}
        <FaDocker className="icon" color="#0db7ed" /> Docker.
        <br /><br />

        <BsLightbulb className="icon" color="#fdd835" />
        Me enfoco en aplicar buenas prácticas como escribir código limpio, diseñar estructuras modulares y optimizar el rendimiento de las aplicaciones.
        <br /><br />

        <FaBrain className="icon" color="#c792ea" />
        A nivel personal, me destaco por mi pensamiento crítico, autonomía y adaptabilidad en entornos cambiantes.
        <br /><br />

        <FaPeopleArrows className="icon" color="#4fc3f7" />
        Disfruto comunicar ideas con claridad y colaborar con equipos diversos para construir soluciones funcionales y de impacto.
      </p>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Lenguajes y Tecnologías</h3>
          <ul>
            <li><FaJava color="#f89820" /> Java</li>
            <li><SiGo color="#00ADD8" /> Golang</li>
            <li><SiJavascript color="#F7DF1E" /> JavaScript</li>
            <li><SiPython color="#3776AB" /> Python</li>
            <li><SiDotnet color="#512BD4" /> .NET</li>
            <li><FaNodeJs color="#68A063" /> Node.js</li>
            <li><FaReact color="#61DAFB" /> React</li>
            <li><SiMysql color="#00758F" /> SQL</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Habilidades Blandas</h3>
          <ul>
            <li><AiOutlineComment color="#4FC3F7" /> Comunicación efectiva</li>
            <li><AiOutlineTeam color="#4FC3F7" /> Trabajo en equipo</li>
            <li><AiOutlineBulb color="#FFD54F" /> Autonomía y proactividad</li>
            <li><MdOutlineDesignServices color="#9575CD" /> Resolución de problemas</li>
            <li><SiApachespark color="#FF7043" /> Aprendizaje continuo</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Otros conocimientos</h3>
          <ul>
            <li><MdOutlineDesignServices color="#81C784" /> Patrones de Diseño</li>
            <li><FaGitAlt color="#F1502F" /> Git / Control de versiones</li>
            <li><MdApi color="#4DB6AC" /> APIs REST</li>
            <li><SiPython color="#FFCA28" /> Pruebas unitarias</li>
            <li><FaReact color="#90CAF9" /> Optimización y rendimiento</li>
            <li><TbLanguage color="#64B5F6" /> Inglés nivel B1</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
