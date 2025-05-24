import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.about} id="about">
      {/* top wave, filled with your primary (hero) color */}
      <svg className={styles.waveTop} viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L0,0Z"
          fill="var(--primary-color)"
        />
      </svg>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* faint blue blob for depth */}
      <div className={styles.blob} />

      <motion.div
        className={styles.aboutContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <motion.div variants={item} className={styles.textBlock}>
          <p>
            I earned my Master of Science in Computer Science from Cal Poly Pomona in May 2025, graduating
            summa cum laude with a 4.0 GPA. At Accenture, I engineered Python-based RESTful services that
            improved response times by 20% and boosted operational efficiency by 35%.
          </p>
          <p>
            I’ve built end-to-end solutions across ML, mobile, and web platforms—from a fake-news
            detection model (15% accuracy gain) to AI mock-interview apps, React club websites, and
            Android health apps backed by Firebase. My sweet spot is full-stack development, cloud
            architectures, and data-driven insights.
          </p>
        </motion.div>

        <motion.div variants={item} className={styles.highlightCard}>
          <FaUserGraduate size={30} className={styles.icon} />
          <h3>Education</h3>
          <p>
            <strong>MS, Computer Science:</strong> Cal Poly Pomona (May 2025, 4.0 GPA)
          </p>
          <p>
            <strong>BSc, Information Technology:</strong> Kakatiya Institute of Technology &amp; Science (May 2022, 8.72 CGPA)
          </p>
        </motion.div>

        <motion.div variants={item} className={styles.highlightCard}>
          <FaLightbulb size={30} className={styles.icon} />
          <h3>Leadership & Community</h3>
          <p>Member—Google Developer Student Club, Cal Poly Pomona</p>
          <p>Career Fair Chair—Women in Tech</p>
          <p>Volunteer Mentor—CPP she Codes FWD Conference</p>
        </motion.div>
      </motion.div>

      {/* bottom wave, fading back to white */}
      <svg className={styles.waveBottom} viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L0,0Z"
          fill="var(--background-color)"
        />
      </svg>
    </section>
  );
};

export default About;
