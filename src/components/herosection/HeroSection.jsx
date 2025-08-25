import React from 'react';
import './herosection.css';
import myimg from '../../assets/myimg.jpg';

function HeroSection() {
  return (
    <section className='herosection'>
      <div className='hero-left'>
        <h1 className='hero-title'>Hi, I'm <span className='highlight'>Rashid Mehmood</span></h1>
        <h2 className='hero-subtitle'>Full Stack Developer</h2>
        <p className='hero-description'>
          I specialize in building full-stack applications using modern technologies like React, Node.js, and MongoDB. Passionate about clean code and user-centric design, I aim to deliver high-performing digital solutions that scale.
        </p>
        <div className='hero-buttons'>
          <a href='#projects' className='btn primary'>View Projects</a>
          <a href='/contact' className='btn secondary'>Contact Me</a>
        </div>
      </div>
      <div className='hero-right'>
        <img src={myimg} alt='Rashid' className='hero-img' />
      </div>
    </section>
  );
}

export default HeroSection;
