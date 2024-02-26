import { useState } from "react";
import { Link } from "react-router-dom";

import Styles from "./Navbar.module.scss";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setNavbarOpen(prevState => !prevState);
    }
    return (
        <div id = {Styles.navbar}>
            <div id = {Styles.navbarCollapsed} onClick = {handleNavbarToggle} />
            <div id = {Styles.navbarExpanded} style = {navbarOpen ? {maxHeight: "100%"} : {maxHeight: "0%"}}>
                <p>Sign in</p>
                <p>Username: <input type = "text" /></p>
                <p>Password: <input type = "password" /></p>
                <Link to = "/">Sign in</Link>
            </div>  
            <div id = {Styles.overlay} style = {navbarOpen ? {display: "block"} : {display: "none"}} onClick = {handleNavbarToggle} /> 
        </div>
    );
}

export default Navbar;