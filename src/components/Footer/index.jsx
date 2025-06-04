import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <Link to="/" className={styles.footerLogo}>
              <img src={logo} alt="CropSight Logo" />
            </Link>
            <p className={styles.footerDescription}>
              Desenvolvemos soluções digitais personalizadas, como sites, sistemas web e plataformas sob demanda para empresas.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/cropsight" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/cropsight" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/cropsight" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3>Navegação</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quem-somos">Quem Somos</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>Contato</h3>
              <ul>
                <li>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:contato@cropsight.com">contato@cropsight.com</a>
                </li>
                <li>
                  <FaPhone className={styles.contactIcon} />
                  <a href="tel:+5511999999999">(11) 99999-9999</a>
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} CropSight. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;