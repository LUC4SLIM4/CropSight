import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>CropSight - Soluções Digitais Personalizadas</title>
        <meta name="description" content="Desenvolvemos soluções digitais personalizadas, como sites, sistemas web e plataformas sob demanda para empresas." />
        <meta name="keywords" content="desenvolvimento web, sites, sistemas, plataformas digitais" />
      </Helmet>
      
      <Header />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;