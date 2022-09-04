import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className="display-3">Titulo</h1>
            <p>{props.greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={0}/>
        </div>
        

    )
}

export default ItemListContainer;