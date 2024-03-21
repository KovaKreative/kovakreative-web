import './About.scss';

import { aboutContent } from './about';

export default function About() {

  const aboutElements = aboutContent.map((para, i) => {
    return <p key={`aboutParagraph${i}`}>{para}</p>;
  });

  return (
    <section className='About about-body'>
      <h1 className='section-title'>About Eric Kovalevskyy</h1>
      {aboutElements}
    </section>
  );
}