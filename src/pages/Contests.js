import { useState } from "react";

import ContestPreview from "@/components/contests/ContestPreview";
import OrderBy from "@/components/OrderBy";
import SearchBar from "@/components/SearchBar";

import { contests, orderContests } from "@/common/predefinedContests";

import Styles from "./Subpage.module.css";

const Contests = () => {
    const [order, setOrder] = useState({option: "name", direction: "descending"});
    const [searchInput, setSearchInput] = useState("");
    const handleOptionChange = (opt) => {
        setOrder(prevState => ({...prevState, option: opt}));
    }
    const handleDirectionChange = (dir) => {
        setOrder(prevState => ({...prevState, direction: dir}));
    }
    const handleSearchChange = (value) => {
        setSearchInput(value.trim().toLowerCase());
        console.log(searchInput);
    }
    const contestArray = Object.values(contests);
    const orderedContestArray = orderContests(contestArray, order.option, order.direction);
    const filteredContestArray = orderedContestArray.filter((contest) => {
        let returnValue = null; // Array.prototype.filter() requires a return statement at the very end of the arrow function, so this is a little workaround for that. If no match is found, null is returned (current contest is filtered out).
        for(const property in contest) {
            if(typeof contest[property] === "string" && contest[property].toLowerCase().includes(searchInput)) {
                returnValue = contest;
            }
        }
        return returnValue;
    });

    return (
        <div id = {Styles.page}>
            <SearchBar onSearchChange = {handleSearchChange} />
            <OrderBy onOptionChange = {handleOptionChange} onDirectionChange = {handleDirectionChange} option = {order.option} direction = {order.direction} /> {/* Lift OrderBy's state up by passing handlers as props */}
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