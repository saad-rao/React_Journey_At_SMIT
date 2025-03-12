import React from "react";
import "./Cars.css";
import CarCards from "../CarCards/CarCards";

const Cars  = () => {
    return (
        <div className="cars">
            <CarCards price="$50k" name="AUDI"  image="https://images.dealer.com/ddc/vehicles/2025/Audi/A5/Hatchback/still/front-left/front-left-320-en_US.jpg?impolicy=resize&w=320"/>
            <CarCards price="$23k" name="LaFerrari"  image="https://cdn.shopify.com/s/files/1/2784/4966/files/M5905-363_-_Ferrari_La_Ferrari_Aperta_1.18_Scale_-_Front_3.4_2048x2048.jpg?v=1695633212"/>
            <CarCards price="$30k" name="Mercedes Menz" image="https://img.sm360.ca/images/article/humberviewgroup-941/114236//410908_2021_mercedes-benz_gle-class1684437019338.jpg"/>
            <CarCards price="$20k" name="Porsche" image="https://content.carlelo.com/uploads/model/porsche-911-1.webp"/>
            <CarCards price="$350k" name="Ford" image="https://build.ford.com/dig/Ford/F-150%20F-150/2025/HD-FULL%5BEXTBCK1%5D/Image%5B%7CFord%7CF-150%20F-150%7C2025%7C1%7C1.%7C500A..145.PUM..88J.89S.A5GAB.SS5.573.924.55D.BSHDF.BY1AM.CCAB.64T.AWD.995.779.%5D/EXT/4/vehicle.png  "/>
            <CarCards price="$29k" name="Lamborghini" image="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/s2-mobile.jpg"/>
        </div>
    )
}

export default Cars;