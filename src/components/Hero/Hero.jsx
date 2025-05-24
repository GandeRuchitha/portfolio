// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const name = "Ruchitha Gande".split(""); // For letter-by-letter animation [cite: 1]

  return (
    <section className={styles.hero} id="home">
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 className={styles.name}>
          {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: name.length * 0.05 + 0.5 }}
        >
          {/* CUSTOMIZE YOUR TAGLINE HERE */}
          MS Computer Science Student | Aspiring Software Developer | AI Enthusiast
        </motion.p>
        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: name.length * 0.05 + 1 }}
        >
          <a href="https://www.linkedin.com/in/gande2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* [cite: 1] */}
            <FaLinkedin />
          </a>
          <a href="mailto:ganderuchitha@gmail.com" aria-label="Email"> {/* [cite: 1] */}
            <FaEnvelope />
          </a>
          {/* https://github.com/GandeRuchitha */}
          {/* <a href="YOUR_GITHUB_PROFILE_LINK" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: name.length * 0.05 + 1.2 }}
        >
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className={styles.ctaButton}>
            View My Work
          </ScrollLink>
        </motion.div>
      </motion.div>
      {/* Optional: public/Profile-picture
      <div className={public/Profile-picture}>
        <motion.img
          src="/profile-picture.jpg" // Ensure this image is in your /public folder
          alt="Ruchitha Gande"
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        />
      </div>
      */}
    </section>
  );
};

export default Hero;