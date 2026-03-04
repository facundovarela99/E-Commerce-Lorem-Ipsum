import styles from '../styles/ProductDetail.module.css'
import { Counter } from "./Counter.jsx";

export function Product({producto}){
    return(
        <div className={styles.divProductoDetail}>
            {producto
            ? (<img className={styles.imgProductDetail} src={producto.url} alt={producto.name}/>)
            : <div className="skeleton h-32 w-32"></div>
            }
            <h1 className="text-3xl">{producto.nombre}</h1>
            <h2 className="text-3xl">{producto.descripcion}</h2>
            <h2 className="text-3xl">${producto.precio}</h2>
            <div className={styles.divBotonesCarrito}>
                <Counter producto={producto}/>               
            </div>
        </div>
    )
}