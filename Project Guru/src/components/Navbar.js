import { useState, useRef, useEffect } from 'react';
import { expandNavbar } from '../common/preload';

import favo from '../resources/favo.gif';

import Styles from './Navbar.module.css';

const Navbar = () => {
    const navbarRef = useRef(0);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setNavbarOpen(prevState => !prevState);
        console.log(navbarRef.current.style.display);
        navbarOpen ? console.log("Open!") : console.log("Closed!");
    }
    useEffect(() => {
        if(navbarOpen) {
            console.log(navbarRef.current.style.display);
            expandNavbar(navbarRef);
        }
    }, [navbarOpen]);
    return (
        <>
            <div id = {Styles.navbarCollapsed} onClick = {handleNavbarToggle} />
            <div id = {Styles.navbarExpanded} ref = {navbarRef}>
                <img src = {favo} alt = 'Favo' />
            </div>        
        </>
    );
}

export default Navbar;