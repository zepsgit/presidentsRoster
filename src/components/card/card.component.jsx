import React from "react";
import './card.style.css'
export const Card = ({president}) => {
    return (
        <a href={`http://google.com/search?q=${president.name}`}
         alt="president photo" style={{textDecoration:"none"}} target="_blank">
            <div className="card">
            <img style={{ width: "80%" }}
                alt="US president"
                src={president.img}/>

            <h2>{president.name}</h2>
            <h3>{president.presidency}</h3>
            <p>{president.saying}</p>
        </div>
        </a>
            
    )

}