// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Renamed to ScrollLink to avoid conflict if using React Router's Link
import { motion } from 'framer-motion'; // Added for animations
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <ScrollLink // Using ScrollLink here for the logo as well for consistency
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className={styles.navLogo}
          onClick={closeMobileMenu}
        >
          Ruchitha G.
        </ScrollLink>
        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          {navLinks.map((linkInfo) => ( // Renamed 'link' to 'linkInfo' to avoid confusion with ScrollLink component
            <motion.li // Wrapped li with motion.li for hover animation
              key={linkInfo.id}
              className={styles.navItem}
              whileHover={{ y: -4 }} // Move up slightly on hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Spring physics for the hover
            >
              <ScrollLink
                to={linkInfo.id}
                spy={true}
                smooth={true}
                offset={-80} // Adjust offset based on your navbar height
                duration={500}
                className={styles.navLink}
                activeClass={styles.activeLink}
                onClick={closeMobileMenu}
              >
                {linkInfo.title}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;