import { Link } from "react-router-dom";
import Truncate from "react-truncate";
import moment from "moment";   // Import moment.js for date manipulation

import defaultThumbnail from "@/resources/rc2k_Image.png";

import abridgeDescription from "@/common/abridgeDescription";
import { getHosts, getContestStatus, Contest } from "@/common/predefinedContests";

import Styles from "@/components/contests/ContestPreview.module.scss";

interface ContestPreviewProps {
    contest: Contest
}

const ContestPreview: React.FC<ContestPreviewProps> = ({ contest }) => {
    const [startDate, endDate] = [moment(contest.startDate, "MM/DD/YYYY", true).isValid() ? contest.startDate : "TBA", moment(contest.endDate, "MM/DD/YYYY", true).isValid() ? contest.endDate : "TBA"];  // Soft format check, wrong format defaults to TBA
    const contestStatus = getContestStatus(startDate as Date, endDate as Date);

    return (
        <div className = {Styles.contestPreview}>
            <h1 className = {Styles.head}>
                <Truncate lines = {1} ellipsis = "..." title = {contest.name || "Unknown contest"}>
                    {contest.name}
                </Truncate>
            </h1>
            <div className = {Styles.thumbnailDiv}>
                <Link to = {"./" + contest.name}>
                    <img
                        className = {Styles.thumbnailPic}
                        src = {contest.posterURL || defaultThumbnail}
                        alt = {contest.name || "Unknown contest"}
                        title = {contest.name || "Unknown contest"}
                    />
                </Link>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.status} style = {{color: contestStatus.color}}>{contestStatus.text}</p>
                <hr/>
                <p className = {Styles.description}>
                    {abridgeDescription(contest.overview || "No description available.")}
                    <Link to = {"./" + contest.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
                        &#0020;Read more... {/* &#0020; = whitespace */}
                    </Link>
                </p>
                <div className = {Styles.details}>
                    <hr/>
                    <p>Start date: {startDate?.toString()}</p>
                    <p>End date: {endDate?.toString()}</p>
                    <p>Series:&#0020;
                        {["none", null].includes(contest.series) ?
                            "none" : 
                            <Link to = {"/series/" + contest.series}>
                                {contest.series}
                            </Link>
                        }
                    </p>
                    <p>Hosted by: {getHosts(contest.hosts || [])}</p>
                </div>
            </div>
        </div>
    );
}

export default ContestPreview;