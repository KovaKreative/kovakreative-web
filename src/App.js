import './App.scss';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';

function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
    </main>
  );
}

export default App;
