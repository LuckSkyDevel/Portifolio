import React, { useRef, useState } from 'react';
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

import logoLucas from '../assets/Logo.svg';


export default function Navbar() {
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
        { to: "home", label: "Home", icon: <AiFillHome size={32} className='my-6 bg-gray'  /> },
        { to: "projects", label: "Projects", icon: <AiFillProfile size={32} className='my-6' /> },
        { to: "technologies", label: "Technologies", icon: <AiOutlineCode size={32} className='my-6' /> },
        { to: "about", label: "About", icon: <AiFillBook size={32} className='my-6' /> },
        { to: "contact", label: "Contact", icon: <AiFillContacts size={32} className='my-6' /> },
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

        <nav ref={navRef} className='flex flex-row justify-between items-center w-full mx-4 bg-primary top-1 z-50'>
            <div className='w-2/3 lg:w-1/3 text-2xl font-bold text-secondary flex items-center gap-2'>
                <img src={logoLucas} alt="Logo" className='w-60 h-60' />
            </div>
            <div className={`justify-between items-center row-span-5 px-8 font-lato font-medium text-xl leading-6 gap-15 text-justify tracking-[.03em] ${isMobile ? 'hidden' : 'flex'}`}>
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
                classNames={{ content: '!bg-gray-900/40 !text-white', header: '!text-white' }}
                width='100px'
                
            >
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} {...linkProps}>
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Drawer>

            <button className={`p-2 mr-10 lg:mr-5 text-gray-700 bg-gray-800 rounded-md outline-none focus:border-gray-400 focus:border ${isMobile ? 'block' : 'hidden'}`} onClick={showDrawer}>
                {open ?
                    <BsX className='size-6 text-secondary' />
                    :
                    <BsList className='size-6 text-secondary' />
                }
            </button>
        </nav>
    );
};
