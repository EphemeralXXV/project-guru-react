import React, { useState, useRef } from 'react';

import Styles from '@/components/Collapsible.module.scss';

interface CollapsibleProps {
    heading: string,
    children: React.ReactNode
}

const Collapsible: React.FC<CollapsibleProps> = ({ heading, children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const contentRef = useRef<HTMLDivElement>(null);
    const handleToggleCollapse = (): void => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className = {Styles.collapsible}>
            <button className = {collapsed ? Styles.headCollapsed : Styles.headExpanded} onClick = {handleToggleCollapse}>
                {heading}
            </button>
            <div
                className = {Styles.content}
                ref = {contentRef}
                style = {collapsed ? {maxHeight: "0", padding: "0 18px"} : {maxHeight: contentRef.current?.scrollHeight + "px", padding: "18px"}}
            >
                {children}
            </div>
        </div>
    );
}

export default Collapsible;