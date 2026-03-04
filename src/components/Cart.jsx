import { CartContext } from "../contexts/CartContext.jsx"
import { useContext } from "react"
import { CounterCarrito } from "./CounterCarrito.jsx";
import { useNavigate } from 'react-router-dom'
import { CartItem } from "./CartItem.jsx";

export function Cart() {

    const navigate = useNavigate();

    const { GetCart } = useContext(CartContext);
    const cart = GetCart();

    return (
        <>
            <div className="flex justify-center mt-20 w-2/3">
                <ul className="list bg-base-100 rounded-box shadow-md border w-full">
                    <li className="p-4 pb-2 tracking-wide">Carrito</li>
                    {cart.map((producto)=> <CartItem key={producto.id} producto={producto}/>)}
                </ul>
            </div>
            <div className="flex flex-row justify-center mt-6">
                <button className="btn btn-primary mt-6" onClick={()=> navigate(`/checkout`)}>Finalizar compra</button>
            </div>
        </>

    )
}