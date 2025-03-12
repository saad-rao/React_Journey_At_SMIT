import React from "react";
import "./CarCards.css";
const CarCards = (props) => {

    return(
        <>
        <div className="car-card">
            <div className="car-image-container" >
    <img src = {props.image} alt={props.name}/>
    </div>

    <div className="car-details">
    <h2 className="car-name">{props.name}</h2>
    <p className="car-price">{props.price}</p>
    <button className="car-buy-button">Buy</button>
    </div>

</div>
</>


    )
}

export default CarCards;
