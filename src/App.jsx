import './App.scss';

import Main from './components/Main';
import Skills from './components/Skills';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Games from './components/Games';
import { useState } from 'react';

const sections = [
  {
    name: "Eric Kovalevskyy",
    component: Main
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
    </div>
  );
}

export default App;
