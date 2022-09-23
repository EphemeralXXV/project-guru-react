import { useState } from "react";

import ContestDetailsPanel from "./ContestDetailsPanel";
import ContestDetailsTab from "./ContestDetailsTab";

import Styles from "./ContestDetails.module.scss";

const ContestDetails = (props) => {
    const [activeTab, setActiveTab] = useState("overview");
    const handleTabChange = (tab) => {  // This handler gets passed down to <ContestDetailsTab> where it is executed with props.name as the tab argument
        setActiveTab(tab);              // (regular function call with argument would result in massive re-renders)
    }
    const tabs = ["overview", "rules", "itinerary", "results"];

    return (
        <div className = {Styles.contestDetails}>
            <ul className = {Styles.tabs}>
                {tabs.map((value, index) => {
                    return <ContestDetailsTab name = {value} onTabClick = {handleTabChange} key = {index} active = {value === activeTab ? true : false} />;
                })}
            </ul>
            <ContestDetailsPanel
                tab = {activeTab}
                name = "MFMI21"
                poster = "https://cdn.discordapp.com/attachments/419267523070918656/845239594152886292/flyer.png"
                status = {{text: "Finished", color: "red"}} 
                startDate = "29/07/2021"
                endDate = "08/08/2021"
                series = "MFMI"
                host = "Ephemeral, Linotrix" >
                {props[activeTab]}
            </ContestDetailsPanel>
        </div>
    );
}

export default ContestDetails;