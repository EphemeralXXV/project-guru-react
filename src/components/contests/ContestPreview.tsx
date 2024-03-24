import { Link } from "react-router-dom";
import Truncate from "react-truncate";

import defaultThumbnail from "@/resources/rc2k_Image.png";

import abridgeDescription from "@/common/abridgeDescription";
import { getHosts, getContestStatus, Contest } from "@/common/predefinedContests";
import { toLocaleDateStringParams } from "@/common/util";

import Styles from "@/components/contests/ContestPreview.module.scss";

interface ContestPreviewProps {
    contest: Contest
}

const ContestPreview: React.FC<ContestPreviewProps> = ({ contest }) => {
    // const startDate = moment(contest.startDate, "MM/DD/YYYY", true).isValid() ? contest.startDate : null
    // const endDate = moment(contest.endDate, "MM/DD/YYYY", true).isValid() ? contest.endDate : null;  // Soft format check, wrong format defaults to TBA
    const [startDate, endDate] = [contest.startDate, contest.endDate]
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
                    <p className = {Styles.detail}>
                        <span className = {Styles.detailKey}>Start date:</span>
                        <span className = {Styles.detailValue}>{startDate?.toLocaleDateString(...toLocaleDateStringParams) || "TBA"}</span>
                    </p>
                    <p className = {Styles.detail}>
                        <span className = {Styles.detailKey}>End date:</span>
                        <span className = {Styles.detailValue}>{endDate?.toLocaleDateString(...toLocaleDateStringParams) || "TBA"}</span>
                    </p>
                    <p className = {Styles.detail}>
                        <span className = {Styles.detailKey}>Series:</span>
                        <span className = {Styles.detailValue}>
                            {["none", null].includes(contest.series) ?
                                "none" : 
                                <Link to = {"/series/" + contest.series}>
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