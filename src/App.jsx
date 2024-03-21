import './App.scss';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Games from './components/Games';
import Button from './components/Button';
import { useState } from 'react';

const sections = [
  {
    name: "Eric Kovalevskyy",
    component: Hero
  },
  {
    name: "About",
    component: About
  },
  {
    name: "Skills",
    component: Skills
  },
  {
    name: "Projects",
    component: ProjectsList
  },
  {
    name: "Contact",
    component: Contact
  },
];

function App() {

  const [section, setSection] = useState(sections[0]);

  const buttons = sections.map((s, i) => {
    return <button key={`button${i}`} className={`nav-item ${section.name === s.name ? 'selected' : ''}`} onClick={() => switchTab(i)}>{s.name}</button>;
  });

  const switchTab = function(tabIndex) {
    setSection(sections[tabIndex]);
  };

  return (
    <div className="App">
      <main>
        <div className='backdrop'>
          <div className='section-container container bordered'>
            <section.component />
          </div>
        </div>

        <nav>
          <div>
            {buttons}
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
