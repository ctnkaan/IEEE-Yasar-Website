import React from 'react'
import Classes from "../../styles/Body.module.css";
import Banner from "../../resources/ieee-yasar-body.jpg";

function Body() {
    return (
        <div>
            <img className={Classes.bannerClass} src= {Banner} alt = "ieee yasar banner"></img>
        </div>
    )
}

export default Body;