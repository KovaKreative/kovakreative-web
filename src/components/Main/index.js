import './Main.scss';

import { aboutContent } from './about';
import Games from '../Games';

const aboutElements = aboutContent.map((para, i) => {
  return <p key={`aboutParagraph${i}`}>{para}</p>;
});

export default function Main() {
  return (
    <section className='Main'>
      <header className='section-title'>
        <h1 className='Title'>
          <span className='md'>Hi, my name is </span><span className='highlight'>Eric Kovalevskyy</span>
        </h1>
        <div className='spread'>
          <span>Full Stack Web Developer</span>
          <span>Game Developer</span>
          <span>Artist</span>
          <span>Pop-Culture Nerd</span>
        </div>
      </header>
      <section className='About about-body'>
        {aboutElements}
      </section>
      <Games />
    </section>
  );
}