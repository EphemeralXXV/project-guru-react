import { useState } from "react";
import { useParams } from "react-router-dom";

import ContestDetailsPanel from "@/components/contests/ContestDetailsPanel";
import ContestDetailsTab from "@/components/contests/ContestDetailsTab";

import { contests as predefinedContests, placeholderContest } from "@/common/predefinedContests";

import Styles from "@/components/contests/ContestDetails.module.scss";

const tabs = ["overview", "rules", "itinerary", "results"] as const;
export type Tab = typeof tabs[number];

const ContestDetails: React.FC<{}> = () => {
    const { name } = useParams();                                                                   // Retrieve contest name (:name) from the URL
    const contest = predefinedContests.find(contest => contest.name === name) || placeholderContest // Access the object with the provided name from the static predefinedContests object collection
    const [activeTab, setActiveTab] = useState<Tab>("overview");
    const handleTabChange = (tab: Tab): void => {                                                   // This handler gets passed down to <ContestDetailsTab> where it is executed with props.name as the tab argument
        setActiveTab(tab);                                                                          // (regular function call with argument would result in massive re-renders)
    }

    return (
        <div className = {Styles.contestDetails}>
            <ul className = {Styles.tabs}>
                {tabs.map((value: string, index: number): React.JSX.Element => {
                    return <ContestDetailsTab name = {value} onTabClick = {handleTabChange} key = {index} active = {value === activeTab} />;
                })}
            </ul>
            <ContestDetailsPanel contest = {contest} tab = {activeTab}>
                {contest != null ? contest[activeTab] : "No data"}
            </ContestDetailsPanel>
        </div>
    );
}

export default ContestDetails;