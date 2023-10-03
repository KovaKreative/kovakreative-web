import './Skills.scss';

export default function Skills() {

  return (
    <section className="Skills">
      <h1 className='section-title'>What I Can Do</h1>
      <div className='skill-section'>
        <ul>
          <h3 className='sm'>Languages</h3>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>PHP</li>
          <li>Ruby</li>
          <li>Python</li>
          <li>Sass</li>
        </ul>
        <ul>
          <h3 className='sm'>Libraries/Frameworks</h3>
          <li>Node</li>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
          <li>jQuery</li>
          <li>AJAX</li>
          <li>Express</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Rails</li>
          <li>WebSockets</li>
        </ul>
        <ul>
          <h3 className='sm'>Other</h3>
          <li>MySQL</li>
          <li>PostreSQL</li>
          <li>MongoDB</li>
          <li>Prisma</li>
          <li>Active Record</li>
          <li>Git</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>Storybook</li>
        </ul>
      </div>
    </section>
  );
}