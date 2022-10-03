import Styles from "./AdvancedSearchOption.module.scss";
import AdvancedSearchSelectable from "./AdvancedSearchSelectable";

const AdvancedSearchOption = (props) => {
    return (
        <div className = {Styles.advancedSearchOption}>
            <span className = {Styles.advancedSearchOptionLabel}>{props.name}:&#0020;</span>
            <input type = {props.type} />
            <div className = {Styles.advancedSearchSelectables}>
                <AdvancedSearchSelectable type = {props.type} name = {props.name} value = "Exact" />
                {props.type === "date" &&
                    <>
                        <AdvancedSearchSelectable type = "date" name = {props.name} value = "Before" />
                        <AdvancedSearchSelectable type = "date" name = {props.name} value = "After" />
                    </>
                }
            </div>
        </div>
    );
}

export default AdvancedSearchOption;