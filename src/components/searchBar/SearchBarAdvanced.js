import { useState } from "react";

import AdvancedSearchOption from "./AdvancedSearchOption";

import Styles from "./SearchBarAdvanced.module.scss";

const SearchBarAdvanced = (props) => {
    const [name, setName] = useState({value: "", delimiter: "none"});
    const [startDate, setStartDate] = useState({value: "", delimiter: "Exact"});
    const [endDate, setEndDate] = useState({value: "", delimiter: "Exact"});
    const handleNameChange = (val, del) => {
        setName({value: val, delimiter: del});
    }
    const handleStartDateChange = (val, del) => {
        setStartDate({value: val, delimiter: del});
    }
    const handleEndDateChange = (val, del) => {
        setEndDate({value: val, delimiter: del});
    }
    const [fieldVisible, setFieldVisible] = useState(false);
    const handleFieldToggle = () => {
        setFieldVisible(prevState => !prevState);
    }
    const handleAdvOptsChange = () => {
        props.onAdvSearchChange(name, startDate, endDate);
    }
    return (
        <>
            <p id = {Styles.advancedSearchButton} style = {fieldVisible ? {display: "none"} : {display: "inline-block"}} onClick = {handleFieldToggle}>Advanced search</p>
            <fieldset id = {fieldVisible ? Styles.advancedSearch : Styles.advancedSearchHidden} style = {fieldVisible ? {display: "block"} : {display: "none"}}>
                <legend id = {Styles.advancedSearchButton} onClick = {handleFieldToggle}>Advanced search</legend>
                <div id = {Styles.advancedSearchContents}>
                    <AdvancedSearchOption name = "Name" type = "text" onAdvOptChange = {handleNameChange}/>
                    <AdvancedSearchOption name = "Start date" type = "date" onAdvOptChange = {handleStartDateChange} />
                    <AdvancedSearchOption name = "End date" type = "date" onAdvOptChange = {handleEndDateChange} />
                </div>
            <button onClick = {handleAdvOptsChange}>Search</button>
            </fieldset>
        </>
    );
}

export default SearchBarAdvanced;