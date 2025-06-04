import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt, FaServer, FaChartLine, FaRocket } from 'react-icons/fa';
import styles from './Home.module.css';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>CropSight - Soluções Digitais Personalizadas</title>
        <meta name="description" content="Desenvolvemos soluções digitais personalizadas, como sites, sistemas web e plataformas sob demanda para empresas." />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroTitle}
          >
            Transformamos ideias em <span>soluções digitais</span> de impacto
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Desenvolvemos sites, sistemas web e plataformas personalizadas que impulsionam o crescimento do seu negócio.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={styles.heroCta}
          >
            <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            <Link to="/projetos" className="btn btn-outline">Ver Projetos</Link>
          </motion.div>
        </div>
        
        <div className={styles.heroImage}>
          <motion.img 
            src="https://tryeasel.dev/placeholder.svg?width=600&height=400" 
            alt="CropSight - Soluções Digitais"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <motion.h2 
            className="section-title"
            {...fadeIn}
          >
            Nossos Serviços
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Oferecemos soluções digitais completas para atender às necessidades específicas do seu negócio
          </motion.p>
          
          <motion.div 
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.serviceIcon}>
                <FaDesktop />
              </div>
              <h3>Sites Institucionais</h3>
              <p>Criamos sites profissionais que representam a identidade da sua empresa e atraem novos clientes.</p>
            </motion.div>
            
            <motion.div 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.serviceIcon}>
                <FaCode />
              </div>
              <h3>Sistemas Web</h3>
              <p>Desenvolvemos sistemas personalizados que automatizam processos e aumentam a eficiência do seu negócio.</p>
            </motion.div>
            
            <motion.div 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.serviceIcon}>
                <FaMobileAlt />
              </div>
              <h3>Aplicações Responsivas</h3>
              <p>Criamos interfaces que se adaptam perfeitamente a qualquer dispositivo, do desktop ao smartphone.</p>
            </motion.div>
            
            <motion.div 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.serviceIcon}>
                <FaServer />
              </div>
              <h3>Plataformas Sob Demanda</h3>
              <p>Desenvolvemos plataformas customizadas que atendem às necessidades específicas do seu negócio.</p>
            </motion.div>
            
            <motion.div 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.serviceIcon}>
                <FaChartLine />
              </div>
              <h3>Otimização de Performance</h3>
              <p>Melhoramos a velocidade e desempenho de sites e aplicações existentes para uma melhor experiência.</p>
            </motion.div>
            
            <motion.div 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.serviceIcon}>
                <FaRocket />
              </div>
              <h3>Consultoria Digital</h3>
              <p>Oferecemos consultoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Pronto para transformar sua ideia em realidade?</h2>
            <p>Entre em contato conosco e vamos conversar sobre como podemos ajudar seu negócio a crescer no ambiente digital.</p>
            <Link to="/contato" className="btn btn-primary">Fale Conosco</Link>
          </motion.div>
        </div>
      </section>

      <section className={styles.featuredProjects}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projetos em Destaque
          </motion.h2>
          
          <motion.div 
            className={styles.projectsGrid}
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div 
              className={styles.projectCard}
              variants={fadeIn}
            >
              <div className={styles.projectImage}>
                <img src="https://tryeasel.dev/placeholder.svg?width=400&height=300" alt="Projeto E-commerce" />
              </div>
              <div className={styles.projectInfo}>
                <h3>E-commerce Premium</h3>
                <p>Plataforma completa de vendas online com integração de pagamentos e gestão de estoque.</p>
                <Link to="/projetos" className={styles.projectLink}>Ver Detalhes</Link>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.projectCard}
              variants={fadeIn}
            >
              <div className={styles.projectImage}>
                <img src="https://tryeasel.dev/placeholder.svg?width=400&height=300" alt="Sistema de Gestão" />
              </div>
              <div className={styles.projectInfo}>
                <h3>Sistema de Gestão</h3>
                <p>Sistema completo para gerenciamento de processos internos e fluxo de trabalho.</p>
                <Link to="/projetos" className={styles.projectLink}>Ver Detalhes</Link>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.projectCard}
              variants={fadeIn}
            >
              <div className={styles.projectImage}>
                <img src="https://tryeasel.dev/placeholder.svg?width=400&height=300" alt="Aplicação Web" />
              </div>
              <div className={styles.projectInfo}>
                <h3>Aplicação Web Responsiva</h3>
                <p>Aplicação web com design responsivo e experiência de usuário otimizada.</p>
                <Link to="/projetos" className={styles.projectLink}>Ver Detalhes</Link>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.viewAllProjects}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/projetos" className="btn btn-outline">Ver Todos os Projetos</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;