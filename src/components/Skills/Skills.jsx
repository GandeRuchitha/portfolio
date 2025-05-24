// src/components/Skills/Skills.jsx
import React from 'react';
import SkillBar from './SkillBar';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

// Font-Awesome icons (including a generic terminal for PowerShell)
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaTerminal,
} from 'react-icons/fa';

// Simple Icons (all from the single entrypoint)
import {
  SiCplusplus,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiXml,
  SiJira,
} from 'react-icons/si';

const skillsData = {
  programming: [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "XML", icon: <SiXml /> },
  ],
  frameworksLibraries: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Express.js", icon: <SiExpress /> },
  ],
  databases: [
    { name: "MS SQL", icon: <FaDatabase /> },
    { name: "Microsoft SQL Server", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  toolsTechnologies: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "PowerShell", icon: <FaTerminal /> }, {/* fallback */}
  ],
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <section className={styles.skills} id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {Object.entries(skillsData).map(([category, skillList]) => (
          <motion.div key={category} className={styles.skillCategory}>
            <h3>
              {category
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())}
            </h3>
            {skillList.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
