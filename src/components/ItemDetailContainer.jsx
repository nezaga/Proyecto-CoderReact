import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "./Products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const getProduct = () =>
            new Promise ((resolve, reject) => {
                const product = products.find((prod) => prod.id === 101)
                setTimeout(() => {
                    resolve(product)
                }, 2000)
            });

            getProduct()
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