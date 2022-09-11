import React from "react";
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {

    return (
        <div>
            <div>
                <img src={item.pictureURL} alt={item.title} />
                <h2>{item.title}</h2>
                <ul>
                    <li>A Set of 2 Koriko® Weighted Tins (large and small) has a 2 drink capacity.</li>
                    <li>Koriko® Tins are designed for a good fit with easier separation after shaking.</li>
                    <li>Small Weighted Shaking Tin 18oz (532ml) & Large Weighted Shaking Tin 28oz (830ml).</li>
                </ul>
                <h3 className="text-center">US${item.price}</h3>
            </div>
            <ItemCount stock={5} initial={1} onAdd={0}/>
        </div>
    )
}

export default ItemDetail;