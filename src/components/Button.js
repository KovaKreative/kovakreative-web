import './Button.scss';

export default function Button(props) {
  return (
    <button className={`Button ${props.large ? 'button-large' : ''}`} onClick={props.onClick} >{props.label}</button>
  )
}