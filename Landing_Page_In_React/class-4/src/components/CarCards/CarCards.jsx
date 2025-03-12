import React from "react";
import "./CarCards.css";
const CarCards = (props) => {

    return(
        <>
        <div className="car-card">
    <img src = {props.image} alt={props.name}/>
    <h2>{props.name}</h2>

</div>
</>


    )
}

export default CarCards;
