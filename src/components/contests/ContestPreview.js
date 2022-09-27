import { Link } from "react-router-dom";
import Truncate from "react-truncate";

import defaultThumbnail from "@/resources/rc2k_Image.png";

import abridgeDescription from "@/common/abridgeDescription";
import { getHosts, getContestStatus } from "@/common/predefinedContests";

import Styles from "./ContestPreview.module.scss";

const moment = require("moment");   // Import moment.js for date manipulation

const ContestPreview = (props) => {
    const [startDate, endDate] = [moment(props.startDate, "MM/DD/YYYY", true).isValid() ? props.startDate : "TBA", moment(props.endDate, "MM/DD/YYYY", true).isValid() ? props.startDate : "TBA"];  // Soft format check, wrong format defaults to TBA
    const contestStatus = getContestStatus(startDate, endDate);

    return (
        <div className = {Styles.contestPreview}>
            <h1 className = {Styles.head}>
                <Truncate lines = {1} ellipsis = "..." title = {props.name}>
                    {props.name}
                </Truncate>
            </h1>
            <div className = {Styles.thumbnailDiv}>
                <Link to = {"./" + props.name}>
                    <img className = {Styles.thumbnailPic} src = {props.thumbnail || defaultThumbnail} alt = {props.name} title = {props.name} />
                </Link>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.status} style = {{color: contestStatus.color}}>{contestStatus.text}</p>
                <hr/>
                <p className = {Styles.description}>
                    {abridgeDescription(props.description)}
                    <Link to = {"./" + props.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
                        &#0020;Read more... {/* &#0020; = whitespace */}
                    </Link>
                </p>
                <div className = {Styles.details}>
                    <hr/>
                    <p>Start date: {startDate}</p>
                    <p>End date: {endDate}</p>
                    <p>Series:&#0020;
                        {props.series === "none" ?
                            "none" : 
                            <Link to = {"/series/" + props.series}>
                                {props.series}
                            </Link>
                        }
                    </p>
                    <p>Hosted by: {getHosts(props.host)}</p>
                </div>
            </div>
        </div>
    );
}

export default ContestPreview;