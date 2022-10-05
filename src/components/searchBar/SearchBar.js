import { useState } from "react";

import searchIcon from "@/resources/searchIcon.png";

import SearchBarAdvanced from "./SearchBarAdvanced";

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
    const handleAdvSearchChange = (name, startDate, endDate) => {
        props.onAdvOptsChange([name, startDate, endDate]);
    }

    return (
        <div id = {Styles.searchBar}>
            <input id = {Styles.simpleSearchInputField} placeholder = "Search..." onChange = {handleSearchChange} onKeyDown = {handleSearchSubmit}/>
            <img id = {Styles.searchIcon} src = {searchIcon} alt = "Search" title = "Search" onClick = {handleSearchSubmit} />
            <SearchBarAdvanced onAdvSearchChange = {handleAdvSearchChange} />
        </div>
    );
}

export default SearchBar;