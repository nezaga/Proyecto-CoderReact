import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    // Traigo del contexto la función para contar el total de items del carrito
    const { cartTotal } =  useContext(CartContext)
    // Asigno una variable al resultado de la función para agregarla en el widget
    const totalItems = cartTotal();

    return (
        <Link to={"/cart"}>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge bg-primary rounded-pill">{totalItems}</span>
            </div>
        </Link>
    )
}

export default CartWidget;
