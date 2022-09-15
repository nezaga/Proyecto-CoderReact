import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
            <div key={item.id} className="col-md-4 py3">
                <Item id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL} stock={item.stock}/>
            </div>))}
        </div>
    )
}

export default ItemList;