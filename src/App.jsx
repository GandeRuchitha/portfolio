import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import './App.css';

function App() {
  return (
    <>

      <ParticleBackground />

      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="sectionWrapper">
          <About />
        </section>
        <section id="experience" className="sectionWrapper">
          <Experience />
        </section>
        <section id="skills" className="sectionWrapper">
          <Skills />
        </section>
        <section id="projects" className="sectionWrapper">
          <Projects />
        </section>
        <section id="contact" className="sectionWrapper">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
