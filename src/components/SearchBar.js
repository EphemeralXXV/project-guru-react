import { useState } from "react";

import searchIcon from "@/resources/searchIcon.png";

import Styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    }
    const handleSearchSubmit = (event) => {
        if(event.key === "Enter" || event.target.id === Styles.searchIcon) {
            props.onSearchChange(searchInput);
        }
    }

    return (
        <div id = {Styles.searchBar}>
            <input id = {Styles.simpleSearchInputField} placeholder = "Search..." onChange = {handleSearchChange} onKeyDown = {handleSearchSubmit}/>
            <img id = {Styles.searchIcon} src = {searchIcon} alt = "Search" title = "Search" onClick = {handleSearchSubmit} />
            <fieldset>
                <legend id = {Styles.advancedSearchButton}>Advanced search</legend>
                <div id = {Styles.advancedSearch}>
                    <div className = {Styles.advancedSearchOption}>
                        <span className = {Styles.advancedSearchOptionLabel}>Name:&#0020;</span>
                        <input />
                        <div className = {Styles.advancedSearchSelectables}>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "checkbox" name = "contestName" />
                                <label htmlFor = "contestName" >Exact</label>
                            </div>
                        </div>
                    </div>
                    <div className = {Styles.advancedSearchOption}>
                        <span className = {Styles.advancedSearchOptionLabel}>Start date:&#0020;</span>
                        <input type = "date" />
                        <div className = {Styles.advancedSearchSelectables}>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "radio" name = "contestStartDate" value = "startDateExact" defaultChecked = {true} />
                                <label htmlFor = "startDateExact">Exact</label>
                            </div>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "radio" name = "contestStartDate" value = "startDateBefore" />
                                <label htmlFor = "startDateBefore">Before</label>
                            </div>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "radio" name = "contestStartDate" value = "startDateAfter" />
                                <label htmlFor = "startDateAfter">After</label>
                            </div>
                        </div>
                    </div>
                    <div className = {Styles.advancedSearchOption}>
                        <span className = {Styles.advancedSearchOptionLabel}>End date:&#0020;</span>
                        <input type = "date" />
                        <div className = {Styles.advancedSearchSelectables}>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "radio" name = "contestEndDate" value = "endDateExact" defaultChecked = {true} />
                                <label htmlFor = "startDateExact">Exact</label>
                            </div>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "radio" name = "contestEndDate" value = "endDateBefore" />
                                <label htmlFor = "startDateBefore">Before</label>
                            </div>
                            <div className = {Styles.advancedSearchSelectable}>
                                <input type = "radio" name = "contestEndDate" value = "endDateAfter" />
                                <label htmlFor = "startDateAfter">After</label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default SearchBar;