import Styles from "./AdvancedSearchSelectable.module.scss";

const AdvancedSearchSelectable = (props) => {
    const optionName = "contest" + props.name;
    const optionIsDate = props.type === "date";
    const handleDelimiterChange = (event) => {
        event.target.checked ? props.onDelimiterChange(props.value) : props.onDelimiterChange("none");  // If checkbox gets unchecked, update to "none"
    }
    return (
        <div className = {Styles.advancedSearchSelectable}>
            <input type = {optionIsDate ? "radio" : "checkbox"} name = {optionName} value = {optionName + props.value} defaultChecked = {optionIsDate && props.value === "Exact"} onChange = {handleDelimiterChange} />    {/* If date, "Exact" will be the defaultChecked radiobox, else it will be an unchecked checkbox */}
            <label htmlFor = {optionName + props.value}>{props.value}</label>
        </div>
    );
}

export default AdvancedSearchSelectable;