import './Projects.scss';

import projects from './projects/projectsCards';

import Button from './Button';

import { useNavigate } from 'react-router-dom';

export default function ProjectsList() {

  const navigate = useNavigate();

  const projectCards = projects.map((p, i) => {
    return (
      <div className='project-media' key={i}>
        <figure>
          <figcaption>{p.title}</figcaption>
          <img className='image' src={p.screenshot} alt={p.title} />
          <footer>{p.url ? <Button onClick={() => {
            navigate(p.url);
            window.scrollTo(0, 0);
          }} label="Read More" /> : 'Details coming soon...'}</footer>
        </figure>
        <p className='project-card-description'>{p.description}</p>
      </div>
    );
  });

  return (
    <section className="ProjectList">
      <h1 className='section-title' id='projects'>Projects</h1>
      <div className='project-navigator'>
        <div className='project-container'>{projectCards}</div>
      </div>
    </section>
  );
}