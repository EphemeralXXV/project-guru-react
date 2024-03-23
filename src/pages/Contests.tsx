import { useEffect, useState } from "react";

import ContestPreview from "@/components/contests/ContestPreview";
import OrderBy, { Direction } from "@/components/OrderBy";
import SearchBar from "@/components/searchBar/SearchBar";

import { Contest, contests, orderContests } from "@/common/predefinedContests";
import { AdvancedSearchOption, filterContestsByDate, filterContestsByName } from "@/common/searchBarUtils";

import Styles from "@/pages/Subpage.module.scss";

interface orderState {
    option: keyof Contest,
    direction: Direction
}

const Contests: React.FC<{}> = () => {
    const [order, setOrder] = useState<orderState>({option: "name", direction: Direction.DESC});
    const handleOrderOptionChange = (opt: keyof Contest): void => {
        setOrder(prevState => ({...prevState, option: opt}));
    }
    const handleOrderDirectionChange = (targetDir: Direction): void => {
        setOrder(prevState => ({...prevState, direction: targetDir}));
    }
    const [advancedSearch, setAdvancedSearch] = useState<boolean>(false);
    const [advancedOptions, setAdvancedOptions] = useState<AdvancedSearchOption[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const handleSearchChange = (value: string): void => {
        setAdvancedSearch(false);
        setSearchInput(value.trim().toLowerCase());
    }
    const handleAdvOptsChange = (advOpts: AdvancedSearchOption[]): void => {
        setAdvancedSearch(true);
        setAdvancedOptions(advOpts);
    }
    const contestArray = Object.values(contests);
    const orderedContestArray = orderContests(contestArray, order.option, order.direction);
    const filteredContestArray = orderedContestArray.filter((contest): boolean | null => {
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
                const value = contest[property as keyof Contest];
                if(typeof value === "string" && value.toLowerCase().includes(searchInput)) {
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
                {filteredContestArray.length > 0 ? filteredContestArray.map((contest: Contest, index: number): JSX.Element => {   // Mapping values, because keys are sub-objects (contests), values are their actual sets of properties
                        return  <ContestPreview
                                    contest = {contest}
                                    key = {index}
                                />;
                        }
                ) : <p style = {{gridColumn: "1/-1"}}>No contests found. Please change your search criteria or check back later.</p>}
            </div>
        </div>
    );
}

export default Contests;