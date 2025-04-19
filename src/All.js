import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
function All() {
  return (
    <div>
      <Helmet>  
        <title>Yusuf Shamsudeen</title>  
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        
     
      
    </div>
  )
}

export default All