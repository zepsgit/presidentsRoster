import React from "react";
import { Card } from '../card/card.component'
import './card-list.style.css'
export const Cardlist = function (props) {
    return (
        <div className="cardList">
            {props.monster.map(monster=><Card key={monster.id} monster={monster}/>)}
        </div>
        
    )
}