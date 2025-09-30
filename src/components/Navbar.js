import React, { useRef } from 'react';
import { FaJsSquare } from "react-icons/fa";
import { Link } from 'react-scroll';


const Navbar = () => {
    const navRef = useRef();

    const toggleNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const linkProps = {
        onClick: toggleNavbar, // <-- add onClick handler
        spy: true,
        smooth: true,
        offset: -100,
        duration: 500,
    };

    return (
        <nav ref={navRef}>
            <div className="nav-logo-container">
                <FaJsSquare style={{ background: "linear-gradient(180deg, #00C8B3 0%, #006258 100%)" }} /> Lucas Carvalho
            </div>
            <div className='navbar-links-container'>
                <Link to="home" {...linkProps}>Home</Link>
                <Link to="projects" {...linkProps}>Projects</Link>
                <Link to="technologies" {...linkProps}>Technologies</Link>
                <Link to="about" {...linkProps}>About</Link>
                <Link to="contact" {...linkProps}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;