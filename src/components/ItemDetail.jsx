import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    const { addToCart } = useContext(CartContext); // Traigo del CartContext específicamente la función addToCart desestructurado
    const [quantityToAdd, setquantityToAdd] = useState(0); //State donde se guarda lo que envía el ItemCount

    const onAdd = (itemQty) => {
        setquantityToAdd(itemQty);
        addToCart(item, itemQty); // Se ejecuta la función para agregar al state cart del CartProvider el item y su cantidad
    } // Función onAdd se define en IteamDetail, pero se ejecuta en el ItemCount

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
            {quantityToAdd === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to={"/cart"}><button className="btn btn-outline-secondary" type="button">Terminar mi compra</button></Link>}
        </div>
    )
}

export default ItemDetail;