import {CartContext} from './CartContext.jsx'
import { useState, useEffect } from 'react'

export function CartProvider({children}){
    const [cart, SetCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Persist cart in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (producto) =>{
        console.log('Producto en addToCart: ', producto)
        const IsInCart = cart.some(prod => prod.id === producto.id);
        if (!IsInCart) {
            SetCart([...cart, producto])
        } else {
            const updatedCart = cart.map(item => {
                if (item.id === producto.id) return {...item, quantity: item.quantity + producto.quantity}
                return item
            })
            SetCart(updatedCart)
        }
    }

    const substractFromCart = (producto) => {
        const updatedCart = cart
            .map(item => {
                if (item.id === producto.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
            .filter(item => item.quantity > 0);
        SetCart(updatedCart);
    }

    const removeFromCart = (productoId) => {
        const updatedCart = cart.filter(prod => prod.id !== productoId);
        SetCart(updatedCart);
    }

    const GetTotalProducts = () =>{
        const totalQuantity = cart.reduce((acc, current) => acc + current.quantity, 0);
        return totalQuantity
    }

    const GetCart = () =>{
        return cart;
    }

    return(
        <CartContext.Provider value={{addToCart, GetTotalProducts, GetCart, removeFromCart, substractFromCart}}>
            {children}
        </CartContext.Provider>
    )
}