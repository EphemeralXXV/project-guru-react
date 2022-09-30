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
            <input id = {Styles.inputField} placeholder = "Search..." onChange = {handleSearchChange} onKeyDown = {handleSearchSubmit}/>
            <img id = {Styles.searchIcon} src = {searchIcon} alt = "Search" title = "Search" onClick = {handleSearchSubmit} />
            <p id = {Styles.advancedSearchButton}>Advanced search</p>
        </div>
    );
}

export default SearchBar;