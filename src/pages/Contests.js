import { useState } from "react";

import ContestPreview from "@/components/contests/ContestPreview";
import OrderBy from "@/components/OrderBy";

import { contests, orderContests } from "@/common/predefinedContests";

import Styles from "./Subpage.module.css";

const Contests = () => {
    const [order, setOrder] = useState({option: "name", direction: "descending"});
    const handleOptionChange = (opt) => {
        setOrder(prevState => ({...prevState, option: opt}));
    }
    const handleDirectionChange = (dir) => {
        setOrder(prevState => ({...prevState, direction: dir}));
    }
    const contestArray = Object.values(contests);
    const orderedContestArray = orderContests(contestArray, order.option, order.direction);

    return (
        <div id = {Styles.page}>
        <OrderBy onOptionChange = {handleOptionChange} onDirectionChange = {handleDirectionChange} option = {order.option} direction = {order.direction} /> {/* Lift OrderBy's state up by passing handlers as props */}
            <div id = {Styles.main}>
                {orderedContestArray.map((contest, index) => {   // Mapping values, because keys are sub-objects (contests), values are their actual sets of properties
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
                })}
            </div>
        </div>
    );
}

export default Contests;