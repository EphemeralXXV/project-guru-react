import Styles from "@/components/searchBar/AdvancedSearchSelectable.module.scss";

interface AdvancedSearchSelectableProps {
    name: string,
    type: string,
    value: string,
    onDelimiterChange: (value: string) => void
}

const AdvancedSearchSelectable: React.FC<AdvancedSearchSelectableProps> = ({ name, type, value, onDelimiterChange }) => {
    const optionName = "contest" + name;
    const optionIsDate = type === "date";
    const handleDelimiterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.target.checked ? onDelimiterChange(value) : onDelimiterChange("none");  // If checkbox gets unchecked, update to "none"
    }
    return (
        <div className = {Styles.advancedSearchSelectable}>
            <input
                type = {optionIsDate ? "radio" : "checkbox"}
                name = {optionName}
                value = {optionName + value}
                defaultChecked = {optionIsDate && value === "Exact"}    // If date, "Exact" will be the defaultChecked radiobox, else it will be an unchecked checkbox
                onChange = {handleDelimiterChange}
            />
            <label htmlFor = {optionName + value}>{value}</label>
        </div>
    );
}

export default AdvancedSearchSelectable;