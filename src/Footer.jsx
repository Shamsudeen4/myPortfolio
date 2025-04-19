import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <section className='foot'>
        <div className='all'>
            <div className='left'>
            <div className='logos'>
                <p>YS</p>
            </div>
            <div className='say'>
                <div className='hell'>
                    <h3>SAY HELLO</h3>
                    <a href="https://wa.me/2347041264776">wa.me/mrshamsudeen</a>
                    <a href="t.me/shamsudeeen">t.me/mrshamsudeen</a>
                </div>
                <div className='my'>
                    <a href='#skills'>My Skills</a>
                    <a href='/yusuf_shamsudeen_resume.pdf'>My Resume</a>
                </div>
            </div>
            </div>
            <div>
                <hr />
                <div className='yus'>
                    <p>&copy; Yusuf Shamsudeen 2025</p>
                    <div className='link'>
                        <a href="https://github.com/Shamsudeen4"><FaGithub size={30} /></a>
                        <a href="www.linkedin.com/in/yusuf-shamsudeen-b89770273"><FaLinkedin size={30} /></a>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer