// src/components/Projects/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';

// CUSTOMIZE YOUR PROJECT DETAILS HERE
const projectData = [
  {
    title: "Fake News Detection using Machine Learning",
    description: "Applied machine learning algorithms (Passive Aggression, Decision Tree, Random Forest, Gradient Boosting) to detect fake news with optimized preprocessing, improving model accuracy by 15%. Classified news articles into fake or real categories, showcasing expertise in supervised learning.", // [cite: 12, 13]
    imageUrl: "/portfolio/project-fake-news.png", // In /public folder. Create this image.
    tags: ["Machine Learning", "Python", "NLP", "Scikit-learn"],
    
  },
  {
    title: "Smooth Interview - AI-Powered Interview Assistant",
    description: "Developed a mobile application using Dart and Flutter integrated with Google's Gemini AI to conduct AI-driven mock interviews. The app dynamically generates personalized interview questions tailored specifically to users' resumes and target job descriptions, providing detailed, actionable feedback.", // [cite: 14, 15]
    imageUrl: "/portfolio/project-smooth-interview.png", // In /public folder. Create this image.
    tags: ["Mobile App", "Dart", "Flutter", "Gemini AI", "Firebase"],
   
  },
  {
    title: "Women in Tech (WIT) Club Website",
    description: "Designed and built a responsive website using HTML, CSS, and Node.js, Express.js supported by MongoDB for data storage. Created user-friendly interfaces using Figma and implemented dynamic functionality to support club activities.", // [cite: 16, 17]
    imageUrl: "/portfolio/project-wit-website.png", // In /public folder. Create this image.
    tags: ["Web Dev", "Node.js", "Express.js", "MongoDB", "Figma", "HTML", "CSS"],
    
  },
  {
    title: "Med Vista - Android App (Java)",
    description: "Developed a Java-based Android app leveraging Firebase Realtime Database to manage over 500 medical records with sub-100 ms retrieval. Integrated a medical-news REST API delivering 20+ weekly articles and built MPAndroidChart visualizations for calorie and sleep tracking, which boosted feature engagement by 30%.", // [cite: 18, 19]
    imageUrl: "/portfolio/project-med-vista.png", // In /public folder. Create this image.
    tags: ["Android", "Java", "Firebase", "REST API", "MPAndroidChart"],
   
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  return (
    <section className={styles.projects} id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className={styles.projectGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }} // Trigger when a bit of the grid is visible
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;