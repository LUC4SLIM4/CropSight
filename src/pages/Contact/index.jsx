import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Contato | CropSight</title>
        <meta name="description" content="Entre em contato com a CropSight. Estamos prontos para ajudar a transformar suas ideias em soluções digitais de impacto." />
      </Helmet>

      <section className={styles.contactHero}>
        <div className="container">
          <motion.h1 
            className={styles.contactTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Entre em Contato
          </motion.h1>
          
          <motion.p 
            className={styles.contactSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Estamos prontos para ajudar a transformar suas ideias em soluções digitais de impacto
          </motion.p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className="container">
          <div className={styles.contactGrid}>
            <motion.div 
              className={styles.contactForm}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Envie uma mensagem</h2>
              <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                
                {formStatus.submitted && (
                  <div className={`${styles.formMessage} ${formStatus.success ? styles.success : styles.error}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </motion.div>
            
            <motion.div 
              className={styles.contactInfo}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Informações de Contato</h2>
              <p>Você também pode entrar em contato diretamente através dos canais abaixo:</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactText}>
                    <h3>E-mail</h3>
                    <a href="mailto:contato@cropsight.com">contato@cropsight.com</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaPhone />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Telefone</h3>
                    <a href="tel:+5511999999999">(11) 99999-9999</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Endereço</h3>
                    <p>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.contactMap}>
                <img src="https://tryeasel.dev/placeholder.svg?width=500&height=300" alt="Mapa de localização" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;