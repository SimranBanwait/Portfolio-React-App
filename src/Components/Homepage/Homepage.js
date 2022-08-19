import React from 'react';
import './Homepage.css';
import Hero from './Hero.js';
import Skills from './Skills';
import Vision from './Vision.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';


const Homepage = () => {
  return (
      <>

        {/* hero and main and first section of page */}
        <main >
          <Hero />
        </main>
        <Vision />  
        <Skills />
        <About />
        <Contact/>

    </>
  )
}

export default Homepage;