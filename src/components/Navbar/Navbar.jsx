import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
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
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <ScrollLink
          to="home"
          smooth
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

        <ul
          className={
            mobileMenuOpen
              ? `${styles.navMenu} ${styles.navMenuOpen}`
              : styles.navMenu
          }
        >
          {navLinks.map(linkInfo => (
            <motion.li
              key={linkInfo.id}
              className={styles.navItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <ScrollLink
                to={linkInfo.id}
                spy
                smooth
                offset={-80}
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