import React from 'react';
import './ProjectDetails.css';
import * as FaIcons from "react-icons/fa";

export default function ProjectDetails({ project }) {
    if (!project) return null;
    const { name, tags, contents, links } = project;
    const isBlueprint = (src = "") => /bp|blueprint|graph/i.test(src);
    return (
        <div className="project-detail">
            <h1>{name.toUpperCase()}</h1>
            <p className="tags">{tags}</p>
            <div className='project-wrapper'>
                {contents.paragraphs.map((text, i) => (
                    <div
                        key={i}
                        className={`project-row ${i % 2 === 0 ? 'normal' : 'reverse'} fade-in`}
                    >
                        <div className="project-text">
                            <p>{text}</p>
                        </div>
                        <div className="project-images">
                            {contents.gallery[i] ? (
                                contents.gallery[i].endsWith(".mp4") ? (
                                    <video src={contents.gallery[i]} autoPlay loop muted>
                                      Your browser does not support the video tag.
                                    </video>
                                  ) : isBlueprint(contents.gallery[i]) ? (
                                      <div className="bp-strip">
                                        <img src={contents.gallery[i]} alt={`${name}-img-${i}`} />
                                      </div>
                                  ) : (
                                    <img src={contents.gallery[i]} alt={`${name}-img-${i}`} />
                                  )
                                ) : (
                                    <div className="placeholder">Image not available</div>
                            )}
                        </div>
                    </div>
                ))}
                
            </div>
            {links?.url?.length > 0 && (
                <div className="project-links">
                    <p>LINKS</p>
                    {links?.url?.map((link, i) => {
                        const Icon = FaIcons[links.icon[i]];
                        return (
                            <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                                {Icon && <Icon size={48} color="#fff" />}
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}