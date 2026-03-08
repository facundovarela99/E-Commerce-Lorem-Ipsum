import { CounterCarrito } from "./CounterCarrito.jsx"
import styles from '../styles/imgProdCart.module.css'

export function CartItem({ producto }) {
    return (
        <li className="list-row w-4/4 flex justify-between">
            <div><img className={`size-50 rounded-box ${styles.imgProd}`} src={producto.url} /></div>
            <div className="w-2/4 flex flex-col items-center justify-around">
                <div className="uppercase font-bold mb-4 text-xl">{producto.nombre}</div>
                <p className="w-1/2 text-x uppercase font-semibold opacity-60 mb-4">{producto.descripcion}</p>
                <p className="text-lg uppercase font-semibold opacity-60 mb-4">{producto.quantity} x {producto.precio} = ${producto.quantity*producto.precio}</p>
            </div>
            <div className="card-actions justify-start items-center">
                <CounterCarrito producto={producto}/>
            </div>
        </li>
    )
}