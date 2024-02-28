import { useState } from "react";

import ContestPreview from "@/components/contests/ContestPreview";
import OrderBy from "@/components/OrderBy";
import SearchBar from "@/components/searchBar/SearchBar";

import { contests, orderContests } from "@/common/predefinedContests";
import { filterContestsByDate, filterContestsByName } from "@/common/searchBarUtils";

import Styles from "./Subpage.module.css";

const Contests = () => {
    const [order, setOrder] = useState({option: "name", direction: "descending"});
    const handleOrderOptionChange = (opt) => {
        setOrder(prevState => ({...prevState, option: opt}));
    }
    const handleOrderDirectionChange = (dir) => {
        setOrder(prevState => ({...prevState, direction: dir}));
    }
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [advancedOptions, setAdvancedOptions] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const handleSearchChange = (value) => {
        setAdvancedSearch(false);
        setSearchInput(value.trim().toLowerCase());
    }
    const handleAdvOptsChange = (advOpts) => {
        setAdvancedSearch(true);
        setAdvancedOptions(advOpts);
    }
    const contestArray = Object.values(contests);
    const orderedContestArray = orderContests(contestArray, order.option, order.direction);
    const filteredContestArray = orderedContestArray.filter((contest) => {
        let returnValue = null; // Array.prototype.filter() requires a return statement at the very end of the arrow function, so this is a little workaround for that. If no match is found, null is returned (current contest is filtered out).
        if(advancedSearch) {
            returnValue = true;
            if(advancedOptions[0].value !== "") {
                returnValue &&= filterContestsByName(contest.name, advancedOptions[0]);
            }
            if(advancedOptions[1].value !== "") {
                returnValue &&= filterContestsByDate(contest.startDate, advancedOptions[1]);
            }
            if(advancedOptions[2].value !== "") {
                returnValue &&= filterContestsByDate(contest.endDate, advancedOptions[2]);
            }
        }
        else {
            for(const property in contest) {    // If any property of string type matches the query...
                if(typeof contest[property] === "string" && contest[property].toLowerCase().includes(searchInput)) {
                    returnValue = true;         // ...return the contest...
                    break;                      // ...no need to check other properties
                }
            }
        }
        return returnValue;
    });

    return (
        <div id = {Styles.page}>
            <SearchBar onSearchChange = {handleSearchChange} onAdvOptsChange = {handleAdvOptsChange} />
            <OrderBy onOptionChange = {handleOrderOptionChange} onDirectionChange = {handleOrderDirectionChange} option = {order.option} direction = {order.direction} /> {/* Lift OrderBy's state up by passing handlers as props */}
            <div id = {Styles.main}>
                {filteredContestArray.length > 0 ? filteredContestArray.map((contest, index) => {   // Mapping values, because keys are sub-objects (contests), values are their actual sets of properties
                        return  <ContestPreview
                                    name = {contest.name}
                                    thumbnail = {contest.posterURL}
                                    description = {contest.overview}
                                    startDate = {contest.startDate}
                                    endDate = {contest.endDate}
                                    series = {contest.series}
                                    host = {contest.hosts}
                                    key = {index}
                                />;
                        }
                ) : <p style = {{gridColumn: "1/-1"}}>No contests found. Please change your search criteria or check back later.</p>}
            </div>
        </div>
    );
}

export default Contests;