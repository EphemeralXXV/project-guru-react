import { turnButtonRed, turnButtonWhite } from '../pages/preload';

import navLeft from '../resources/navleft.png';
import navRight from '../resources/navright.png';

import Styles from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <div className = {Styles.menuItem} id = {Styles.menuForum}> {/*Container for individual menu item (icon + button)*/}
            <div className = {Styles.menuIcon} id = {Styles[`menu${props.name}Icon`]}> {/*Container for spinning menu icon*/}
                <img src = {props.img} alt = {props.name} />
            </div>
            <div className = {Styles.menuButton} id = {Styles[`menu${props.name}Button`]}> {/*Container for menu button*/}
                <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                    <a href = "forum.html">
                        <img className = {Styles.leftArrow} src = {navLeft} alt = 'Left arrow' />
                        <span className = {Styles.buttonCenter} id = {Styles[`${props.name.toLowerCase()}Button`]}>
                            {props.name}
                        </span>
                        <img className = {Styles.rightArrow} src = {navRight} alt = 'Right arrow' />
                    </a>
                </div>  
            </div>
        </div>
    );
}

export default MenuItem;