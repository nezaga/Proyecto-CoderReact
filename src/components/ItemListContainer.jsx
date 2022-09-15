import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { products } from "./Products";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getProducts = () => 
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 2000);
            });
        
        if(!id) {
            getProducts()
            .then((response) => {
                setItems(response);
            })
            .catch((error) => {
                console.log(error)
            })    
        } else {
            getProducts()
            .then((response) => {
                setItems(response.filter(item => item.category === id));
            })
            .catch((error) => {
                console.log(error)
            })
        }    
    }, [id]);

    return (
        <div className="container">
            <h1 className="display-3">Titulo</h1>
            <p>{props.greeting}</p>
            <ItemList items={items}/>
        </div>
        

    )
}

export default ItemListContainer;