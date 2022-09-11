import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { products } from "./Products";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getProducts = () => 
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 2000);
            });
    
        getProducts()
            .then((response) => {
                setItems(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div className="container">
            <h1 className="display-3">Titulo</h1>
            <p>{props.greeting}</p>
            <ItemList items={items}/>
        </div>
        

    )
}

export default ItemListContainer;