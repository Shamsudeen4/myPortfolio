import React, { useRef, useEffect, useState } from 'react';
import './SkillBar.css';
// import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // add more as needed

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const icons = {
  HTML: <FaHtml5 color="#000000" title="HTML5" />,
  CSS: <FaCss3Alt color="#000000" title="CSS3" />,
  JavaScript: <FaJs color="#000000" title="JavaScript" />,
  React: <FaReact color="#000000" title="React" />,
  Tailwindcss: <SiTailwindcss color="#000000" title="TailwindCSS" />,
  'Next.js': <SiNextdotjs color="#000000" title="Next.js" />,
};

const SkillBar = ({ skill, percentage }) => {
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Optional: run only once
        }
      },
      { threshold: 0.5 } // Adjust for when you want the animation to trigger
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (inView && barRef.current) {
      barRef.current.style.width = `${percentage}%`;
    }
  }, [inView, percentage]);

  return (
    <div className="skill-bar-container" ref={containerRef}>
      <div className="skill-bar-header">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {icons[skill]} {skill}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="bar-background">
        <div ref={barRef} className="bar-fill"></div>
      </div>
    </div>
  );
};

export default SkillBar;
