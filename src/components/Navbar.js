import React, { useRef, useState } from 'react';
import { FaJsSquare } from "react-icons/fa";
import { Link } from 'react-scroll';
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { useViewportSize } from '@mantine/hooks';


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

    const navLinks = [
        { to: "home", label: "Home" },
        { to: "projects", label: "Projects" },
        { to: "technologies", label: "Technologies" },
        { to: "about", label: "About" },
        { to: "contact", label: "Contact" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useViewportSize();

  const isMobile = width < 1024; // below md breakpoint

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }

    return (

        <nav ref={navRef}>
            <div className="nav-logo-container">
                <FaJsSquare style={{ background: "linear-gradient(180deg, #00C8B3 0%, #006258 100%)" }} /> Lucas Carvalho
            </div>
            <div className='navbar-links-container'>
                {navLinks.map((link) => (
                    <Link key={link.to} to={link.to} {...linkProps}>
                        {link.label}
                    </Link>
                ))}
            </div>
            
            <button className='button-menu' onClick={() => { toggleMenu(); toggleNavbar(); closeMenuOnMobile(); }}>
                {isMenuOpen ?
                    <BsX className='size-6 text-secondary' />
                    :
                    <BsList className='size-6 text-secondary' />
                }
            </button>
        </nav>
    );
};

export default Navbar;