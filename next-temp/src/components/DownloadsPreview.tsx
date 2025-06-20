import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

import abridgeDescription from "@/common/abridgeDescription";

import defaultThumbnail from "@/resources/rc2k_Image.png";
import downloadIcon from "@/resources/download_icon.png";
import ratingBarEmpty from "@/resources/rating_bar_empty.png";
import ratingBarFill from "@/resources/rating_bar_fill.png";

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
                <Link to = {`/${propertyName}/${item}`}>
                    {item}
                </Link>
                {index === arrayProperty.length ? "" : ", "}
            </Fragment>
        ))
    }

    return (
        <div className = {Styles.downloadsPreview}>
            <h1 className = {Styles.head}>
                <Truncate lines = {1} ellipsis = "..." title = {item.name}>
                    {item.name}
                </Truncate>
            </h1>
            <div className = {Styles.thumbnailDiv} onMouseOver = {handleThumbnailHover} onMouseOut = {handleThumbnailHover}>
                <Link to = {"./" + item.name}>
                    <img className = {Styles.thumbnailPic} src = {item.thumbnailURL || defaultThumbnail} alt = {item.name} title = {item.name} />
                </Link>
                <a href = {item.downloadLink} target = "_blank" rel = "noreferrer" >
                    <img
                        className = {Styles.downloadIcon}
                        src = {downloadIcon}
                        style = {{visibility: thumbnailHovered ? "visible" : "hidden"}}
                        alt = "Download"
                        title = "Download"
                    />
                </a>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.description}>
                    {abridgeDescription(item.description)}
                    <Link to = {"./" + item.name} style = {{display: "inline-block", float: "right", lineHeight: "1.5"}}>
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
                                src = {ratingBarFill}
                                alt = {item.rating.toString()}
                                className = {Styles.ratingBarFill}
                                style = {{clipPath: "inset(0px " + (100 - item.rating) + "% 0px 0px)"}}
                            />
                            <img src = {ratingBarEmpty} alt = {item.rating.toString()} className = {Styles.ratingBarEmpty} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadsPreview;