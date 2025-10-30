import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { motion } from 'motion/react';


export default function Contact() {
    return (
        <div id='contact' className='items-center px-15 lg:px-20 w-full h-50 my-40'>
            <h1 className="primary-heading">
                Contact-me
            </h1>
            <div className='flex flex-row flex-wrapd justify-center items-start'>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://github.com/LuckSkyDevel'
                    target="_blank" rel="noopener noreferrer"
                    className='contact-icons-heading'>
                    <FaGithub />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://www.instagram.com/lucas_carvalhodf/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icons-heading'>
                    <FaInstagram />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://www.linkedin.com/in/lucascarvalho1415/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icons-heading'>
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://wa.me/5561998309595'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icons-heading'>
                    <FaWhatsapp />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href='mailto:lucas.carvalhoana@gmail.com'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icons-heading'>
                    <GoMail />
                </motion.a>
            </div>
        </div>
    )
}
