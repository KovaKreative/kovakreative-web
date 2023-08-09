export default function Image(props) {
  const { url, alt, caption } = props;

  return (
    <div className='image'>
      <img alt={alt} src={url} />
      <h4 className='caption'>{caption}</h4>
    </div>
  );
}