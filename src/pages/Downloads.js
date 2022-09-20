import Styles from "./Index.module.css";

import DownloadsPreview from "@/components/DownloadsPreview";

const Downloads = () => {
    return (
        <div id = {Styles.page}>
            <div id = {Styles.main}>
                <p>Welcome to the Downloads page!</p>
                <DownloadsPreview
                    name = "RC2KEdit"
                    thumbnail = "https://cdn.discordapp.com/attachments/638834861796229120/662680465072717824/unknown.png"
                    description = "Fully functional track editor for RC2K allowing terraforming, texture swapping, lighting modifications and so much more!"
                    category = "Tools &amp; Utilies"
                    author = "Dummiesman"
                />
            </div>
        </div>
    );
}

export default Downloads;