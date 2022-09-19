import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, itemQty) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].itemQty += itemQty;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, itemQty:itemQty}]);            
        }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => { 
        return cart.reduce((total, item) => total+=item.itemQty, 0);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clear, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;