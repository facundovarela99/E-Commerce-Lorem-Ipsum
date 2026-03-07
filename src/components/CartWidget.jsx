import styles from '../styles/Navbar.module.css'
import cartWidget from '../assets/shopping-cart.png'
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext.jsx'
import { useNavigate } from 'react-router-dom';

export function CartWidget() {
    const {GetTotalProducts} = useContext(CartContext)
    const totalProducts = GetTotalProducts();
    const navigate = useNavigate();
    return (
        <>
            <button className={styles.btnCartWidget} onClick={()=> navigate('/carrito')}>
                <div className={styles.divCartWidget}>{totalProducts}</div>
                <img src={cartWidget} alt="Carrito de productos agregados" style={{ width: "32px", height: "32px" }} />
            </button>
        </>
    )
}