/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import techGif from '../assets/tech2.gif';
import { motion } from 'motion/react';

export default function Home() {
    const transition = {
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full h-80 lg:h-150 px-5 lg:px-20 py-0">
                <div className="absolute size-100 lg:size-250 right-0 lg:right-20 z-10">
                    <img src={techGif} alt="" />
                </div>
                <div className="relative flex-1 flex-col items-start justify-center top-10 z-20">
                    <motion.h1 className="primary-heading" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={transition}>
                        Welcome To My Personal Portifolio
                    </motion.h1>
                    <motion.p className="primary-text" initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={transition}>
                        I'm a Full Stack web developer based in Brasilia, Brazil.
                    </motion.p>
                    <div className='primary-icons-heading flex flex-row gap-6 mt-4'>
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
        </>
    )
}
