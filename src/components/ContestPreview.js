import { Link } from "react-router-dom";

import defaultThumbnail from "@/resources/rc2k_Image.png";
import abridgeDescription from "@/common/abridgeDescription";

import Styles from "./ContestPreview.module.scss";

const moment = require("moment");   // Import moment.js

const ContestPreview = (props) => {
    const getHosts = (hosts) => {
        return hosts.map((host, index) =>
            <span key = {index}>
                <Link to = {"/user/" + host}>
                    {host}
                </Link>
                {index ? "" : ", "}
            </span>
        )
    }
    const getContestStatus = (startDate, endDate) => {
        const today = new Date();
        const [unknownStartDate, unknownEndDate] = [startDate === "TBA", endDate === "TBA"];  // Check if start date isn't announced yet (TBA)
        if(!unknownStartDate) {
            startDate = new Date(startDate);
        }
        if(!unknownEndDate) {
            endDate = new Date(endDate);
        }
        // Might want to add more checks here
        if(startDate > today || unknownStartDate) {
            return {status: "Upcoming", color: "#00FF00"};
        }
        else if(endDate < today) {
            return {status: "Finished", color: "#FF0000"};
        }
        else {
            return {status: "Ongoing", color: "#FFA500"};
        }
    }
    const [startDate, endDate] = [moment(props.startDate, "MM/DD/YYYY", true).isValid() ? props.startDate : "TBA", moment(props.endDate, "MM/DD/YYYY", true).isValid() ? props.startDate : "TBA"];  // Soft format check, wrong format defaults to TBA
    const contestStatus = getContestStatus(startDate, endDate);

    return (
        <div className = {Styles.contestPreview}>
            <h1 className = {Styles.head}>
                {props.name}
            </h1>
            <div className = {Styles.thumbnailDiv}>
                <Link to = {"./" + props.name}>
                    <img className = {Styles.thumbnailPic} src = {props.thumbnail || defaultThumbnail} alt = {props.name} title = {props.name} />
                </Link>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.status} style = {{color: contestStatus.color}}>{contestStatus.status}</p>
                <hr/>
                <p className = {Styles.description}>
                    {abridgeDescription(props.description)}
                    <Link to = {"./" + props.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
                        &#0020;Read more... {/* &#0020; = whitespace */}
                    </Link>
                </p>
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
                <p>Hosted by:&#0020;
                    {getHosts(props.host)}
                </p>
            </div>
        </div>
    );
}

export default ContestPreview;