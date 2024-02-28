import { Link } from "react-router-dom";
import { useState } from "react";

import navLeft from "@/resources/navleft.png";
import navRight from "@/resources/navright.png";
import navLeftHovered from "@/resources/navlefthover.png";
import navRightHovered from "@/resources/navrighthover.png";

import Styles from "./MenuItem.module.scss";

const MenuItem = (props) => {
    const [buttonHovered, setButtonHovered] = useState(false);
    const handleButtonHover = () => {
        setButtonHovered(prevState => !prevState);
    }
    const wrapper = (content) => {  // Conditional wrapper — use <a> if external link, otherwise use <Link>
        return props.redirect ?
            <a href = {props.redirect}>
                {content}
            </a> :
            <Link to = {`${props.name.toLowerCase()}`}>
                {content}
            </Link>
    }
    const content = <>
        <img className = {Styles.leftArrow} src = {buttonHovered ? navLeftHovered : navLeft} alt = "Left arrow" />
        <span className = {Styles.buttonCenter} id = {Styles[`${props.name.toLowerCase()}Button`]} style = {buttonHovered ? {color: "red"} : {color: "yellow"}}>
            {props.name}
        </span>
        <img className = {Styles.rightArrow} src = {buttonHovered ? navRightHovered : navRight} alt = "Right arrow" />
    </>;

    return (
        <div className = {Styles.menuItem} id = {Styles[`menu${props.name}`]}> {/*Container for individual menu item (icon + button)*/}
            <div className = {Styles.menuIcon} id = {Styles[`menu${props.name}Icon`]}> {/*Container for spinning menu icon*/}
                <img src = {props.img} alt = {props.name} />
            </div>
            <div className = {Styles.menuButton} id = {Styles[`menu${props.name}Button`]}> {/*Container for menu button*/}
                <div onMouseOver = {handleButtonHover} onMouseOut = {handleButtonHover}>
                    {wrapper(content)}  {/*Link button*/}
                </div>  
            </div>
        </div>
    );
}

export default MenuItem;