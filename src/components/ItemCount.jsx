import React, { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemStock, setItemStock] = useState(stock);
    const [itemQty, setItemQty] = useState(initial);

    const substractQty = (value) => {
        if (value > 0) {
            setItemQty(value);
        }
    }

    const addQty = (value) => {
        if (value <= itemStock) {
            setItemQty(value);
        }
    }

    const addToCart = () => {
        if (itemQty <= itemStock) {
        onAdd(itemQty) // Se ejecuta la función definida en ItemDetail, se le envía como parámetro el state itemQty, donde se guarda la información de cuántos items seleccionó el usuario del producto.
        setItemStock(itemStock - itemQty);
        }
    }

    useEffect(() => { 
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-md-3 bg-light">
                    <p className="text-center pt-3"><strong>Producto 1</strong></p>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={() => {substractQty(itemQty - 1)}}>-</button>
                        <input type="text" className="form-control" value={itemQty} onChange={() =>{}}></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {addQty(itemQty + 1)}}>+</button>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-primary" type="button" onClick={() => {addToCart()}}>Agregar al carrito</button>
                    </div>
                    <hr/>
                    <p className="text-center">Stock Disponible: {itemStock} </p>
                </div>
            </div>
        </div>
    )
};

export default ItemCount;