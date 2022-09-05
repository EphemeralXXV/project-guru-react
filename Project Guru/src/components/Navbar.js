import { useState } from 'react';

import favo from '@/resources/favo.gif';

import Styles from './Navbar.module.css';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setNavbarOpen(prevState => !prevState);
    }
    return (
        <>
            <div id = {Styles.navbarCollapsed} onClick = {handleNavbarToggle} />
            <div id = {Styles.navbarExpanded} style = {navbarOpen ? {maxHeight: '100%'} : {maxHeight: '0%'}}>
                <img src = {favo} alt = 'Favo' />
            </div>        
        </>
    );
}

export default Navbar;