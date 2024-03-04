import orderGraphic from "@/resources/gearRatio5.png";

import Styles from "@/components/OrderBy.module.scss";

enum Direction {
    "ASC" = "ascending",
    "DESC" = "descending"
}

interface OrderByProps {
    direction: Direction,
    option: string,
    onOptionChange: (value: string) => void,
    onDirectionChange: (direction: Direction) => void
}

const OrderBy: React.FC<OrderByProps> = ({ direction, option, onOptionChange, onDirectionChange }) => {
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        onOptionChange(event.target.value);
    }
    const handleOrderChange = (event: React.MouseEvent<HTMLElement>): void => {
        let descending = direction === "descending";
        onDirectionChange(descending ? Direction.DESC : Direction.ASC);
        (event.target as HTMLElement).style.transform = `rotateY(${180*(descending ? 0 : 1)}deg)`;
    }
    const directionCapitalized = direction[0].toUpperCase() + direction.slice(1);
    return (
        <div id = {Styles.orderBy}>
            <span>Order by:</span>
            <select id = {Styles.list} value = {option} onChange = {handleOptionChange}>
                <option value = "name">Name</option>
                <option value = "startDate">Start date</option>
                <option value = "endDate">End date</option>
            </select>
            <img id = {Styles.order} src = {orderGraphic} alt = {directionCapitalized} title = {directionCapitalized} onClick = {handleOrderChange} />
        </div>
    );
}

export default OrderBy;