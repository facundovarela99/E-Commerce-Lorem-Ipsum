import styles from '../styles/ItemListContainer.module.css'
import { useNavigate } from 'react-router-dom'

export function Item({producto}) {
    const navigate = useNavigate();

    return (
        <div className={styles.divProduct}>
            <figure className={styles.figure}>
                {producto 
                ? (<img className={styles.imgProdItem} src={producto.url} alt={producto.title} />) 
                : <div className="skeleton h-32 w-32"></div>}
                
            </figure>
            <div className={styles.cardGameBody}>
                <h1 className="card-title text-2xl pt-2">{producto.nombre}</h1>
                <p className='pt-2'>${producto.precio}</p>
                <p className='pt-2'>{producto.descripcion}</p>
                <p className='pt-2'>Stock: {producto.stock}</p>
                <div className="card-actions justify-end">
                    <button className={styles.btnViewMore} onClick={()=> navigate(`/producto/${producto.id}`)}>Ver mas</button>
                </div>
            </div>
        </div>
    )
}