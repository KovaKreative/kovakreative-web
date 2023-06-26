import '../Project.scss';

import ProjectContent from '../Content';
import Button from '../../Button';

import { useNavigate } from 'react-router-dom';

import { projectContent } from './goalContent';


export default function Goal() {
  const navigate = useNavigate();
  return (
    <main className='Goal project'>
      <h1>GOAL</h1>
      <ProjectContent projectContent={projectContent} />
      <footer>
        <Button label='Home' large={true} onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }}/>
      </footer>
    </main>
  );
}