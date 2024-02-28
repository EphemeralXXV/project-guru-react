import { useState, useRef } from 'react';

import Styles from './Collapsible.module.scss';

const Collapsible = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const contentRef = useRef(0);
    const handleToggleCollapse = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className = {Styles.collapsible}>
            <button className = {collapsed ? Styles.headCollapsed : Styles.headExpanded} onClick = {handleToggleCollapse}>
                {props.heading}
            </button>
            <div className = {Styles.content} ref = {contentRef} style = {collapsed ? {maxHeight: "0", padding: "0 18px"} : {maxHeight: contentRef.current.scrollHeight + "px", padding: "18px"}}>
                {props.children}
            </div>
        </div>
    );
}

export default Collapsible;