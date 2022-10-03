import Styles from "./AdvancedSearchSelectable.module.scss";

const AdvancedSearchSelectable = (props) => {
    const optionName = "contest" + props.name;
    const optionIsDate = props.type === "date";
    return (
        <div className = {Styles.advancedSearchSelectable}>
            <input type = {optionIsDate ? "radio" : "checkbox"} name = {optionName} value = {optionIsDate && optionName + props.value} defaultChecked = {optionIsDate && props.value === "Exact"} />    {/* If date, "Exact" will be the defaultChecked radiobox, else it will be an unchecked checkbox */}
            <label htmlFor = {optionIsDate && optionName + props.value}>{props.value}</label>
        </div>
    );
}

export default AdvancedSearchSelectable;