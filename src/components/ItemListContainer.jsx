import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const products = [
            {"id":101, "name":"SET OF KORIKO® WEIGHTED SHAKING TINS","desc":"Stainless Steel", "price":21.98,  "category":1, "img":"my-react-app\src\assets\img\id-101.jpg"},
            {"id":201, "name":"LARGE ANTIQUE-STYLE HAWTHORNE STRAINER - COPPER PLATED", "desc":"Copper Plated", "price":27.99, "category":2, "img":"my-react-app\src\assets\img\id-201.jpg"},
            {"id":301, "name":"YARAI® MIXING GLASS", "desc":"500ml (17oz)", "price":30.99, "category":3, "img":"my-react-app\src\assets\img\id-301.jpg"},
            {"id":401, "name":"KIRUTO™ STACKABLE ROCKS GLASS", "desc":"6oz (180ml) / Case of 36", "price":135.00, "category":4, "img":"my-react-app\src\assets\img\id-401.jpg"},
            {"id":402, "name":"JULEP CUP", "desc":"Nickel-Plated / 12oz (360ml)", "price":18.99, "category":4, "img":"my-react-app\src\assets\img\id-402.jpg"}
        ];
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
    
        prom.then((response) => {
            setItems(response);
        })
    
    
    }, []);

    return (
        <div className="container">
            <h1 className="display-3">Titulo</h1>
            <p>{props.greeting}</p>
            <ItemList items={items}/>
            <ItemCount stock={5} initial={1} onAdd={0}/>
        </div>
        

    )
}

export default ItemListContainer;