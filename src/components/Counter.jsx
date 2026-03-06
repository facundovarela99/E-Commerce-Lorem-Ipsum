import { useEffect } from "react";
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext.jsx'
import toast from 'react-hot-toast';


export function Counter({ producto }) {

    const [counter, setCounter] = useState(0);
    const { addToCart } = useContext(CartContext);

    const handlerAddToCart = () => {
        toast('¡Se agregó el producto al carrito!', { duration: 1500 })
        addToCart({ ...producto, quantity: counter })
    }

    const handlerSuma = () => setCounter(counter + 1);

    const handlerResta = () => {
        if (counter === 0) {
            setCounter(counter - 0)
        } else {
            setCounter(counter - 1)
        }
    };

    useEffect(() => {
        return () => {
        }
    }, [counter])

    return (
        <div className="flex flex-col w-3/3">
            <p className="text-center text-2xl">Cantidad a agregar: {counter}</p>
            <div className="flex place-content-evenly flex-col items-center min-h-48">
                <button onClick={handlerSuma} className="bg-green-500 px-8 py-3 rounded cursor-pointer"><strong>Sumar</strong></button>
                <button onClick={handlerResta} className="bg-red-500 px-8 py-3 rounded cursor-pointer"><strong>Restar</strong></button>
                <button className="btn btn-primary cursor-pointer" onClick={handlerAddToCart} disabled={counter < 1}>Agregar al carrito</button>
            </div>
        </div>
    )
}