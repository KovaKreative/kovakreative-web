import './Hero.scss';

import Social from "./Social";
import Tagline from "./Tagline";

export default function Hero() {
  return (
    <div className='Hero'>
      <Tagline />
      <Social />
    </div>
  );
}