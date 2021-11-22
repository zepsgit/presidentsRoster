import React from "react";
import './card.style.css'
export const Card = ({president}) => {
    return (
        <div className="card">
            <img style={{ width: "100%" }}
                alt="US president"
                src={president.img}/>

            <h2>{president.name}</h2>
            <h3>{president.presidency}</h3>
            <p>{president.saying}</p>
        </div>
    )

}