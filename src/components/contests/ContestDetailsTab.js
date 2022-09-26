import Styles from "./ContestDetailsTab.module.scss";

const ContestDetailsTab = (props) => {
    const handleTabChange = () => {
        props.onTabClick(props.name);
    }

    return (
        <li className = {`${Styles.tab} ${props.active && Styles.active}`} onClick = {handleTabChange}>
            {props.name[0].toUpperCase() + props.name.slice(1)  /* Capitalize first letter */}
        </li>
    );
}

export default ContestDetailsTab;