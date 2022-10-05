import { useState } from "react";

import AdvancedSearchSelectable from "./AdvancedSearchSelectable";

import Styles from "./AdvancedSearchOption.module.scss";

const AdvancedSearchOption = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
        props.onAdvOptChange(event.target.value, delimiter);
    }
    const [delimiter, setDelimiter] = useState("none");
    const handleDelimiterChange = (value) => {
        setDelimiter(value);
        props.onAdvOptChange(searchInput, value);
    }
    const optionName = props.name.replace(                                                          // Turn the name into PascalCase (to stick to one naming convention)
        /(\w)(\w*)\s*/g,                                                                            // (\w) -> firstLetter (any word character), (\w*) -> restOfWord (any sequence of word characters), \s -> whitespaces
        (match, firstLetter, restOfWord) => firstLetter.toUpperCase() + restOfWord.toLowerCase()    // Capitalize the first letter of each word
    );                                                                                              // [props.name ought to be a string of space-separated words: "Like this", "or like this"]
    const displayedOptionName = props.name[0].toUpperCase() + props.name.slice(1).toLowerCase();    // First letter of props.name capital, the rest in lowercase
    return (
        <div className = {Styles.advancedSearchOption}>
            <span className = {Styles.advancedSearchOptionLabel}>{displayedOptionName}:&#0020;</span>
            <input type = {props.type} onChange = {handleSearchChange}/>
            <div className = {Styles.advancedSearchSelectables}>
                <AdvancedSearchSelectable type = {props.type} name = {optionName} value = "Exact" onDelimiterChange = {handleDelimiterChange} />
                {props.type === "date" &&   // Date options also get Before... and After... switches, everything else is just toggled between Exact and not
                    <>
                        <AdvancedSearchSelectable type = "date" name = {optionName} value = "Before" onDelimiterChange = {handleDelimiterChange} />
                        <AdvancedSearchSelectable type = "date" name = {optionName} value = "After" onDelimiterChange = {handleDelimiterChange} />
                    </>
                }
            </div>
        </div>
    );
}

export default AdvancedSearchOption;