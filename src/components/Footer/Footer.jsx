// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Added FaGithub
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <motion.a whileHover={{ y: -3, scale:1.1}} href="https://www.linkedin.com/in/gande2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* [cite: 1] */}
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ y: -3, scale:1.1}} href="mailto:ganderuchitha@gmail.com" aria-label="Email"> {/* */}
            <FaEnvelope />
          </motion.a>
          {/* Add GitHub if available - REMEMBER TO ADD YOUR LINK */}
          {/*
          <motion.a whileHover={{ y: -3, scale:1.1}} href="https://github.com/GandeRuchitha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </motion.a>
          */}
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Ruchitha Gande. All rights reserved.
        </p>
        <p className={styles.madeWith}>
          Designed & Built by Ruchitha Gande with React & ❤️
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;