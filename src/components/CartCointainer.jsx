import { useNavigate } from 'react-router-dom'
import { CartItem } from "./CartItem.jsx";

export function CartContainer({cart}){
    const navigate = useNavigate()
    return(
        <>
            <ul className="list bg-base-100 rounded-box shadow-md border w-full">
                {cart.map((producto)=> <CartItem key={producto.id} producto={producto}/>)}
            </ul>
            <div className="flex flex-row justify-center mt-6">
                    <div>
                        <h1>Subtotal</h1>
                    </div>
                    <button className="btn btn-primary mt-6" onClick={()=> navigate(`/checkout`)}>Finalizar compra</button>
            </div> 
        </>
    )
}