// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: {duration: 0.5} }
  };

  return (
    <section className={styles.contact} id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className={styles.contactContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={itemVariants} className={styles.invitation}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          Feel free to reach out!
        </motion.p>
        <motion.div variants={itemVariants} className={styles.contactDetails}>
          <motion.a
            href="mailto:ganderuchitha@gmail.com" //
            className={styles.contactItem}
            whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color-xlight)" }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaEnvelope className={styles.icon} />
            <span>ganderuchitha@gmail.com</span> {/* */}
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gande2" // [cite: 1]
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
            whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color-xlight)" }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin className={styles.icon} />
            <span>linkedin.com/in/gande2</span> {/* [cite: 1] */}
          </motion.a>
          <motion.div className={styles.contactItem} variants={itemVariants} /* No hover animation for static text */ >
            <FaMapMarkerAlt className={styles.icon} />
            <span>Plant City, FL (Open to relocation)</span> {/* */}
          </motion.div>
        </motion.div>

        {/* Optional Formspree Contact Form */}
        <motion.form
          variants={itemVariants}
          className={styles.contactForm}
          action="https://formspree.io/f/xqaqorez" // Replace YOUR_UNIQUE_FORM_ID
          method="POST"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ borderColor: "var(--accent-color)", boxShadow: "0 0 0 2px var(--accent-color-translucent)"}}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            whileFocus={{ borderColor: "var(--accent-color)", boxShadow: "0 0 0 2px var(--accent-color-translucent)"}}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            whileFocus={{ borderColor: "var(--accent-color)", boxShadow: "0 0 0 2px var(--accent-color-translucent)"}}
          ></motion.textarea>
          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;