import React from "react";
import "./Hero.css";
import adi from "../../assets/images/adi.jpg";

const Hero =(props) => {
return (


    <div className="hero-container">

<div className="hero-text">
    <h1>
    Audi SUV Sedan
    </h1>

    <p>Introducing the all-new Audi Q6 e-tron, a premium mid-size all-electric SUV that boasts an EPA-estimated range of 321 miles
        (RWD equipped with Ultra package)—allowing you to 
        get where you want to go in state-of-the-art style. 
        </p>

<button>Explore More!</button>
</div>


<div className="hero-image">

<img src = {adi} alt="audi" />

</div>

</div>
)
}

export default Hero;