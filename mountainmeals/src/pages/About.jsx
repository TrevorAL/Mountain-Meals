// src/components/About.js
import React from 'react';
import './About.css';
import rj from '../images/composite.png'

const About = () => (
  <div className="about-container">
    <div className="Header">
      <h2>Created by:</h2>
    </div>
    <div className="image-container">
      <div className="image-wrapper fly-in">
        <img src={rj} alt="Image 1" />
        <p className="image-name">Ronald Laukaitis</p>
      </div>
      <div className="image-wrapper fly-in">
        <img src={rj} alt="Image 2" />
        <p className="image-name">Ronald Laukaitis</p>
      </div>
      <div className="image-wrapper fly-in">
        <img src={rj} alt="Image 3" />
        <p className="image-name">Ronald Laukaitis</p>
      </div>
    </div>
  </div>
);

export default About;
