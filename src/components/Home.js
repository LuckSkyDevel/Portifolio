import React from 'react';
import TechGif from '../assets/tech2.gif';
import Navbar from './Navbar';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as motion from "motion/react-client";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="1500" data-aos-offset="0">
          <img src={TechGif} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading" data-aos="fade-left" data-aos-easing="linear" data-aos-delay="1500" data-aos-offset="0">
            Welcome To My Personal Portifolio
          </h1>
          <p className="primary-text" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="1500" data-aos-offset="0">
            I'm a Full Stack web developer based in Brasilia, Brazil. 
          </p>
          <div className='primary-icons-heading' data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='https://github.com/LuckSkyDevel'>
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='https://www.instagram.com/lucas_carvalhodf/'>
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='https://www.linkedin.com/in/lucascarvalho1415/'>
              <FaLinkedin />
            </motion.a>
          </div>
          {/* <button className="secondary-button">
            Download CV <FiArrowRight />{" "}
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Home;