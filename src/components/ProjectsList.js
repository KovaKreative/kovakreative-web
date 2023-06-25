import './Projects.scss';

import projects from './projects/projectsCards';

import Button from './Button';

import { useNavigate } from 'react-router-dom';

export default function ProjectsList() {

  const navigate = useNavigate();

  const projectCards = projects.map((p, i) => {
    return (
      <div className='project-card bordered' key={i}>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <img src={p.screenshot} />
        <Button large={true} onClick={() => navigate(p.url)} label="More..." />
      </div>
    );
  });


  return (
    <section className="ProjectList">
      <h1 className='section-title'>Adventures in Web Development</h1>
      <div className='project-container'>{projectCards}</div>
    </section>
  );
}