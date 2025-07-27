import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import { FaUniversity, FaTools } from 'react-icons/fa';
import { SiBackendless, SiFrontendmentor } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  const experienceData = t('experience.entries', { returnObjects: true });

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section id="experience">
        <h2>{t('experience.title')}</h2>
        <p className="experience-summary">
          {t('experience.summary.academic')}
          <FaUniversity className="icon" color="#4fc3f7" />
          <br /><br />
          {t('experience.summary.backend')}
          <SiBackendless className="icon" color="#c792ea" />
          <br />
          {t('experience.summary.frontend')}
          <SiFrontendmentor className="icon" color="#f78c6c" />
          <br /><br />
          {t('experience.summary.skills')}
          <FaTools className="icon" color="#ffcb6b" />
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
