import Image from "./Image";
import List from "./List";

export default function ProjectContent(props) {

  const content = props.projectContent.map((section, s) => {
    return (
      <div className="project-content" key={`section${s}`}>
        <h3 className="section-title">{section.title}</h3>
        <div className="bordered">
          {section.content.map((c, i) => {
            switch (c.type) {
              case "paragraph":
                return <p key={`p${i}`}>{c.text}</p>;
              case "image":
                return <Image url={c.url} alt={c.caption} caption={c.caption}  key={`img${i}`}/>;
              case "link":
                return <a href={c.url} target="_blank" rel="noreferrer"  key={`a${i}`}>{c.text}</a>;
              case "list":
                return <List listItems={c.list}  key={`l${i}`} />;
              case "video":
                return <iframe className='video' src={c.url} title={c.title} allow="clipboard-write; encrypted-media; picture-in-picture" allowFullScreen={true} key={`vid${i}`}></iframe>;
              default:
                return <></>;
            }
          })}
        </div>
      </div>
    );
  });

  return (
    <section className="Content">
      {content}
    </section>
  );
}