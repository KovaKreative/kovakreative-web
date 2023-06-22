import iconLinked from '../../assets/icon-linkedin.png';
import iconGit from '../../assets/icon-github.png';
import iconResume from '../../assets/icon-resume.png';

export default function Social() {
  return (
    <ul className='Social bordered'>
      <li className='social-item'><a href='#'><img className='social-icon' src={iconLinked} alt='LinkedIn' /> LinkedIn</a></li>
      <li className='social-item'><a href='#'><img className='social-icon' src={iconGit} alt='GitHub' /> GitHub</a></li>
      <li className='social-item'><a href='#'><img className='social-icon' src={iconResume} alt='Creddle' /> Resume</a></li>
    </ul>
  );
}