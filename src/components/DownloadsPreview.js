import { useState } from "react";
import { Link } from "react-router-dom";

import abridgeDescription from "@/common/abridgeDescription";

import defaultThumbnail from "@/resources/rc2k_Image.png";
import downloadIcon from "@/resources/download_icon.png";
import ratingBarEmpty from "@/resources/rating_bar_empty.png";
import ratingBarFill from "@/resources/rating_bar_fill.png";

import Styles from "./DownloadsPreview.module.scss";

const DownloadsPreview = (props) => {
    const [thumbnailHovered, setThumbnailHovered] = useState(false);
    const handleThumbnailHover = () => {
        setThumbnailHovered(prevState => !prevState);
    }

    return (
        <div className = {Styles.downloadsPreview}>
            <h1 className = {Styles.head}>
                {props.name}
            </h1>
            <div className = {Styles.thumbnailDiv} onMouseOver = {handleThumbnailHover} onMouseOut = {handleThumbnailHover}>
                <Link to = {"./" + props.name}>
                    <img className = {Styles.thumbnailPic} src = {props.thumbnail || defaultThumbnail} alt = {props.name} title = {props.name} />
                </Link>
                <a href = {props.downloadLink} target = "_blank" rel = "noreferrer" >
                    <img className = {Styles.downloadIcon} src = {downloadIcon} style = {{visibility: thumbnailHovered ? "visible" : "hidden"}} alt = "Download" title = "Download" />
                </a>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.description}>
                    {abridgeDescription(props.description)}
                    <Link to = {"./" + props.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
                        &#0020;Read more... {/* &#0020; = whitespace */}
                    </Link>
                </p>
                <hr/>
                <div className = {Styles.details}>
                    <p>Category:&#0020;
                        <Link to = {"/category/" + props.category}>
                            {props.category}
                        </Link>
                    </p>
                    <p>Author:&#0020;
                        <Link to = {"/user/" + props.author}>
                            {props.author}
                        </Link>
                    </p>
                    <p>Downloads: {props.downloadCount}</p>
                    <p>Rating:&#0020;
                        <div className = {Styles.ratingBar} title = {props.rating / 10 + "/10"}>
                            <img src = {ratingBarFill} alt = {props.rating} className = {Styles.ratingBarFill} style = {{clipPath: "inset(0px " + (100 - props.rating) + "% 0px 0px)"}} />
                            <img src = {ratingBarEmpty} alt = {props.rating} className = {Styles.ratingBarEmpty} />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DownloadsPreview;