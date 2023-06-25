export default function TechStack(props) {

  const techStack = props.techStack;

  const techStackItems = techStack.map((s, i) => <li key={i}>{s}</li>);

  return (
    <section className="tech-stack">
      <ul>
        {techStackItems}
      </ul>
    </section>
  );
}