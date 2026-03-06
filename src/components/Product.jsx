import styles from '../styles/ProductDetail.module.css'
import { Counter } from "./counter.jsx";

export function Product({producto}){
    return(
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                {producto
                ? (<img className={styles.imgProductDetail} src={producto.url} alt={producto.name}/>)
                : <div className="skeleton h-32 w-32"></div>
                }
            </figure>
            <div className="card-body">
                <h2 className="card-title text-7xl mt-2">{producto.nombre}</h2>
                <h2 className='text-4xl mt-2'>{producto.descripcion}</h2>
                <p className='text-4xl mt-2'>${producto.precio}</p>
                <Counter producto={producto}/>               
            </div>
        </div>
    )
}