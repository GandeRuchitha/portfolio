// src/components/Skills/SkillBar.jsx
import React from 'react';
import styles from './Skills.module.css'; // same module as before
import { motion } from 'framer-motion';

const SkillBar = ({ name, icon /*, level */ }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className={styles.skillBarContainer}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className={styles.skillInfo}>
        {icon && <span className={styles.skillIcon}>{icon}</span>}
        <span className={styles.skillName}>{name}</span>
        {/* percentage label removed */}
      </div>

      {/* If you still want the colored bar below, just uncomment and pass `level` in your Skills.jsx: */}
      {/*
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progress}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true, amount: 0.8 }}
        />
      </div>
      */}
    </motion.div>
  );
};

export default SkillBar;
