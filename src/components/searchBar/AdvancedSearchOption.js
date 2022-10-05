import Styles from "./AdvancedSearchOption.module.scss";
import AdvancedSearchSelectable from "./AdvancedSearchSelectable";

const AdvancedSearchOption = (props) => {
    const optionName = props.name.replace(  // Turn the name into PascalCase (to stick to one naming convention)
        /(\w)(\w*)\s*/g,                    // (\w) -> firstLetter (any word character), (\w*) -> restOfWord (any sequence of word characters), \s -> whitespaces
        (match, firstLetter, restOfWord) => firstLetter.toUpperCase() + restOfWord.toLowerCase()   // Capitalize the first letter of each word
    );
    return (
        <div className = {Styles.advancedSearchOption}>
            <span className = {Styles.advancedSearchOptionLabel}>{optionName}:&#0020;</span>
            <input type = {props.type} />
            <div className = {Styles.advancedSearchSelectables}>
                <AdvancedSearchSelectable type = {props.type} name = {optionName} value = "Exact" />
                {props.type === "date" &&   // Date options also get Before... and After... switches, everything else is just toggled between Exact and not
                    <>
                        <AdvancedSearchSelectable type = "date" name = {optionName} value = "Before" />
                        <AdvancedSearchSelectable type = "date" name = {optionName} value = "After" />
                    </>
                }
            </div>
        </div>
    );
}

export default AdvancedSearchOption;