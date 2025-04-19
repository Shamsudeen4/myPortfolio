import React from 'react';
import './Contact.css'; // Make sure to create and import the CSS file
import { HiArrowLongRight } from "react-icons/hi2";

function Contact() {


  return (
    <section id='contactt' class="contact-section">
      <div className='send'>
        <h2>Send me a message!</h2>
        <p>Got a question or proposal, or just want to say Hello? Go ahead.</p>
      </div>
      <form
        action="https://formspree.io/f/mrbpjvkz"
        method="POST"
        class="contact-form"
      >
        <div className='formt'>
          <div className='forms'>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
        
        <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className='slide-btn'>Send Message <HiArrowLongRight size={30} /></button>
      </form>
    
      <div class="resume-link">
        <h3>Need my resume?</h3>
        <a href="/yusuf_shamsudeen_resume.pdf" target="_blank">View Resume</a>
      </div>
    </section>
    
  );
}

export default Contact;
