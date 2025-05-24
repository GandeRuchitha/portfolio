// src/components/Experience/ExperienceItem.jsx
import React from 'react';
import styles from './Experience.module.css'; // Will use the same CSS module
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const ExperienceItem = ({ experience }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      className={styles.timelineItem}
      variants={itemVariants}
      // initial="hidden" // Handled by parent's whileInView and stagger
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.timelineIcon}><FaBuilding /></div>
      <div className={styles.timelineContent}>
        <h3>{experience.role}</h3>
        <p className={styles.company}>{experience.company}</p>
        <span className={styles.duration}>{experience.duration}</span>
        <ul>
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;