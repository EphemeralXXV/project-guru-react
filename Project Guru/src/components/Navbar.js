import favo from '../resources/favo.gif';

import { expandNavbar } from '../common/preload';

import Styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div id = {Styles.navbarCollapsed} onClick = {expandNavbar} />
            <div id = {Styles.navbarExpanded}>
                <img src = {favo} />
            </div>        
        </>
    );
}

export default Navbar;