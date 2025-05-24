// src/components/Projects/ProjectCard.jsx
import React from 'react';
import styles from './Projects.module.css'; // Will use the same CSS module
import { motion } from 'framer-motion';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      // initial="hidden" // Handled by parent's whileInView and stagger
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }} // Viewport handled by parent
      whileHover={{ y: -8, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className={styles.imageContainer}>
        <img
          src={project.imageUrl || "https://via.placeholder.com/400x250?text=Project+Image"} // Fallback image
          alt={project.title}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className={styles.cardTags}>
            {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        )}
        <div className={styles.cardLinks}>
          {project.liveLink && project.liveLink !== "#" && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLink /> Live Demo
            </motion.a>
          )}
          {project.repoLink && project.repoLink !== "#" && (
            <motion.a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${styles.repoButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;