import React, { useEffect, useRef } from 'react';
import second from './Images/second.png';
import './About.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate once
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <section id="Aboutss">
      <main className="new fade-slide-up" ref={aboutRef}>
        <div className="a"><img src={second} alt="second section" /></div>
        <div className="abt">
          <h2>About Shamsudeen</h2>
          <p>
            I’m a creative and detail-oriented individual who enjoys bringing ideas to life through design and problem-solving. I’m passionate about building meaningful experiences, learning new things, and constantly improving both personally and professionally. <br /><br />
            I value simplicity, clarity, and purpose in everything I do. I’m always excited to take on new challenges, collaborate with others, and grow along the way.
          </p>
        </div>
      </main>
    </section>
  );
}

export default About;
