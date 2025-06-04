import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Premium',
      category: 'e-commerce',
      description: 'Plataforma completa de vendas online com integração de pagamentos e gestão de estoque.',
      desktopImage: 'https://tryeasel.dev/placeholder.svg?width=600&height=400',
      mobileImage: 'https://tryeasel.dev/placeholder.svg?width=300&height=600',
      link: 'https://example.com/ecommerce'
    },
    {
      id: 2,
      title: 'Sistema de Gestão Empresarial',
      category: 'sistema',
      description: 'Sistema completo para gerenciamento de processos internos e fluxo de trabalho.',
      desktopImage: 'https://tryeasel.dev/placeholder.svg?width=600&height=400',
      mobileImage: 'https://tryeasel.dev/placeholder.svg?width=300&height=600',
      link: 'https://example.com/sistema'
    },
    {
      id: 3,
      title: 'Site Institucional Moderno',
      category: 'site',
      description: 'Site institucional com design moderno e responsivo para empresa de arquitetura.',
      desktopImage: 'https://tryeasel.dev/placeholder.svg?width=600&height=400',
      mobileImage: 'https://tryeasel.dev/placeholder.svg?width=300&height=600',
      link: 'https://example.com/site-institucional'
    },
    {
      id: 4,
      title: 'Aplicativo Web de Agendamentos',
      category: 'aplicativo',
      description: 'Aplicativo web para agendamento de consultas e serviços com painel administrativo.',
      desktopImage: 'https://tryeasel.dev/placeholder.svg?width=600&height=400',
      mobileImage: 'https://tryeasel.dev/placeholder.svg?width=300&height=600',
      link: 'https://example.com/agendamentos'
    },
    {
      id: 5,
      title: 'Plataforma de Cursos Online',
      category: 'plataforma',
      description: 'Plataforma completa para disponibilização de cursos online com área de membros.',
      desktopImage: 'https://tryeasel.dev/placeholder.svg?width=600&height=400',
      mobileImage: 'https://tryeasel.dev/placeholder.svg?width=300&height=600',
      link: 'https://example.com/cursos'
    },
    {
      id: 6,
      title: 'Dashboard Analítico',
      category: 'sistema',
      description: 'Dashboard interativo para visualização de dados e métricas de negócio.',
      desktopImage: 'https://tryeasel.dev/placeholder.svg?width=600&height=400',
      mobileImage: 'https://tryeasel.dev/placeholder.svg?width=300&height=600',
      link: 'https://example.com/dashboard'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
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
        <title>Projetos | CropSight</title>
        <meta name="description" content="Conheça os projetos desenvolvidos pela CropSight. Sites, sistemas web e plataformas personalizadas para diversos segmentos." />
      </Helmet>

      <section className={styles.projectsHero}>
        <div className="container">
          <motion.h1 
            className={styles.projectsTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nossos Projetos
          </motion.h1>
          
          <motion.p 
            className={styles.projectsSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Conheça alguns dos trabalhos que desenvolvemos para nossos clientes
          </motion.p>
        </div>
      </section>

      <section className={styles.projectsContent}>
        <div className="container">
          <motion.div 
            className={styles.projectsFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Todos
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'site' ? styles.active : ''}`}
              onClick={() => setActiveFilter('site')}
            >
              Sites
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'sistema' ? styles.active : ''}`}
              onClick={() => setActiveFilter('sistema')}
            >
              Sistemas
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'e-commerce' ? styles.active : ''}`}
              onClick={() => setActiveFilter('e-commerce')}
            >
              E-commerce
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'aplicativo' ? styles.active : ''}`}
              onClick={() => setActiveFilter('aplicativo')}
            >
              Aplicativos
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'plataforma' ? styles.active : ''}`}
              onClick={() => setActiveFilter('plataforma')}
            >
              Plataformas
            </button>
          </motion.div>
          
          <motion.div 
            className={styles.projectsGrid}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className={styles.projectCard}
                variants={fadeIn}
              >
                <div className={styles.projectImages}>
                  <div className={styles.desktopPreview}>
                    <img src={project.desktopImage} alt={`${project.title} - Desktop`} />
                  </div>
                  <div className={styles.mobilePreview}>
                    <img src={project.mobileImage} alt={`${project.title} - Mobile`} />
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectActions}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;