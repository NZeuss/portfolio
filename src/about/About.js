import React from 'react';
import self from '../assets/images/self.png'
import './About.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <div className='about-container'>
        <div className='image-container'><img src={self} alt='Me'></img></div>
        <div className='text-container'>
          <h1>ABOUT ME</h1>
          <div className='line'></div>
          <p>My name is Nico Zeuss, and I’m a recent graduate at the University of Pittsburgh with a B.S. in Computer Science and Digital Narrative and Interactive Design. I’m an aspiring software engineer with a strong interest in gameplay programming and design. I have worked to bridge design and programming, from scripting encounters in Unreal Engine 5 to procedurally generating dungeons in Bevy (Rust). </p>
          <p>Outside of developing, you’ll catch me building model kits, painting wargaming miniatures, snowboarding, or playing and running tabletop RPGs. I enjoy narrative-driven video games, with favorites including titles such as <em>Mass Effect</em> and <em>Nier</em>. </p>
          
          <h2>WHAT I'M GOOD AT:</h2>
          <div className='smaller-line'></div>
          <p><span>Engines:</span> Unreal Engine 5, Unity 3D, Bevy</p> 
          <p><span>Programming:</span> C, C#, C++, Java, Python</p> 
          <h2>RECENT PROJECTS: </h2>
          <div className='smaller-line'></div>
          <p>
            <Link to="/projects?sel=underbelly#details"state={{ autoScroll: true }}>The Underbelly</Link> - Unreal Engine 5 prototype consisting of camera scripting, procedural material generation and player tracking mechs.</p>
          <p><Link to="/projects?sel=bluebeard#details"state={{ autoScroll: true }}>Bluebeard’s Mansion</Link> -  Unity 3D level made to adapt the folktale Bluebeard into a walking simulator/exploration game.</p>
          <p><strong>Cuscuta </strong>- Bevy/Rust based dungeon-crawler with procedural generation based on player activity, and local multiplayer functionality built on an ECS framework.</p>
          <h2>LINKS: </h2>
          <div className='smaller-line'></div>
          <div className='external-links-container'>
            <a href="https://www.linkedin.com/in/nico-zeuss" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} color="#fff"/>
            </a>
            <a href='https://github.com/NZeuss' target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} color="#fff"/>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}