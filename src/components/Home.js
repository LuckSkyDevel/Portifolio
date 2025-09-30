import React from 'react';
import TechGif from '../assets/tech2.gif';
import BannerImage from '../assets/banner-image.png';
import Navbar from './Navbar';
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={TechGif} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome To My Personal Portifolio
          </h1>
          <p className="primary-text">
            I'm a Full Stack web developer based in Brasilia, Brazil. 
          </p>
          <div className='primary-icons-heading'>
            <a href='https://github.com/LuckSkyDevel'><FaGithub /></a>
            <a href='https://www.instagram.com/lucas_carvalhodf/'><FaInstagram /></a>
            <a href='https://www.linkedin.com/in/lucascarvalho1415/'><FaLinkedin /></a>
          </div>
          <button className="secondary-button">
            Download CV <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home