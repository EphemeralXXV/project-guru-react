import { useState } from "react";
import { useParams } from "react-router-dom";

import ContestDetailsPanel from "./ContestDetailsPanel";
import ContestDetailsTab from "./ContestDetailsTab";

import predefinedContests from "@/common/predefinedContests";

import Styles from "./ContestDetails.module.scss";

const ContestDetails = (props) => {
    const { name } = useParams();               // Use props.name as the contest page URL
    const contest = predefinedContests[name];   // Access the object with the provided name from the static predefinedContests object collection
    const [activeTab, setActiveTab] = useState("overview");
    const handleTabChange = (tab) => {          // This handler gets passed down to <ContestDetailsTab> where it is executed with props.name as the tab argument
        setActiveTab(tab);                      // (regular function call with argument would result in massive re-renders)
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
                name = {name}
                poster = {contest.poster}
                status = {{text: "Finished", color: "red"}} 
                startDate = {contest.startDate}
                endDate = {contest.endDate}
                series = {contest.series}
                host = {contest.host}
            >
                {contest[activeTab]}
            </ContestDetailsPanel>
        </div>
    );
}

export default ContestDetails;