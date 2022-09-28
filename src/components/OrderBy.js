import { useState } from "react";

const OrderBy = () => {
    const [option, setOption] = useState("name");
    const handleOptionChange = (event) => {
        setOption(event.target.value);
    }
    return (
        <>
            <p>Order by:</p>
            <select value = {option} onChange = {handleOptionChange}>
                <option value = "name">Name</option>
                <option value = "startDate">Start date</option>
                <option value = "endDate">End date</option>
            </select>
        </>
    );
}

export default OrderBy;