import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import './Projects.css';
import { projects } from './ProjectData';
import ProjectDetails from './ProjectDetails';

const images = [
  '../assets/images/feagi.png',
  '../assets/images/underbelly/LitSideCam.png',
  '../assets/images/bluebeard_hallway.png',
  
  // '../assets/images/placeholder.jpeg',
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();     
  const detailsRef = useRef(null);
  const location = useLocation();

  const shouldAutoScrollRef = useRef(
    Boolean(location.state?.autoScroll || location.hash === '#details')
  );

  useEffect(() => {
    const sel = searchParams.get('sel');
    if (!sel) return;
    const idx = projects.findIndex(p => p.id === sel);
    if (idx !== -1) setSelectedIndex(idx);
  }, [searchParams]);

  useEffect(() => {
    if (selectedIndex == null || !shouldAutoScrollRef.current) return;
    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      shouldAutoScrollRef.current = false; // one-time
    });
    }, [selectedIndex]);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
  return (
    <>
      <div className='projects'>
        <div className='title-section' style={{ padding: '2rem' }}>
          <h1>
            {selectedIndex === null
              ? 'PROJECTS'
              : projects[selectedIndex].name.toUpperCase()}
          </h1>
          <p>
            {selectedIndex === null
              ? 'These are some of my past projects.'
              : projects[selectedIndex].tags}
          </p>
        </div>
        <div className='images'>
          {images.map((src, index) => (
            <div
              key={index}
              className={`image-wrapper ${activeIndex === null
                  ? 'normal'
                  : activeIndex === index
                    ? 'hovered'
                    : 'shrunk'
                }
            ${selectedIndex === index ? 'selected' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setSelectedIndex(prev => {
                  const next = prev === index ? null : index;
                  if (next == null) setSearchParams({});
                  else setSearchParams({ sel: projects[index].id });
                  return next;
                })
              }
            >
              <img src={src} alt={`img-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div id="details" ref={detailsRef}>
        <ProjectDetails
          project={selectedIndex !== null ? projects[selectedIndex] : null}
        />
      </div>
    </>
  );
}