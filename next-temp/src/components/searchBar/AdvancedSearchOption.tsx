import { useState } from "react";

import AdvancedSearchSelectable from "@/components/searchBar/AdvancedSearchSelectable";

import Styles from "@/components/searchBar/AdvancedSearchOption.module.scss";

interface AdvancedSearchOptionProps {
    name: string,
    type: string,
    minDate?: Date,
    maxDate?: Date,
    onAdvOptChange: (searchInput: string, delimiter: string) => void,
    onAdvOptSubmit: () => void
}

const AdvancedSearchOption: React.FC<AdvancedSearchOptionProps> = ({ name, type, minDate, maxDate, onAdvOptChange, onAdvOptSubmit }) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(event.target.value);
        onAdvOptChange(event.target.value, delimiter);
    }
    const [delimiter, setDelimiter] = useState<string>("none");
    const handleDelimiterChange = (value: string): void => {
        setDelimiter(value);
        onAdvOptChange(searchInput, value);
    }
    const handleAdvOptSubmit = (event: React.KeyboardEvent): void => {
        if(event.key === "Enter") {
            onAdvOptSubmit();
        }
    }
    const optionName = name.replace(                                                                // Turn the name into PascalCase (to stick to one naming convention)
        /(\w)(\w*)\s*/g,                                                                            // (\w) -> firstLetter (any word character), (\w*) -> restOfWord (any sequence of word characters), \s -> whitespaces
        (match, firstLetter, restOfWord) => firstLetter.toUpperCase() + restOfWord.toLowerCase()    // Capitalize the first letter of each word
    );                                                                                              // [props.name ought to be a string of space-separated words: "Like this", "or like this"]
    const displayedOptionName = name[0].toUpperCase() + name.slice(1).toLowerCase();                // First letter of props.name capital, the rest in lowercase
    return (
        <div className = {Styles.advancedSearchOption}>
            <span className = {Styles.advancedSearchOptionLabel}>{displayedOptionName}:&#0020;</span>
            <input
                type = {type}
                onChange = {handleSearchChange}
                onKeyDown = {handleAdvOptSubmit}
                style = {{color: (type === "date" && searchInput !== "") ? "black" : "initial"}}
                min = {minDate?.toString()}
                max = {maxDate?.toString()}
            />
            <div className = {Styles.advancedSearchSelectables}>
                <AdvancedSearchSelectable type = {type} name = {optionName} value = "Exact" onDelimiterChange = {handleDelimiterChange} />
                {type === "date" &&   // Date options also get Before... and After... switches, everything else is just toggled between Exact and not
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