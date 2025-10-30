import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className='mx-auto max-w-lg overflow-hidden shadow-md bg-gray-900 text-white md:max-w-7xl'>
        <Navbar />
        <Home />
        <Projects />
        <Technologies />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
