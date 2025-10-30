/* eslint-disable no-unused-vars */
import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { BsDatabase, BsSlack } from 'react-icons/bs';
import TechGif from '../assets/tech2.gif';
import { motion } from 'motion/react';

export default function Technologies() {
    const transition = {
        duration: 3,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <div id="technologies" className="my-60 w-full">
            <div className="flex flex-col items-center justify-center px-6 lg:px-2">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="primary-heading">Technologies</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="primary-text">
                    I've worked with a range of technologies in the web development market.
                </motion.p>
            </div>
            <div className='flex flex-col lg:flex-row flex-auto justify-center items-center gap-25 lg:gap-70 px-6 lg:px-2'>
                <div className="absolute size-150 lg:size-230 -right-35 lg:right-55 z-10 mt-90">
                    <img src={TechGif} alt="" />
                </div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={transition} className='font-xl max-w-lg my-6 bg-clip-text tech-text'>
                    <p className="text-2xl font-bold max-w-lg my-6 bg-clip-text">
                        <FaNodeJs color='white' /> FrontEnd
                    </p>
                    <p>React</p>
                    <p>Angular</p>
                    <p>HTML/CSS</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={transition} className='font-xl max-w-lg my-6 bg-clip-text tech-text'>
                    <p className="text-2xl font-bold max-w-lg my-6 bg-clip-text">
                        <BsDatabase color='white' /> BackEnd
                    </p>
                    <p>Node.js</p>
                    <p>Java</p>
                    <p>Python and Databases</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={transition} className='font-xl max-w-lg my-6 bg-clip-text tech-text'>
                    <p className="text-2xl font-bold max-w-lg my-6 bg-clip-text">
                        <BsSlack color='white' /> Frameworks
                    </p>
                    <p>Spring</p>
                    <p>EJB</p>
                    <p>Hibernate</p>
                    <p>Bootstrap</p>
                    <p>Material</p>
                </motion.div>
            </div>
        </div>
    )
}
