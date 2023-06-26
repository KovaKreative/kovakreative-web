import './App.scss';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Games from './components/Games';

function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
      <Games />
    </main>
  );
}

export default App;
