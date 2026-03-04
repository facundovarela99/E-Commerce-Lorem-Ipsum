import { CartContext } from "../contexts/CartContext.jsx"
import { useContext } from "react"
import styles from '../styles/imgProdCart.module.css'
import { CounterCarrito } from "./CounterCarrito.jsx";
import { useNavigate } from 'react-router-dom'

export function Cart() {

    const navigate = useNavigate();

    const { GetCart } = useContext(CartContext);
    const cart = GetCart();

    return (
        <>
            <h1 className="text-center text-2xl font-bold mb-6">CARRITO</h1>
            <div className="flex flex-row flex-wrap justify-center gap-6">
                {cart.length > 0 ? (
                    cart.map((producto) => (
                        <div key={producto.id} className="card flex flex-row bg-base-100 shadow-sm w-full">
                            <figure className={`${styles.imgProd} w-1/6`}>
                                <img src={producto.url} alt={producto.nombre} className="w-full h-full object-fill" />
                            </figure>
                            <div className="card-body flex flex-row justify-around items-center w-1/4">
                                <div className="infoCard">
                                    <h2 className="card-title">{producto.nombre}</h2>
                                    <h2 className="card-title">${producto.precio}</h2>
                                    <h2 className="card-title">Cantidad: {producto.quantity}</h2>
                                    <h2 className="card-title">Total: ${producto.precio * producto.quantity}</h2>
                                </div>
                                <div className="card-actions justify-start">
                                    <CounterCarrito producto={producto}/>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>El carrito está vacío</p>
                )}
            </div>
            <div className="flex flex-row justify-center mt-6">
                <button className="btn btn-primary mt-6" onClick={()=> navigate(`/checkout`)}>Finalizar compra</button>
            </div>
        </>

    )
}