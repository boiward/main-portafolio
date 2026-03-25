import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { FaReact, FaDocker, FaPeopleArrows, FaBrain, FaJava, FaNodeJs, FaGitAlt, FaVial, FaTachometerAlt } from 'react-icons/fa';
import { SiDotnet, SiGo, SiPython, SiJavascript, SiMysql, SiApachespark } from 'react-icons/si';
import { BsLightbulb } from 'react-icons/bs';
import { MdOutlineDesignServices, MdApi } from 'react-icons/md';
import { TbLanguage } from 'react-icons/tb';
import { AiOutlineTeam, AiOutlineComment, AiOutlineBulb } from 'react-icons/ai';

function Skills() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>{t('skills.title')}</h2>
      
      <p className="skills-summary">
        {t('skills.summary.tech')}{' '}
        <FaReact className="icon" color="#61dafb" /> React,{' '}
        <SiGo className="icon" color="#00ADD8" /> Golang,{' '}
        <SiDotnet className="icon" color="#512bd4" /> .NET y{' '}
        <FaDocker className="icon" color="#0db7ed" /> Docker.
        <br /><br />

        {t('skills.summary.practices')}
        <BsLightbulb className="icon" color="#fdd835" />
        <br /><br />

        {t('skills.summary.personal')}
        <FaBrain className="icon" color="#c792ea" />
        <br /><br />

        {t('skills.summary.collaboration')}
        <FaPeopleArrows className="icon" color="#4fc3f7" />
      </p>

      <div className="skills-container">
        <div className="skills-card">
          <h3>{t('skills.categories.tech')}</h3>
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
          <h3>{t('skills.categories.soft')}</h3>
          <ul>
            <li><AiOutlineComment color="#4FC3F7" /> {t('skills.soft.communication')}</li>
            <li><AiOutlineTeam color="#4FC3F7" /> {t('skills.soft.teamwork')}</li>
            <li><AiOutlineBulb color="#FFD54F" /> {t('skills.soft.autonomy')}</li>
            <li><MdOutlineDesignServices color="#9575CD" /> {t('skills.soft.problemSolving')}</li>
            <li><SiApachespark color="#FF7043" /> {t('skills.soft.learning')}</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>{t('skills.categories.other')}</h3>
          <ul>
            <li><MdOutlineDesignServices color="#81C784" /> {t('skills.other.designPatterns')}</li>
            <li><FaGitAlt color="#F1502F" /> {t('skills.other.versionControl')}</li>
            <li><MdApi color="#4DB6AC" /> {t('skills.other.restApis')}</li>
            <li><FaVial color="#FFCA28" /> {t('skills.other.unitTesting')}</li>
            <li><FaTachometerAlt color="#90CAF9" /> {t('skills.other.performance')}</li>
            <li><TbLanguage color="#64B5F6" /> {t('skills.other.english')}</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
