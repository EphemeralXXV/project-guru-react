import { useEffect } from 'react';
import { toFixedLengthString } from "@/common/util";
import { stageNames } from "@/common/stages";

import { Helmet } from 'react-helmet';

import Styles from './Stages.module.css';

const getStageContainer = (stageNumber) => {
    const stagesImagePath = 'resources/Stages/Images';
    const imagePath = stagesImagePath + `/stage${toFixedLengthString(stageNumber, 2)}.png`;
    const stageName = stageNames[stageNumber];
    const stageContainer =
        <>
            <span className = {Styles.stageName}>{stageName}</span>
            <img src = {require('@/' + imagePath)} alt = {stageName} className = {Styles.stageImage}/>
        </>;
    return stageContainer;
}

const StagesPage = () => {
    useEffect(() => {
        console.log('Window loaded');
    }, []);

    // Generate stage divs using array mapping
    let stagesDiv = [];
    for(let rallyNumber = 0; rallyNumber < 6; rallyNumber++){
        let rallyContainer = [];
        for(let stageNumber = 0; stageNumber < 6; stageNumber++){
            rallyContainer.push(<span className = {Styles.stageContainer} key = {stageNumber}>{getStageContainer(6 * rallyNumber + stageNumber)}</span>);
        }
        stagesDiv.push(<div className = {Styles.rallyContainer} key = {rallyNumber}>{rallyContainer}</div>);
    }

    return (
        <>            
            <Helmet>
                <meta charset = "UTF-8" />
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