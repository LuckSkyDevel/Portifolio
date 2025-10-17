import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Set a default duration for animations
      once: true, // Optional: Animations only happen once
    });
    AOS.refresh(); // Optional: Recalculate positions of elements
  }, []);

  return (
    <div className="App">
      <Home />
      <Projects />
      <Technologies />
      <About />
      <Contact />
    </div>
  );
}

export default App;
