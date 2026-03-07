import { CartContext } from "../contexts/cartContext.jsx"
import { useContext } from "react"
import { EmptyCart } from "./emptyCart.jsx";
import { CartContainer } from "./cartCointainer.jsx";

export function Cart() {

    const { GetCart } = useContext(CartContext);
    const cart = GetCart();

    return (
        <div className="flex flex-col items-center">
            <h1>CARRITO</h1>
            <div className="flex justify-center mt-5 w-2/3">
                { cart.length === 0 
                ? <EmptyCart/> 
                : <CartContainer cart={cart}/>
                }
            </div>
        </div>

    )
}