import React from 'react';
import AboutPhoto from '../assets/about-photo.png';

function About() {
    return (
        <div>
            <div id='about' className='about-container'>
                <div className='about-text-section'>
                    <h1 className="primary-heading">
                        About
                    </h1>
                    <p className="about-primary-text">
                        I'm Lucas de Oliveira Carvalho and begin my journey into the IT World in 2011, studing Systems Analises and Development at the University,
                        I Learned a lot from the instructors.
                    </p>
                    <p className="about-primary-text">
                        Throughout my career, I have worked in sensitive and high-impact environments, which strengthened my strategic vision, sense of responsibility,
                        and results-driven mindset. I’m a dedicated professional with a strong ability to learn quickly and a unique way of studying and improving,
                        which allows me to adapt fast and master new technologies effectively.
                    </p>
                    <p className="about-primary-text">
                        I am constantly focused on combining technical excellence, continuous improvement, and value delivery, contributing to high-performing teams and meaningful software solutions.
                    </p>
                </div>
                <div className="about-bannerImage-container">
                    <img src={AboutPhoto} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;