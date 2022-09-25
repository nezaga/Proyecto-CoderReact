import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //Función para agregar productos al carrito (valida si ya existe ese producto en el carrito y suma cantidad)
    const addToCart = (item, itemQty) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].itemQty += itemQty;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, itemQty:itemQty}]);            
        }
    }

    //Función para borrar el carrito
    const clear = () => {
        setCart([]);
    }

    //Función para encontrar un producto en el carrito
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    //Función para contar cantidad total de items
    const cartTotal = () => { 
        const cartCopy = [...cart]
        let totalItems = 0
        cartCopy.forEach((x) => {
            totalItems += x.itemQty
        })
        return totalItems;
    }

    //Función para borrar un sólo producto
    const deleteProduct = (id) => {
        const filteredCart = cart.filter((x) => x.id !== id);
        setCart(filteredCart);
    };

    //Función para calcular precio total
    const cartTotalPrice = () => { 
        const cartCopy = [...cart]
        let totalItemsPrice = 0
        cartCopy.forEach((x) => {
            totalItemsPrice += x.itemQty * x.price
        })
        return totalItemsPrice.toFixed(2);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clear, cartTotal, deleteProduct, cartTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;