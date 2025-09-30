import './App.css';
import About from './components/About';
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
    </div>
  );
}

export default App;
