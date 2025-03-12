import React from "react";
import "./Hero.css";
// import adi from "../../assets/images/adi.jpg";  //for manual image import

const Hero =(props) => {
    // console.log("Props", props); 
return (


    <div className="hero-container">

<div className="hero-text">
    <h1>
    {props.heading}
    </h1>

    <p>
        {props.description}
        </p>

<button>Explore More!</button>
</div>


<div className="hero-image">

<img src = {props.image} alt="cars pics" />

</div>

</div>
)
}

export default Hero;