import ContestPreview from "@/components/contests/ContestPreview";

import { contests } from "@/common/predefinedContests";

import Styles from "./Subpage.module.css";

const Contests = () => {
    return (
        <div id = {Styles.page}>
            <div id = {Styles.main}>
                {Object.values(contests).map((contest, index) => {   // Mapping values, because keys are sub-objects (contests), values are their actual sets of properties
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