import ContestOverview from "./ContestOverview";
import ContestRules from "./ContestRules";
import ContestItinerary from "./ContestItinerary";
import ContestResults from "./ContestResults";

import Styles from "./ContestDetailsPanel.module.scss";

const ContestDetailsPanel = (props) => {
    const overview =    <ContestOverview
                            name = {props.name}
                            poster = {props.poster}
                            startDate = {props.startDate}
                            endDate = {props.endDate}
                            status = {props.status}
                            series = {props.series}
                            host = {props.host}
                        >
                            {props.children}
                        </ContestOverview>;
    const rules =       <ContestRules>
                            {props.children} 
                        </ContestRules>;
    const itinerary =   <ContestItinerary>
                            {props.children} 
                        </ContestItinerary>;
    const results =     <ContestResults>
                            {props.children} 
                        </ContestResults>;
    const getContent = (tab) => {
        switch(tab) {
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
                {props.name}
            </h1>
            <hr/>
            <div className = {Styles.content}>
                {getContent(props.tab)}
            </div>
            <div style = {{clear: "both", height: "0"}} />   {/* Just to clear float: left (take the floated element's height into account, so that the container doesn't collapse if <p> is shorter) */}
        </div>
    );
}

export default ContestDetailsPanel;