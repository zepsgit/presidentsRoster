import React from "react";
import { Card } from '../card/card.component'
import './card-list.style.css'
export const Cardlist = function (props) {
    return (
        <div className="cardList">
            {props.filteredPresident.map(item =>
                <Card key={item.id} president={item} img={item.img} />
            )}
        </div>
        
    )
}