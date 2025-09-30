import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from "react-icons/go";

function Contact() {
    return (
        <div>
            <div id='contact' className='contact-container'>
                <h1 className="primary-heading">
                    Contact-me
                </h1>
                <div className='contact-section'>
                    <a href='https://github.com/LuckSkyDevel' target="_blank" rel="noopener noreferrer" className='contact-icons-heading'><FaGithub /></a>
                    <a href='https://www.instagram.com/lucas_carvalhodf/' target="_blank" rel="noopener noreferrer" className='contact-icons-heading'><FaInstagram /></a>
                    <a href='https://www.linkedin.com/in/lucascarvalho1415/' target="_blank" rel="noopener noreferrer" className='contact-icons-heading'><FaLinkedin /></a>
                    <a href='https://wa.me/5561998309595' target="_blank" rel="noopener noreferrer" className='contact-icons-heading'><FaWhatsapp /></a>
                    <a href='mailto:lucas.carvalhoana@gmail.com' target="_blank" rel="noopener noreferrer" className='contact-icons-heading'><GoMail /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;