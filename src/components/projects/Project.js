import './Project.scss';

import ProjectContent from './Content';
import Button from '../Button';

import { useNavigate } from 'react-router-dom';

export default function Goal(props) {
  const navigate = useNavigate();
  return (
    <main className='project'>
      <h1>{props.title}</h1>
      <ProjectContent projectContent={props.content} />
      <footer>
        <Button label='Home' large={true} onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }}/>
      </footer>
    </main>
  );
}