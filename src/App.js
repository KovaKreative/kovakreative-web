import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
}

export default App;
