import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import * as motion from "motion/react-client"


function Contact() {
    return (
        <div>
            <div id='contact' className='contact-container'>
                <h1 className="primary-heading" data-aos="fade-right" data-aos-easing="linear" data-aos-delay="500" data-aos-offset="0">
                    Contact-me
                </h1>
                <div className='contact-section'>
                    <motion.a 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                        href='https://github.com/LuckSkyDevel'
                        target="_blank" rel="noopener noreferrer"
                        className='contact-icons-heading'>
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                        href='https://www.instagram.com/lucas_carvalhodf/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icons-heading'>
                        <FaInstagram />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                        href='https://www.linkedin.com/in/lucascarvalho1415/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icons-heading'>
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                        href='https://wa.me/5561998309595'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icons-heading'>
                        <FaWhatsapp />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                        href='mailto:lucas.carvalhoana@gmail.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icons-heading'>
                        <GoMail />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Contact;