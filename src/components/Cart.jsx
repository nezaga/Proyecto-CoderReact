import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const { cart, clear, deleteProduct, cartTotalPrice } = useContext(CartContext)

    return (
        <div>
            <h1>Tu Carrito</h1>
            {cart.length === 0 ?
                <div className="text-center">
                    <h2>¡No hay productos en tu carrito!</h2>
                    <Link to={"/"}><button className="btn btn-outline-secondary" type="button">Revisá nuestro catálogo</button></Link>
                </div>
            :
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.title}</td>
                                    <td>{producto.itemQty}</td>
                                    <td>
                                        <button onClick={() => deleteProduct(producto.id)} >
                                            Eliminar Producto
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr className="table-secondary">
                                <td></td>
                                <td><strong>Total</strong></td>
                                <td>US${cartTotalPrice()}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={clear}>Vaciar Carrito</button>
                    <Link to={"/checkout"}>
                        <button>Finalizar Compra</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Cart;