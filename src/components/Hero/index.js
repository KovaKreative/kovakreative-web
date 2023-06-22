import './Hero.scss';

import Social from "./Social";
import Tagline from "./Tagline";

export default function Hero() {
  return (
    <div className='Hero'>
      <div className='container'>
        <Tagline />
        <Social />
      </div>
    </div>
  );
}