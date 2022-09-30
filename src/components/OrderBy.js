import orderGraphic from "@/resources/gearRatio5.png";

import Styles from "./OrderBy.module.scss";

const OrderBy = (props) => {
    const handleOptionChange = (event) => {
        props.onOptionChange(event.target.value);
    }
    const handleOrderChange = (event) => {
        let descending = props.direction === "descending";
        props.onDirectionChange(descending ? "ascending" : "descending");
        event.target.style.transform = `rotateY(${180*!descending}deg)`;
    }
    const directionCapitalized = props.direction[0].toUpperCase() + props.direction.slice(1);
    return (
        <div id = {Styles.orderBy}>
            <span>Order by:</span>
            <select id = {Styles.list} value = {props.option} onChange = {handleOptionChange}>
                <option value = "name">Name</option>
                <option value = "startDate">Start date</option>
                <option value = "endDate">End date</option>
            </select>
            <img id = {Styles.order} src = {orderGraphic} alt = {directionCapitalized} title = {directionCapitalized} onClick = {handleOrderChange} />
        </div>
    );
}

export default OrderBy;