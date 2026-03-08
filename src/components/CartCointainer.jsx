import { useNavigate } from 'react-router-dom'
import { CartItem } from "./CartItem.jsx";

export function CartContainer({cart}){
    const navigate = useNavigate()
    console.log(cart)
    let total = 0;
    cart.forEach(producto => {
        total += parseInt(producto.precio) * parseInt(producto.quantity);
    });
    

    return(
        <div className="flex flex-col items-center w-full">
            <ul className="list bg-base-100 rounded-box shadow-md border w-full">
                {cart.map((producto)=> <CartItem key={producto.id} producto={producto}/>)}
            </ul>
            <div className="flex flex-col items-center mt-6">
                    <div>
                        <p className='text-4xl'>Subtotal: $ {total}</p>
                    </div>
                    <button className="btn btn-primary mt-6 mb-6" onClick={()=> navigate(`/checkout`)}>Finalizar compra</button>
            </div> 
        </div>
    )
}