import { CartContext } from "../contexts/CartContext.jsx"
import { useContext } from "react"
import { createOrder } from "../firebase/db.js";
import { serverTimestamp } from "firebase/firestore";

export function FormCheckout() {

    const {GetCart} = useContext(CartContext);
    const cart = GetCart();

    const handleSubmit = (e) => {
        console.log('EVENTO')
        e.preventDefault();
        const form = e.target
        
        const newOrder = {
            nombre : form.nombre.value,
            apellido : form.apellido.value,
            email : form.email.value,
            celular : form.celular.value,
            ciudad : form.ciudad.value,
            direccion : form.direccion.value,
            hora: serverTimestamp()
        }
        createOrder(newOrder, cart);
    }

    return (
        <div className="flex justify-center">
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit}>
                <legend className="fieldset-legend">Checkout</legend>

                <label className="label">Nombre</label>
                <input id="nombre" type="text" className="input" placeholder="Nombre" required />

                <label className="label">Apellido</label>
                <input id="apellido" type="text" className="input" placeholder="Apellido" required />

                <label className="label">Email</label>
                <input id="email" type="email" className="input" placeholder="Email" required />

                <label className="label">Celular</label>
                <input id="celular" type="text" className="input" placeholder="Celular" required />

                <label className="label">Ciudad</label>
                <input id="ciudad" type="text" className="input" placeholder="Ciudad" required />

                <label className="label">Dirección</label>
                <input id="direccion" type="text" className="input" placeholder="Dirección" required />

                <button className="btn btn-neutral mt-4">Enviar</button>
            </form>
        </div>
    )
}