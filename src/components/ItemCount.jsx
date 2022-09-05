import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemStock, setItemStock] = useState(stock);
    const [itemQty, setItemQty] = useState(initial);
    const [itemAdd, setItemAdd] = useState(onAdd);

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
        setItemStock(itemStock - itemQty);
        setItemAdd(itemAdd + itemQty);
        }
    }

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
                    <p className="text-center">Cantidad seleccionada: {itemAdd} </p>
                </div>
            </div>
        </div>
    )
};

export default ItemCount;