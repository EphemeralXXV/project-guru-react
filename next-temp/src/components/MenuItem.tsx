import { Link } from "react-router-dom";
import { useState } from "react";

import navLeft from "@/resources/navleft.png";
import navRight from "@/resources/navright.png";
import navLeftHovered from "@/resources/navlefthover.png";
import navRightHovered from "@/resources/navrighthover.png";

import Styles from "@/components/MenuItem.module.scss";

interface MenuItemProps {
    redirectURL?: string,
    name: string,
    imgURL: string
}

const MenuItem: React.FC<MenuItemProps> = ({ redirectURL, name, imgURL }) => {
    const [buttonHovered, setButtonHovered] = useState<boolean>(false);
    const handleButtonHover = (): void => {
        setButtonHovered(prevState => !prevState);
    }
    const wrapper = (content: React.JSX.Element): React.JSX.Element => {  // Conditional wrapper — use <a> if external link, otherwise use <Link>
        return redirectURL ?
            <a href = {redirectURL}>
                {content}
            </a> :
            <Link to = {`${name.toLowerCase()}`}>
                {content}
            </Link>
    }
    const content = <>
        <img className = {Styles.leftArrow} src = {buttonHovered ? navLeftHovered : navLeft} alt = "Left arrow" />
        <span className = {Styles.buttonCenter} id = {Styles[`${name.toLowerCase()}Button`]} style = {buttonHovered ? {color: "red"} : {color: "yellow"}}>
            {name}
        </span>
        <img className = {Styles.rightArrow} src = {buttonHovered ? navRightHovered : navRight} alt = "Right arrow" />
    </>;

    return (
        <div className = {Styles.menuItem} id = {Styles[`menu${name}`]}> {/*Container for individual menu item (icon + button)*/}
            <div className = {Styles.menuIcon} id = {Styles[`menu${name}Icon`]}> {/*Container for spinning menu icon*/}
                <img src = {imgURL} alt = {name} />
            </div>
            <div className = {Styles.menuButton} id = {Styles[`menu${name}Button`]}> {/*Container for menu button*/}
                <div onMouseOver = {handleButtonHover} onMouseOut = {handleButtonHover}>
                    {wrapper(content)}  {/*Link button*/}
                </div>  
            </div>
        </div>
    );
}

export default MenuItem;