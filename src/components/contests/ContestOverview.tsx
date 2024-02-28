import { Link } from "react-router-dom";

import Styles from "./ContestOverview.module.scss";

const ContestOverview = (props) => {
    return (
        <div className = {Styles.contestOverview}>
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
    );
}

export default ContestOverview;