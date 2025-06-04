import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="CropSight Logo" />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/quem-somos" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projetos" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;