import ContestPreview from "@/components/contests/ContestPreview";
import OrderBy from "@/components/OrderBy";

import { contests, orderContests } from "@/common/predefinedContests";

import Styles from "./Subpage.module.css";

const Contests = () => {
    const contestArray = Object.values(contests);
    const orderedContestArray = orderContests(contestArray, "startDate", true);
    return (
        <div id = {Styles.page}>
        <OrderBy />
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