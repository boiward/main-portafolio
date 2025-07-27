import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaLaptopCode,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaCodeBranch
} from 'react-icons/fa';

function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section id="about">
        <h2>{t('about.title')}</h2>
        <p className="about-summary">
          {t('about.summary')} <FaLaptopCode className="icon" color="#4fc3f7" />
          <br /><br />
          {t('about.technologies')} <FaCogs className="icon" color="#ffb74d" />
          <br /><br />
          {t('about.motivation')} <FaLightbulb className="icon" color="#fdd835" />
          <FaCodeBranch className="icon" color="#81c784" />
          <br /><br />
          {t('about.values')} <FaUsers className="icon" color="#64b5f6" />
          <br />
          {t('about.english')} <FaGlobe className="icon" color="#90caf9" />
        </p>
      </section>
    </motion.section>
  );
}

export default About;
