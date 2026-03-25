import React, { useState, useEffect, useMemo } from 'react';
import './Projects.css';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  FaCode, FaLaptopCode, FaRocket, FaTools
} from 'react-icons/fa';
import {
  SiReact, SiTailwindcss, SiFirebase, SiChartdotjs, SiJavascript,
  SiGoland, SiNodedotjs, SiExpress, SiHtml5, SiSqlite, SiGit
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const [modalImageIndex, setModalImageIndex] = useState({ projectIndex: null, imageIndex: null });

  const projects = useMemo(() => ([
    {
      title: t('projects.items.0.title'),
      description: t('projects.items.0.description'),
      images: [
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_1.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_2.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_3.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_4.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_5.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_6.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_7.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_8.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_9.png`,
        `${process.env.PUBLIC_URL}/projects/el-buho-sabio/el-buho-sabio_10.png`,
      ],
      techStack: [
        { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
        { name: "Golang", icon: <SiGoland color="#00add8" /> },
        { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
        { name: "React", icon: <SiReact color="#61dafb" /> },
        { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
      ],
    },
    {
      title: t('projects.items.1.title'),
      description: t('projects.items.1.description'),
      images: [
        `${process.env.PUBLIC_URL}/projects/nex-board/nex-board-1.png`,
        `${process.env.PUBLIC_URL}/projects/nex-board/nex-board-2.png`,
        `${process.env.PUBLIC_URL}/projects/nex-board/nex-board-3.png`,
        `${process.env.PUBLIC_URL}/projects/nex-board/nex-board-4.png`,
        `${process.env.PUBLIC_URL}/projects/nex-board/nex-board-5.png`,
      ],
      techStack: [
        { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
        { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#3c873a" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
        { name: "Golang", icon: <SiGoland color="#00add8" /> },
        { name: "SQLite", icon: <SiSqlite color="#003b57" /> },
        { name: "Chart.js", icon: <SiChartdotjs color="#ff6384" /> },
        { name: "Git", icon: <SiGit color="#f1502f" /> },
      ],
    },
  ]), [t]);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalImageIndex.projectIndex === null) return;

      const images = projects[modalImageIndex.projectIndex].images;
      if (e.key === 'Escape') setModalImageIndex({ projectIndex: null, imageIndex: null });
      if (e.key === 'ArrowRight') {
        setModalImageIndex(prev => ({
          ...prev,
          imageIndex: (prev.imageIndex + 1) % images.length,
        }));
      }
      if (e.key === 'ArrowLeft') {
        setModalImageIndex(prev => ({
          ...prev,
          imageIndex: (prev.imageIndex - 1 + images.length) % images.length,
        }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImageIndex, projects]);

  const renderModal = () => {
    const { projectIndex, imageIndex } = modalImageIndex;
    const image =
      projectIndex !== null && imageIndex !== null
        ? projects[projectIndex].images[imageIndex]
        : null;

    const total = projectIndex !== null ? projects[projectIndex].images.length : 0;

    const goNext = () => setModalImageIndex(prev => ({
      ...prev,
      imageIndex: (prev.imageIndex + 1) % total,
    }));

    const goPrev = () => setModalImageIndex(prev => ({
      ...prev,
      imageIndex: (prev.imageIndex - 1 + total) % total,
    }));

    return (
      <AnimatePresence>
        {image && (
          <motion.div
            className="modal-overlay"
            onClick={() => setModalImageIndex({ projectIndex: null, imageIndex: null })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={image}
              alt="Preview"
              className="modal-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="modal-controls">
              <button onClick={(e) => { e.stopPropagation(); goPrev(); }}>&larr;</button>
              <button onClick={(e) => { e.stopPropagation(); goNext(); }}>&rarr;</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section className="projects-section">
        <h2>{t('projects.title')}</h2>
        {['one', 'two', 'three', 'four'].map((key, i) => (
        <p className="projects-summary" key={i}>
          {t(`projects.summary.${key}`)}
          {i === 0 && <FaCode style={{ marginLeft: '8px', color: '#c3e88d' }} />}
          {i === 1 && <FaLaptopCode style={{ marginLeft: '8px', color: '#82aaff' }} />}
          {i === 2 && <FaRocket style={{ marginLeft: '8px', color: '#ffcb6b' }} />}
          {i === 3 && <FaTools style={{ marginLeft: '8px', color: '#61dafb' }} />}
        </p>
      ))}


        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p className="project-description">
              {project.description.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line.trim()}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <Carousel
              responsive={responsive}
              infinite={false}
              partialVisible={true}
              containerClass="carousel-container"
              itemClass="carousel-item"
              arrows
            >
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i}`}
                  className="carousel-image"
                  onClick={() => setModalImageIndex({ projectIndex: index, imageIndex: i })}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </Carousel>
            <motion.div
              className="tech-stack"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="tech-stack-title">{t('projects.techStack')}</h4>
              <ul className="tech-list">
                {project.techStack.map((tech, idx) => (
                  <li key={idx} className="tech-item">
                    {tech.icon}<span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </section>
      {renderModal()}
    </motion.section>
  );
}

export default Projects;
