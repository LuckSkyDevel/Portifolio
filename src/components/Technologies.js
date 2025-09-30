import React from 'react';
import TechGif from '../assets/tech2.gif';
import { BsDatabase } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa6";

function Technologies() {
    return (
        <div id="technologies" className="tech-section">
            <div className="tech-section-top">
                <h1 className="primary-heading">Technologies</h1>
                <p className="primary-text">
                    I've worked with a range of technologies in the web development market.
                </p>
            </div>
            <div className='tech-container'>
                <div className="tech-bannerImage-container">
                    <img src={TechGif} alt="" />
                </div>
                <div className='tech-text'>
                    <p className="title-tech-text">
                        <FaNodeJs color='white' /> FrontEnd
                    </p>
                    <p>React</p>
                    <p>Angular</p>
                    <p>HTML/CSS</p>
                </div>
                <div className='tech-text'>
                    <p className="title-tech-text">
                        <BsDatabase color='white' /> BackEnd
                    </p>
                    <p>Node.js</p>
                    <p>Java</p>
                    <p>Python and Databases</p>
                </div>
                <div className='tech-text'>
                    <p className="title-tech-text">
                        <BsSlack color='white' /> Frameworks
                    </p>
                    <p>Spring</p>
                    <p>EJB</p>
                    <p>Hibernate</p>
                    <p>Bootstrap</p>
                    <p>Material</p>
                </div>
            </div>
        </div>
    );
}

export default Technologies;