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
    const handleAdvOptSubmit = () => {  // "Fast-forward" submit - if user hits enter inside input
        props.onAdvSearchChange(name, startDate, endDate);
    }
    return (
        <>
            <p id = {Styles.advancedSearchToggleButton} style = {fieldVisible ? {display: "none"} : {display: "inline-block"}} onClick = {handleFieldToggle}>Advanced search</p>
            <fieldset id = {fieldVisible ? Styles.advancedSearch : Styles.advancedSearchHidden} style = {fieldVisible ? {display: "block"} : {display: "none"}}>
                <legend id = {Styles.advancedSearchToggleButton} onClick = {handleFieldToggle}>Advanced search</legend>
                <div id = {Styles.advancedSearchContents}>
                    <AdvancedSearchOption name = "Name" type = "text" onAdvOptChange = {handleNameChange} onAdvOptSubmit = {handleAdvOptSubmit} />
                    <AdvancedSearchOption name = "Start date" type = "date" onAdvOptChange = {handleStartDateChange} onAdvOptSubmit = {handleAdvOptSubmit} />
                    <AdvancedSearchOption name = "End date" type = "date" onAdvOptChange = {handleEndDateChange} onAdvOptSubmit = {handleAdvOptSubmit} />
                </div>
            <button id = {Styles.advancedSearchSubmitButton} onClick = {handleAdvOptsChange}>Search</button> {/* Should perhaps change it to the RC2K-style button in the future */}
            </fieldset>
        </>
    );
}

export default SearchBarAdvanced;