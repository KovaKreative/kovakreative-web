import iconLinked from '../../assets/icon-linkedin.png';
import iconGit from '../../assets/icon-github.png';
import iconResume from '../../assets/icon-resume.png';

export default function Social() {
  return (
    <ul className='Social bordered'>
      <li className='social-item'><a href='https://www.linkedin.com/in/eric-kovalevskyy' target='_blank' rel='noreferrer'><img className='social-icon' src={iconLinked} alt='LinkedIn' /> LinkedIn</a></li>
      <li className='social-item'><a href='https://github.com/KovaKreative' target='_blank' rel='noreferrer'><img className='social-icon' src={iconGit} alt='GitHub' /> GitHub</a></li>
      <li className='social-item'><a href='https://resume.creddle.io/resume/bpkmttr922' target='_blank' rel='noreferrer'><img className='social-icon' src={iconResume} alt='Creddle' /> Resume</a></li>
    </ul>
  );
}