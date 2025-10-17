import React, { useRef, useState } from 'react';
import { FaJsSquare } from "react-icons/fa";
import { Link } from 'react-scroll';
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { useViewportSize } from '@mantine/hooks';
import { Drawer } from 'antd';


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
        { to: "home", label: "Home", icon: <AiFillHome /> },
        { to: "projects", label: "Projects", icon: <AiFillProfile /> },
        { to: "technologies", label: "Technologies", icon: <AiOutlineCode /> },
        { to: "about", label: "About", icon: <AiFillBook /> },
        { to: "contact", label: "Contact", icon: <AiFillContacts /> },
    ];

    const { width } = useViewportSize();

    const isMobile = width < 1024; // below md breakpoint

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

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

            <Drawer
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
                classNames={{content: 'menu-nav'}}
            >
                <ul className='text-nav-mobile'>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} {...linkProps}>
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Drawer>

            <button className='button-menu' onClick={showDrawer}>
                {open ?
                    <BsX className='size-6 text-secondary' />
                    :
                    <BsList className='size-6 text-secondary' />
                }
            </button>
        </nav>
    );
};

export default Navbar;