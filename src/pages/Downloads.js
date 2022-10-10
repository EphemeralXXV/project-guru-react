import { downloads } from "@/common/predefinedDownloads";

import DownloadsPreview from "@/components/DownloadsPreview";

import Styles from "./Subpage.module.css";

const Downloads = () => {
    const downloadsArray = Object.values(downloads);
    return (
        <div id = {Styles.page}>
        <p style = {{color: "white"}}>Welcome to the Downloads page!</p>
            <div id = {Styles.main}>
                {downloadsArray.map((download, index) =>
                    <DownloadsPreview
                        uploadDate = {download.uploadDate}
                        modifiedDate = {download.modifiedDate}
                        name = {download.name}
                        downloadLink = {download.downloadLink}
                        thumbnail = {download.thumbnail}
                        description = {download.description}
                        category = {download.category}
                        author = {download.author}
                        downloadCount = {download.downloadCount}
                        rating = {download.rating}
                        key = {index}
                    />
                )}
            </div>
        </div>
    );
}

export default Downloads;