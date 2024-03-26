export default function List(props) {

  const list = props.listItems;

  const listItems = list.map((s, i) => <li key={i}>{s}</li>);

  return (
    <section className="List">
      <ul>
        {listItems}
      </ul>
    </section>
  );
}