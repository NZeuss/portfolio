import React, { useEffect, useState } from 'react';
import './Slideshow.css';
import { Link } from 'react-router-dom';

import img1 from './assets/images/bluebeard_hallway.png';
import img2 from './assets/images/feagi.png';
import img3 from './assets/images/underbelly/LitSideCam.png';

const slides = [
  { image: img1, hdr: "BLUEBEARD'S MANSION" ,sub: 'Unity 3D', link: "/projects?sel=bluebeard#details"},
  { image: img2, hdr: 'FEAGI BLENDER CONNECTOR' ,sub: 'Blender', link: "/projects?sel=feagi#details"},
  { image: img3, hdr: 'THE UNDERBELLY' ,sub: 'Unreal Engine 5', link: "/projects?sel=underbelly#details" }
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // progress bar updater
    const duration = 15000;
    const startTime = Date.now();
  
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      if (elapsed < duration) requestAnimationFrame(tick);
    };
  
    tick();
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in
      }, 500); // wait for fade out before changing
    }, 15000); // every 30s

    return () => clearInterval(interval);
  }, []);

  const { image, hdr, sub, link } = slides[index];

  return (
    <div className={`slide-container ${fade ? 'fade-in' : 'fade-out'}`}
    style={{ backgroundImage: `url(${image})` }}>
      
      <div className='slide-overlay'>
        <div className="slide-hdr">{hdr}</div>
        <div className='line'></div>
        <div className="slide-sub"><Link to = {link} state={{ autoScroll: true }}>{sub}</Link></div>
      </div>
      <div className='slide-progress-bar'>
      <div className="slide-progress-line" style={{ width: `${progress}%` }} />
      </div>
    </div>
   
  );
}