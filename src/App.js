import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
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
