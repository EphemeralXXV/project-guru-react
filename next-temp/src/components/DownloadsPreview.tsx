"use client";

import { useState, Fragment } from "react";
import Link from "next/link";

import abridgeDescription from "@/common/abridgeDescription";

import Styles from "@/components/DownloadsPreview.module.scss";

import { Download } from "@/common/predefinedDownloads";

interface DownloadsPreviewProps {
    item: Download
}

const DownloadsPreview: React.FC<DownloadsPreviewProps> = ({ item }) => {
    const [thumbnailHovered, setThumbnailHovered] = useState<boolean>(false);
    const handleThumbnailHover = (): void => {
        setThumbnailHovered(prevState => !prevState);
    }
    const mapLinks = (arrayProperty: string[], propertyName: string): React.JSX.Element[] => {
        return arrayProperty.map((item, index) => (
            <Fragment key = {index}>
                <Link href = {`/${propertyName}/${item}`}>
                    {item}
                </Link>
                {index === arrayProperty.length ? "" : ", "}
            </Fragment>
        ))
    }

    return (
        <div className = {Styles.downloadsPreview}>
            <h1 className = {Styles.head}>
                <span title = {item.name || "Unknown resource"}>
                    {item.name || "Unknown resource"}
                </span>
            </h1>
            <div className = {Styles.thumbnailDiv} onMouseOver = {handleThumbnailHover} onMouseOut = {handleThumbnailHover}>
                <Link href = {"./" + item.name}>
                    <img
                        className = {Styles.thumbnailPic}
                        src = {item.thumbnailURL || "/static/images/rc2k_Image.png" /* Default thumbnail */}
                        alt = {item.name}
                        title = {item.name}
                    />
                </Link>
                <a href = {item.downloadLink} target = "_blank" rel = "noreferrer" >
                    <img
                        className = {Styles.downloadIcon}
                        src = "/static/images/download_icon.png"
                        style = {{visibility: thumbnailHovered ? "visible" : "hidden"}}
                        alt = "Download"
                        title = "Download"
                    />
                </a>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.description}>
                    {abridgeDescription(item.description)}
                    <Link href = {"./" + item.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
                        &#0020;Read more... {/* &#0020; = whitespace */}
                    </Link>
                </p>
                <hr/>
                <div className = {Styles.details}>
                    <p>Upload date: {item.uploadDate.toString()}</p>
                    <p>Last modified: {item.modifiedDate.toString()}</p>
                    <p>Categories: {mapLinks(item.categories, "category")}</p>
                    <p>Author(s): {mapLinks(item.authors, "user")}</p>
                    <p>Downloads: {item.downloadCount}</p>
                    <div className = {Styles.rating}>
                        <p>Rating:&#0020;</p>
                        <div className = {Styles.ratingBar} title = {item.rating / 10 + "/10"}>
                            <img
                                src = "/static/images/rating_bar_fill.png"
                                alt = {item.rating.toString()}
                                className = {Styles.ratingBarFill}
                                style = {{clipPath: "inset(0px " + (100 - item.rating) + "% 0px 0px)"}}
                            />
                            <img src = "/static/images/rating_bar_empty.png" alt = {item.rating.toString()} className = {Styles.ratingBarEmpty} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadsPreview;