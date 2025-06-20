import { downloads } from "@/common/predefinedDownloads";

import DownloadsPreview from "@/components/DownloadsPreview";

import Styles from "@/pages/Subpage.module.scss";

const Downloads: React.FC<{}> = () => {
    const downloadsArray = Object.values(downloads);
    return (
        <div id = {Styles.page}>
        <p style = {{color: "white"}}>Welcome to the Downloads page!</p>
            <div id = {Styles.main}>
                {downloadsArray.map((download, index) =>
                    <DownloadsPreview
                        item = {download}
                        key = {index}
                    />
                )}
            </div>
        </div>
    );
}

export default Downloads;