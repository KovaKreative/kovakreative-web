import iconLinked from '../assets/icon-linkedin.png';
import iconGit from '../assets/icon-github.png';
import iconResume from '../assets/icon-resume.png';

export default function Social() {

  const socialInfo = [
    {
      icon: iconLinked,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eric-kovalevskyy'
    },
    {
      icon: iconGit,
      label: 'GitHub',
      url: 'https://github.com/KovaKreative'
    },
    {
      icon: iconResume,
      label: 'Resume',
      url: 'https://resume.creddle.io/resume/bpkmttr922'
    },
  ];

  return (
    <section>
      <ul className='Social'>
        {
          socialInfo.map((s, i) => {
            return <li className='social-item'><a href={`${s.url}`} target='_blank' rel='noreferrer'><img className='social-icon' src={s.icon} alt={`${s.label} Icon`} />&nbsp;{s.label}</a></li>;
          })
        }
      </ul>
    </section>
  );
}