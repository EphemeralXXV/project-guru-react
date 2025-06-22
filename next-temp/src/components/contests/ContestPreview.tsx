import Link from "next/link";
import moment from "moment";   // Import moment.js for date manipulation

import abridgeDescription from "@/common/abridgeDescription";
import { getHosts, getContestStatus, Contest } from "@/common/predefinedContests";

import Styles from "@/components/contests/ContestPreview.module.scss";

interface ContestPreviewProps {
    contest: Contest
}

const ContestPreview: React.FC<ContestPreviewProps> = ({ contest }) => {
    const [startDate, endDate] = [moment(contest.startDate, "MM/DD/YYYY", true).isValid() ? contest.startDate : null, moment(contest.endDate, "MM/DD/YYYY", true).isValid() ? contest.endDate : null];  // Soft format check, wrong format defaults to TBA
    const contestStatus = getContestStatus(startDate as Date, endDate as Date);

    return (
        <div className = {Styles.contestPreview}>
            <h1 className = {Styles.head}>
                <span title = {contest.name || "Unknown contest"}>
                    {contest.name || "Unknown contest"}
                </span>
            </h1>
            <div className = {Styles.thumbnailDiv}>
                <Link href = {"./" + contest.name}>
                    <img
                        className = {Styles.thumbnailPic}
                        src = {contest.posterURL || "/static/images/rc2k_Image.png" /* Default thumbnail */}
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
                    <Link href = {"./" + contest.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
                        &#0020;Read more... {/* &#0020; = whitespace */}
                    </Link>
                </p>
                <div className = {Styles.details}>
                    <hr/>
                    <p className = {Styles.detail}>
                        <span className = {Styles.detailKey}>Start date:</span>
                        <span className = {Styles.detailValue}>{startDate?.toString() || "TBA"}</span>
                    </p>
                    <p className = {Styles.detail}>
                        <span className = {Styles.detailKey}>End date:</span>
                        <span className = {Styles.detailValue}>{endDate?.toString() || "TBA"}</span>
                    </p>
                    <p className = {Styles.detail}>
                        <span className = {Styles.detailKey}>Series:</span>
                        <span className = {Styles.detailValue}>
                            {["none", null].includes(contest.series) ?
                                "none" : 
                                <Link href = {"/series/" + contest.series}>
                                    {contest.series}
                                </Link>
                            }
                        </span>
                    </p>
                    <p className = {Styles.detail}>Hosted by: {getHosts(contest.hosts || [])}</p>
                </div>
            </div>
        </div>
    );
}

export default ContestPreview;