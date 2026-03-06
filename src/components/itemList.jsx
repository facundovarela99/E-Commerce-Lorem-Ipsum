import styles from '../styles/ItemListContainer.module.css'
import { Item } from './item.jsx'

export function ItemList({productos}){
    return(
    <div className={styles.divItemListContainer}>
            <div className={styles.divProducts}>
                {productos.map(producto => (
                    <Item producto={producto} key={producto.id}></Item>
                ))}
            </div>
        </div>
        )
} 