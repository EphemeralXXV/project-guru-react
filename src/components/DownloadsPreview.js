import { useState } from 'react';
import { Link } from 'react-router-dom';

import downloadIcon from '@/resources/download_icon.png';

import Styles from './DownloadsPreview.module.scss';

const DownloadsPreview = (props) => {
    const [thumbnailHovered, setThumbnailHovered] = useState(false);
    const handleThumbnailHover = () => {
        setThumbnailHovered(prevState => !prevState);
    }
    const abridgeDescription = (description) => {
        description.trim();
        if(description.length >= 100) {
            description = description.substring(0, 98) + "...";
        }
        return description; 
    }

    return (
        <div className = {Styles.downloadsPreview}>
            <h1 className = {Styles.head}>
                {props.name}
            </h1>
            <div className = {Styles.thumbnailDiv} onMouseOver = {handleThumbnailHover} onMouseOut = {handleThumbnailHover}>
                <Link to = {"./" + props.name}>
                    <img className = {Styles.thumbnailPic} src = {props.thumbnail} alt = {props.name} />
                </Link>
                <a href = "https://mega.nz/#!UlAiWKDa!PLThVqBPFf_gzXL-WvfcYIUNkMQPaoiVKcUNUsUsA10" target = "_blank" >
                    <img className = {Styles.downloadIcon} src = {downloadIcon} style = {{visibility: thumbnailHovered ? "visible" : "hidden"}} alt = "Download" title = "Download" />
                </a>
            </div>
            <div className = {Styles.content}>
                <p className = {Styles.description}>
                    {abridgeDescription(props.description)}
                    <br />
                    <Link to = {"./" + props.name}>Read more...</Link>
                </p>
                <hr style = {{margin: "8px 0"}}/>
                <p>Category:&#0020; {/* &#0020; = whitespace */}
                    <Link to = {"/category/" + props.category}>
                        {props.category}
                    </Link>
                </p>
                <p>Author:&#0020;
                    <Link to = {"/user/" + props.author}>
                        {props.author}
                    </Link>
                </p>
                <p>Downloads: 999</p>
                <p>Rating: 10/10</p>
            </div>
        </div>
    );
}

export default DownloadsPreview;