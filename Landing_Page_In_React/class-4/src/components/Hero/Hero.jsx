import React from "react";
import "./Hero.css";
import { BsFileXFill } from "react-icons/bs";
// import adi from "../../assets/images/adi.jpg";  //for manual image import

const Hero =(props) => {
    // console.log("Props", props); 
return (


    <div className="hero-container" style={ {flexDirection:props.isDirectionRow ? 'row': 'row-reverse'}} >

<div className="hero-text">
    <h1 className="hero-heading">
    {props.heading}
    </h1>

    <p className="hero-description">
        {props.description}
        </p>

<button className="hero-button">Buy Now!</button>
</div>


<div className="hero-image">

<img src = {props.image} alt="cars pics" />

</div>

</div>
)
}

export default Hero;