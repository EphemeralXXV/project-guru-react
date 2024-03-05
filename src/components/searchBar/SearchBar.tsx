import { useState } from "react";

import searchIcon from "@/resources/searchIcon.png";

import SearchBarAdvanced from "@/components/searchBar/SearchBarAdvanced";
import { AdvancedSearchOption } from "@/common/searchBarUtils";

import Styles from "@/resources/SearchBar.module.scss";

interface SearchBarProps {
    onSearchChange: (searchInput: string) => void,
    onAdvOptsChange: (advOpts: AdvancedSearchOption[]) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange, onAdvOptsChange }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(event.target.value);
    }
    const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>): void => {
        if('key' in event && event.key === "Enter" ||  (event.target as HTMLElement).id === Styles.searchIcon) {
            onSearchChange(searchInput);
        }
    }
    const handleAdvSearchChange = (advOpts: AdvancedSearchOption[]): void => {
        onAdvOptsChange(advOpts);
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