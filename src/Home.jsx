import React, { useState } from 'react'
import './Home.css'
import Shams from './Images/gtgsss.png'

function Home() {
    const[showlink, setShowlink]= useState(false)
    const toggle = ()=>{
        setShowlink(!showlink);
    }
  return (
    <section id='homee'>
        
        <header>
            <div className='myhead'>
                <div className={`logo `}>
                    <p className={`sign ${showlink ? "open" : ""}`}>YS</p>
                </div>
                <h2 className='name'>Yusuf Shamsudeen</h2>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#homee">Home</a></li>
                    <li><a href="#Aboutss">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#Projectss">Project</a></li>
                    <li><a href="#contactt">Contact</a></li>
                </ul>
                <div onClick={toggle} className={`mobile-links ${showlink ? "open" : ""}`}>
                    <div className="btn"></div>
                    <div className="btn2"></div>  
                </div>
                <div  className={`linkss ${showlink ? "open" : ""}`}>
                    
                <ul>
                    <li><a href="#homee">Home</a></li>
                    <li><a href="#Aboutss">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#Projectss">Project</a></li>
                    <li><a href="#contactt">Contact</a></li>
                    <li className='resume'><a href="/yusuf_shamsudeen_resume.pdf" target="_blank">View Resume</a></li>
                </ul>
            
                </div>
                

</nav>
        </header>
        <main>
            <div className='textimg'>
                <div className='first'>
                    <h1 className='main-header'>Hello, <span className='world'> World.</span></h1>
                    <p> <span role="img" aria-label="wave">👋</span>My name is Shamsudeen, I'm a Frontend Developer and it is lovely to meet you. Check out my work below</p>
                </div>
                <div className='myimg'>
                    <img src={Shams}/>
                </div>
            
            </div>
        </main>
        <footer>
<a href="#Projectss" class="scroll-down-button bounce"> </a>

        </footer>
    </section>
  )
}

export default Home