import React, { useRef, useState } from 'react'
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeIcon from '@mui/icons-material/Home';
import { FaJsSquare } from "react-icons/fa";
import { Link } from 'react-scroll';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineBars3 } from 'react-icons/hi2';


const Navbar = () => {

    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenMenu(newOpen);
    };

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "About me",
            icon: <InfoIcon />
        },
        {
            text: "contact me",
            icon: <PhoneRoundedIcon />
        }
    ];

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
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={toggleDrawer(true)} />
            </div>
            <Drawer open={openMenu} onClose={toggleDrawer(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;