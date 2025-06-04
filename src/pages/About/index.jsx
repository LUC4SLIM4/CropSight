import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaLightbulb, FaEye, FaHandshake } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'CEO & Fundadora',
      image: 'https://tryeasel.dev/placeholder.svg?width=300&height=300',
      description: 'Especialista em estratégia digital com mais de 10 anos de experiência no mercado.'
    },
    {
      name: 'Carlos Mendes',
      role: 'CTO',
      image: 'https://tryeasel.dev/placeholder.svg?width=300&height=300',
      description: 'Desenvolvedor full-stack com vasta experiência em arquitetura de sistemas.'
    },
    {
      name: 'Juliana Costa',
      role: 'Diretora de Design',
      image: 'https://tryeasel.dev/placeholder.svg?width=300&height=300',
      description: 'Designer UX/UI apaixonada por criar experiências digitais intuitivas e atraentes.'
    },
    {
      name: 'Rafael Oliveira',
      role: 'Desenvolvedor Front-end',
      image: 'https://tryeasel.dev/placeholder.svg?width=300&height=300',
      description: 'Especialista em React e tecnologias modernas de front-end.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quem Somos | CropSight</title>
        <meta name="description" content="Conheça a CropSight, nossa história, missão, visão e valores. Saiba quem está por trás das soluções digitais que desenvolvemos." />
      </Helmet>

      <section className={styles.aboutHero}>
        <div className="container">
          <motion.h1 
            className={styles.aboutTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Quem Somos
          </motion.h1>
          
          <motion.p 
            className={styles.aboutSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Conheça a história, missão e valores que impulsionam a CropSight
          </motion.p>
        </div>
      </section>

      <section className={styles.aboutContent}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <motion.div 
              className={styles.aboutText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Nossa História</h2>
              <p>
                A CropSight nasceu em 2018 com uma missão clara: transformar ideias em soluções digitais de impacto. Fundada por um grupo de profissionais apaixonados por tecnologia e inovação, nossa empresa rapidamente se destacou no mercado pela qualidade e eficiência de seus projetos.
              </p>
              <p>
                Ao longo dos anos, expandimos nossa equipe e aprimoramos nossas habilidades, sempre mantendo o compromisso com a excelência e a satisfação dos nossos clientes. Hoje, somos reconhecidos como uma referência em desenvolvimento de soluções digitais personalizadas.
              </p>
              <p>
                Nossa jornada é marcada por desafios superados, projetos bem-sucedidos e parcerias duradouras. Continuamos evoluindo e inovando, sempre com o objetivo de oferecer as melhores soluções para nossos clientes.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.aboutImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img src="https://tryeasel.dev/placeholder.svg?width=500&height=400" alt="Equipe CropSight" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.missionVisionValues}>
        <div className="container">
          <motion.h2 
            className="section-title"
            {...fadeIn}
          >
            Missão, Visão e Valores
          </motion.h2>
          
          <div className={styles.mvvGrid}>
            <motion.div 
              className={styles.mvvCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.mvvIcon}>
                <FaLightbulb />
              </div>
              <h3>Missão</h3>
              <p>Desenvolver soluções digitais inovadoras que transformem ideias em resultados concretos, impulsionando o crescimento e sucesso dos nossos clientes.</p>
            </motion.div>
            
            <motion.div 
              className={styles.mvvCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.mvvIcon}>
                <FaEye />
              </div>
              <h3>Visão</h3>
              <p>Ser reconhecida como referência em desenvolvimento de soluções digitais, destacando-se pela inovação, qualidade e capacidade de transformar desafios em oportunidades.</p>
            </motion.div>
            
            <motion.div 
              className={styles.mvvCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={styles.mvvIcon}>
                <FaHandshake />
              </div>
              <h3>Valores</h3>
              <ul>
                <li>Inovação constante</li>
                <li>Excelência técnica</li>
                <li>Compromisso com resultados</li>
                <li>Transparência e ética</li>
                <li>Foco no cliente</li>
                <li>Trabalho em equipe</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossa Equipe
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conheça os profissionais talentosos que fazem a CropSight acontecer
          </motion.p>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.teamImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamDescription}>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;