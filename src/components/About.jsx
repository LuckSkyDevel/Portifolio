/* eslint-disable no-unused-vars */
import React from 'react';
import AboutPhoto from '../assets/about-photo.png';
import { motion } from 'motion/react';

export default function About() {
    const transition = {
        duration: 3,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <div>
            <div id='about' className='flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20'>
                <div className='relative flex flex-1 flex-col justify-center items-start max-w-4/5 z-20'>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="primary-heading">
                        About
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={transition} className="text-xl font-semibold my-6 text-justify background-primary">
                        I'm Lucas de Oliveira Carvalho and begin my journey into the IT World in 2011, studing Systems Analises and Development at the University,
                        I Learned a lot from the instructors.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={transition} className="text-xl font-semibold my-6 text-justify bg-clip-text background-primary">
                        Throughout my career, I have worked in sensitive and high-impact environments, which strengthened my strategic vision, sense of responsibility,
                        and results-driven mindset. I’m a dedicated professional with a strong ability to learn quickly and a unique way of studying and improving,
                        which allows me to adapt fast and master new technologies effectively.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={transition} className="text-xl font-semibold my-6 text-justify bg-clip-text background-primary">
                        I am constantly focused on combining technical excellence, continuous improvement, and value delivery, contributing to high-performing teams and meaningful software solutions.
                    </motion.p>
                </div>
                <div className="absolute max-w-200 right-5 lg:right-40 mt-30 z-10">
                    <img src={AboutPhoto} alt="" />
                </div>
            </div>
        </div>
    )
}
