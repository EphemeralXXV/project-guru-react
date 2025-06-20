import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { toFixedLengthString } from "@/common/util";
import { stageNames } from "@/common/stages";

import Styles from "@/pages/Stages.module.scss";

const getStageContainer = (stageNumber: number): React.JSX.Element => {
    const stagesImagePath = "resources/Stages/Images";
    const imagePath = stagesImagePath + `/stage${toFixedLengthString(stageNumber, 2)}.png`;
    const stageName = stageNames[stageNumber];
    const stageContainer =
        <>
            <span className = {Styles.stageName}>{stageName}</span>
            <img src = {require("@/" + imagePath)} alt = {stageName} className = {Styles.stageImage}/>
        </>;
    return stageContainer;
}

const StagesPage: React.FC<{}> = () => {
    useEffect((): void => {
        console.log("Window loaded");
    }, []);

    // Generate stage divs using array mapping
    const stagesDiv: React.JSX.Element[] = [];
    for(let rallyNumber = 0; rallyNumber < 6; rallyNumber++) {
        const rallyContainer: React.JSX.Element[] = [];
        for(let stageNumber = 0; stageNumber < 6; stageNumber++) {
            rallyContainer.push(<span className = {Styles.stageContainer} key = {stageNumber}>{getStageContainer(6 * rallyNumber + stageNumber)}</span>);
        }
        stagesDiv.push(<div className = {Styles.rallyContainer} key = {rallyNumber}>{rallyContainer}</div>);
    }

    return (
        <>            
            <Helmet>
                <meta charSet = "UTF-8" />
                <meta name = "viewport" content = "width = device-width, initial-scale = 1.0" />
                <title>Stages</title>
            </Helmet>
            <div id = {Styles.page}>    
                <div id = {Styles.stagesContainer}>
                    {stagesDiv}
                </div>
            </div>
        </>
    );
}

export default StagesPage;