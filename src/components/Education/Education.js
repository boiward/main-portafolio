import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';
import { FaTools, FaUniversity } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();

  const educationData = t('education.entries', { returnObjects: true });

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>{t('education.title')}</h2>
      <p className="education-summary">
        {t('education.summary.tech')}
        <FaTools className="icon" color="#4fc3f7" />
        <br /><br />
        {t('education.summary.university')}
        <FaUniversity className="icon" color="#c792ea" />
        <br /><br />
        {t('education.summary.combined')}
        <HiAcademicCap className="icon" color="#ffcb6b" />
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
    </motion.section>
  );
}

export default Education;
