import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => <Item id={item.id} name={item.name} desc={item.desc} price={item.price} category={item.category} img={item.img} />)}
        </div>
    )
}

export default ItemList;