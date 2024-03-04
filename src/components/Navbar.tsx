import { useState } from "react";
import { Link } from "react-router-dom";

import Styles from "@/components/Navbar.module.scss";

const Navbar: React.FC<{}> = () => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const handleNavbarToggle = (): void => {
        setNavbarOpen(prevState => !prevState);
    }
    return (
        <div id = {Styles.navbar}>
            <div id = {Styles.navbarCollapsed} onClick = {handleNavbarToggle} />
            <div id = {Styles.navbarExpanded} style = {{maxHeight: navbarOpen ? "100%": "0%"}}>
                <p>Sign in</p>
                <p>Username: <input type = "text" /></p>
                <p>Password: <input type = "password" /></p>
                <Link to = "/">Sign in</Link>
            </div>  
            <div id = {Styles.overlay} style = {{display: navbarOpen ?  "block" : "none"}} onClick = {handleNavbarToggle} /> 
        </div>
    );
}

export default Navbar;