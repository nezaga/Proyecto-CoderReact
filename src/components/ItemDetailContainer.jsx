import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "./Products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const { id } = useParams();

    useEffect(() => {
        const getProduct = (id) =>
            new Promise ((resolve, reject) => {
                const product = products.find((prod) => prod.id === id)
                setTimeout(() => {
                    resolve(product)
                }, 2000)
            });

            getProduct(id)
            .then((response) =>{
                setItem(response)
            })
            .catch((error) => {
                console.log(error)
            })

    },[])

    return (
        <div className="container" style={{ maxWidth: '50vw' }}>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;