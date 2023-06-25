import './About.scss';

import { aboutContent } from './about';

export default function About() {
  return (
    <section className='About bordered'>
      <div className='about-body'>
        {aboutContent}
      </div>
    </section>
  )
}