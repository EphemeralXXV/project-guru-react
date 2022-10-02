import { useState } from "react";
import AdvancedSearchOption from "./AdvancedSearchOption";

import Styles from "./SearchBarAdvanced.module.scss";

const SearchBarAdvanced = () => {
    const [fieldVisible, setFieldVisible] = useState(false);
    const handleFieldToggle = () => {
        setFieldVisible(prevState => !prevState);
    }
    return (
        <>
            <p id = {Styles.advancedSearchButton} style = {fieldVisible ? {display: "none"} : {display: "inline-block"}} onClick = {handleFieldToggle}>Advanced search</p>
            <fieldset id = {fieldVisible ? Styles.advancedSearch : Styles.advancedSearchHidden} style = {fieldVisible ? {display: "block"} : {display: "none"}}>
                <legend id = {Styles.advancedSearchButton} onClick = {handleFieldToggle}>Advanced search</legend>
                <div id = {Styles.advancedSearchContents}>
                    <AdvancedSearchOption name = "Name" type = "text" />
                    <AdvancedSearchOption name = "Start date" type = "date" />
                    <AdvancedSearchOption name = "End date" type = "date" />
                </div>
            </fieldset>
        </>
    );
}

export default SearchBarAdvanced;