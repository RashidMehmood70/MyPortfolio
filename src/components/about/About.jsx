import React from 'react'
import "./about.css";
import myimg2 from "../../assets/myimg2.jpg"

function About() {
  return (
    <section className='about'>
      <div className="main">
      <div className="left">
      <div className="img">
        <img className="img1" src={myimg2} alt='about image' />
      </div>
      </div>
      <div className="right">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>
         Hi I'm a passionate front-end developer who loves building modern, user-friendly
            web applications. I enjoy creating elegant solutions to complex
            problems and continuously learning new tools and technologies.
        </p>
        <br></br>
        <p>
        I specialize in React, Tailwind CSS, and responsive design, and I'm
        currently exploring backend development with Node.js and Express.
        </p>
      </div>
      </div>
      
    </section>
  )
}

export default About
