import { Link } from "react-router-dom";

import Styles from "./ContestDetailsPanel.module.scss";

const ContestDetailsPanel = (props) => {
    return (
        <div className = {Styles.contestDetailsPanel}>
            <h1 className = {Styles.head}>
                {props.name}
            </h1>
            <hr/>
            <div className = {Styles.content}>
                <div className = {Styles.details}>
                    <img className = {Styles.poster} src = {props.poster} alt = {props.name} title = {props.name} />
                    <div className = {Styles.info}>
                        <p className = {Styles.status} style = {{color: props.status.color}}>{props.status.text}</p>
                        <p>Start date: {props.startDate}</p>
                        <p>End date: {props.endDate}</p>
                        <p>Series:&#0020;
                            {props.series === "none" ?
                                "none" : 
                                <Link to = {"/series/" + props.series}>
                                    {props.series}
                                </Link>
                            }
                        </p>
                        <p>Hosted by: {props.host}</p>
                    </div>
                </div>
                <p className = {Styles.description}>
                    {props.children}
                </p>
            </div>
            <div style = {{clear: "both", height: "0"}} />   {/* Just to clear float: left (take the floated element's height into account, so that the container doesn't collapse if <p> is shorter) */}
        </div>
    );
}

export default ContestDetailsPanel;