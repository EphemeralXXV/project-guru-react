import Styles from "./AdvancedSearchOption.module.scss";

const AdvancedSearchOption = (props) => {
    const optionName = "contest" + props.name;
    const optionIsDate = props.type === "date";
    return (
        <div className = {Styles.advancedSearchOption}>
            <span className = {Styles.advancedSearchOptionLabel}>{props.name}:&#0020;</span>
            <input type = {props.type} />
            <div className = {Styles.advancedSearchSelectables}>
                <div className = {Styles.advancedSearchSelectable}>
                    <input type = {optionIsDate ? "radio" : "checkbox"} name = {optionName} value = {optionIsDate && optionName + "Exact"} defaultChecked = {optionIsDate} />
                    <label htmlFor = {optionName}>Exact</label>
                </div>
                {props.type === "date" &&
                    <>
                        <div className = {Styles.advancedSearchSelectable}>
                            <input type = "radio" name = {optionName} value = {optionName + "Before"} />
                            <label htmlFor = {optionName + "Before"}>Before</label>
                        </div>
                        <div className = {Styles.advancedSearchSelectable}>
                            <input type = "radio" name = {optionName} value = {optionName + "After"} />
                            <label htmlFor = {optionName + "After"}>After</label>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default AdvancedSearchOption;