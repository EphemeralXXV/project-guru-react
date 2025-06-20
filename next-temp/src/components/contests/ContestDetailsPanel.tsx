import ContestOverview from "@/components/contests/ContestOverview";
import ContestRules from "@/components/contests/ContestRules";
import ContestItinerary from "@/components/contests/ContestItinerary";
import ContestResults from "@/components/contests/ContestResults";

import Styles from "@/components/contests/ContestDetailsPanel.module.scss";

import { Tab } from "@/components/contests/ContestDetails";
import { Contest } from "@/common/predefinedContests";

interface ContestDetailsPanelProps {
    contest: Contest,
    tab: Tab,
    children: React.ReactNode
}

const ContestDetailsPanel: React.FC<ContestDetailsPanelProps> = ({ contest, tab, children }) => {
    const overview =    <ContestOverview contest = {contest}>
                            {children}
                        </ContestOverview>;
    const rules =       <ContestRules>
                            {children} 
                        </ContestRules>;
    const itinerary =   <ContestItinerary>
                            {children} 
                        </ContestItinerary>;
    const results =     <ContestResults>
                            {children} 
                        </ContestResults>;
    const getContent = (tabName: Tab): React.JSX.Element => {
        switch(tabName) {
            case "rules":
                return rules;
            case "itinerary":
                return itinerary;
            case "results":
                return results;
            default:
                return overview;
        }
    }
    return (
        <div className = {Styles.contestDetailsPanel}>
            <h1 className = {Styles.head}>
                {contest.name}
            </h1>
            <hr/>
            <div className = {Styles.content}>
                {getContent(tab)}
            </div>
            <div style = {{clear: "both", height: "0"}} />   {/* Just to clear float: left (take the floated element's height into account, so that the container doesn't collapse if <p> is shorter) */}
        </div>
    );
}

export default ContestDetailsPanel;