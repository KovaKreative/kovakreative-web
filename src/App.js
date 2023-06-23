import './App.scss';

import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
    </div>
  );
}

export default App;
