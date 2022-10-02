import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, doc, writeBatch, increment } from "firebase/firestore"; 
import { Link } from "react-router-dom";
import Success from "./Success";


const Checkout = () => {
    const { cart, clear , cartTotalPrice } = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    // Función para actualizar el stock
    const updateStock = () => {
        // Se trae la DB preparada para actualizar tipo batch
        const batch = writeBatch(db);
        
        // Se recorre el Cart para actualizar sólo los items de la colección items que se hayan comprado
        cart.forEach(item => {
            // Se trae el Doc específico
            const itemDoc = doc(db, "items", item.id);

            // Se actualiza el stock con la operación update e increment
            batch.update(itemDoc, {stock: increment(-item.itemQty) })
            
        });
        // Se hace el commit en todos los productos que se hayan comprado
        batch.commit();
    };

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            //Creo el objeto con los Datos del Comprador
            const buyer = {name:nombre, email:email, phone:telefono};
            
            //Creo el array de productos
            const items = [];
            cart.forEach(item => { 
                //Recorro el array del Carrito y se agregan los productos en el array que se enviará a Firestore
                items.push({id:item.id, title:item.title, price:item.price, quantity:item.itemQty});
            });
            
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            
            //Creo el objeto con todos los datos de la Compra
            const order = {buyer:buyer, items:items, date:now, total:cartTotalPrice()};
            
            //Creo la conexión al Firestore, para cargar la Orden de Compra
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order)
            .then(({id}) => {
                setOrderId(id);
                updateStock();
                clear();
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
    
    return (
        <div>
            <h1>Finalizá tu compra</h1>
            {orderId === "" ? 
                cart.length === 0 ?
                    <div className="text-center">
                        <h2>¡No hay productos en tu carrito!</h2>
                        <Link to={"/"}><button className="btn btn-outline-secondary" type="button">Revisá nuestro catálogo</button></Link>
                    </div>
                :
                    <div className="row">
                        <div className="col-md-4 offset-md-2">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={() => {sendOrder()}}>Generar Orden</button>
                        </div>
                        <div className="col-md-5">
                            <table className="table">
                                <tbody>
                                    {cart.map(producto => (
                                        <tr key={producto.id}>
                                            <td className="text-start"><img src={producto.pictureURL} alt={producto.title} title={producto.title} width="120" /></td>
                                            <td className="text-start align-middle">{producto.title} x {producto.itemQty}</td>
                                            <td className="text-end align-middle">US${producto.itemQty * producto.price}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                        <td className="text-end fw-bold">US${cartTotalPrice()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            :
                <Success id={orderId}/>}
        </div>
    )
}

export default Checkout;