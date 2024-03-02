import { Link } from "react-router-dom";

import defaultThumbnail from "@/resources/rc2k_Image.png";

import { Contest, getContestStatus } from "@/common/predefinedContests";

import Styles from "@/components/contests/ContestOverview.module.scss";

interface ContestOverviewProps {
    contest: Contest,
    children: React.ReactNode
}

const ContestOverview: React.FC<ContestOverviewProps> = ({ contest, children }) => {
    const contestStatus = getContestStatus(contest.startDate, contest.endDate);
    return (
        <div className = {Styles.contestOverview}>
            <div className = {Styles.details}>
                <img
                    className = {Styles.poster}
                    src = {contest.posterURL || defaultThumbnail}
                    alt = {contest.name || "Unknown contest"}
                    title = {contest.name || "Unknown contest"}
                />
                <div className = {Styles.info}>
                    <p className = {Styles.status} style = {{color: contestStatus.color}}>{contestStatus.text}</p>
                    <p>Start date: {contest.startDate?.toString()}</p>
                    <p>End date: {contest.endDate?.toString()}</p>
                    <p>Series:&#0020;
                        {["none", null].includes(contest.series) ?
                            "none" : 
                            <Link to = {"/series/" + contest.series}>
                                {contest.series}
                            </Link>
                        }
                    </p>
                    <p>Hosted by: {contest.hosts?.join(",")}</p>
                </div>
            </div>
            <p className = {Styles.description}>
                {children}
            </p>
        </div>
    );
}

export default ContestOverview;