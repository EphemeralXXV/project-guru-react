import { useState } from "react";

import ContestPreview from "@/components/contests/ContestPreview";
import OrderBy from "@/components/OrderBy";
import SearchBar from "@/components/searchBar/SearchBar";

import { contests, orderContests } from "@/common/predefinedContests";

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
        console.log(advOpts);
    }
    const contestArray = Object.values(contests);
    const orderedContestArray = orderContests(contestArray, order.option, order.direction);
    const filteredContestArray = orderedContestArray.filter((contest) => {
        let returnValue = null; // Array.prototype.filter() requires a return statement at the very end of the arrow function, so this is a little workaround for that. If no match is found, null is returned (current contest is filtered out).
        if(advancedSearch) {
            let name, startDate, endDate;
            if(advancedOptions[0].value !== "") {
                name = advancedOptions[0].delimiter === "Exact" ? advancedOptions[0].value : advancedOptions[0].value.trim().toLowerCase();
                return advancedOptions[0].delimiter === "Exact" ? contest.name === name : contest.name.toLowerCase().includes(name);
            }
            if(advancedOptions[1].value !== "") {
                startDate = advancedOptions[1].value
            }
            if(advancedOptions[2].value !== "") {
                endDate = advancedOptions[2].value
            }
        }
        else {
            for(const property in contest) {
                if(typeof contest[property] === "string" && contest[property].toLowerCase().includes(searchInput)) {
                    returnValue = contest;
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
                {filteredContestArray.map((contest, index) => {   // Mapping values, because keys are sub-objects (contests), values are their actual sets of properties
                        return  <ContestPreview
                                    name = {contest.name}
                                    thumbnail = {contest.poster}
                                    description = {contest.overview}
                                    startDate = {contest.startDate}
                                    endDate = {contest.endDate}
                                    series = {contest.series}
                                    host = {contest.host}
                                    key = {index}
                                />;
                        }
                )}
            </div>
        </div>
    );
}

export default Contests;