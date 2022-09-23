import Styles from "./ContestDetailsPanel.module.scss";

const ContestDetailsPanel = (props) => {
    return (
        <div className = {Styles.contestDetailsPanel}>
            {props.children}
        </div>
    );
}

export default ContestDetailsPanel;