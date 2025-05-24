// src/components/Experience/Experience.jsx
import React from 'react';
import ExperienceItem from './ExperienceItem';
import styles from './Experience.module.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Account Specialist - SQL",
    company: "California State Polytechnic University, Pomona, CA",
    duration: "Oct 2023 - May 2025", // Resume says May 2025, implying current. Clarify start date. [cite: 4]
    description: [
      "Managed financial transactions and maintained accurate records using SQL for data analysis and reconciliation.", // [cite: 4]
      "Processed accounts payable and receivable, ensuring compliance with financial policies and procedures.", // [cite: 5]
      "Assisted in budgeting and financial reporting, providing insights that improved operational efficiency by 15%.", // [cite: 6]
      "Collaborated with cross-functional teams to resolve discrepancies and maintain system integrity." // [cite: 7]
    ]
  },
  {
    role: "Application Development Associate - Python, Restful API",
    company: "Accenture, Hyderabad, India",
    duration: "Sep 2022 - Jul 2023", // Resume states Jul 2023 as end. Clarify start date. [cite: 8]
    description: [
      "Developed and optimized Python-based backend applications for Henkel within an Agile environment, achieving a 20% improvement in response times and a 35% increase in operational efficiency.", // [cite: 8]
      "Automated incident management processes using ServiceNow, significantly enhancing issue tracking, accelerating resolution times, and improving overall system reliability.", // [cite: 9]
      "Collaborated effectively with cross-functional teams to analyze application risks, maintain system stability, and update comprehensive technical support documentation.", // [cite: 10]
      "Actively participated in post-release testing, deployment, and remediation activities, ensuring seamless and reliable application performance." // [cite: 11]
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  return (
    <section className={styles.experience} id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;