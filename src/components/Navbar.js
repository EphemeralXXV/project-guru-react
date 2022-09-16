import { useState } from "react";
import { Link } from "react-router-dom";

import Styles from "./Navbar.module.scss";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setNavbarOpen(prevState => !prevState);
        document.addEventListener("click", (e) => closeNavbar(e));
    }
    const closeNavbar = (event) => {
        if(!event.target.closest(`#${Styles.navbar}`)) {        // If #navbar isn't an ancestor of the clicked element... Template literal necessary because of the odd way CSS modules work
            setNavbarOpen(false);
            document.removeEventListener("click", closeNavbar); // Clean up
        }
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
        </div>
    );
}

export default Navbar;