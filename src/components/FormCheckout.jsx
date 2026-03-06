import { CartContext } from "../contexts/cartContext.jsx"
import { useContext } from "react"
import { createOrder } from "../firebase/db.js";
import { serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

export function FormCheckout() {

    const { removeFromCart } = useContext(CartContext);

    const { GetCart } = useContext(CartContext);
    const cart = GetCart();

    const handleSubmit = (e) => {

        if (cart.length <= 0) {
            e.preventDefault();
            toast.error('¡No posees productos en el carrito!', { duration: 1500 })
        }  else{
            toast.success('¡Carrito vaciado!', { duration: 1500 })
            toast.success('¡Tu formulario se envió correctamente!', { duration: 1500 })
            e.preventDefault();
    
            const form = e.target
    
            const newOrder = {
                nombre: form.nombre.value,
                apellido: form.apellido.value,
                email: form.email.value,
                celular: form.celular.value,
                ciudad: form.ciudad.value,
                direccion: form.direccion.value,
                hora: serverTimestamp()
            }
            createOrder(newOrder, cart);
            cart.forEach(prod => {
                removeFromCart(prod.id)
            })
        }

    }

    return (
        <div className="flex justify-center">
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit}>
                <legend className="fieldset-legend">Checkout</legend>

                <label className="label">Nombre</label>
                <input id="nombre" type="text" className="input" placeholder="Nombre" defaultValue="Facundo" required />

                <label className="label">Apellido</label>
                <input id="apellido" type="text" className="input" placeholder="Apellido" defaultValue='Flores' required />

                <label className="label">Email</label>
                <input id="email" type="email" className="input" placeholder="Email" defaultValue='FacuFlores@yahoo.es' required />

                <label className="label">Celular</label>
                <input id="celular" type="text" className="input" placeholder="Celular" defaultValue='1234567890' required />

                <label className="label">Ciudad</label>
                <input id="ciudad" type="text" className="input" placeholder="Ciudad" defaultValue='Mar de las Pompas' required />

                <label className="label">Dirección</label>
                <input id="direccion" type="text" className="input" placeholder="Dirección" defaultValue='Av. Floresta 4879' required />

                <button className="btn btn-neutral mt-4">Enviar</button>
            </form>
        </div>
    )
}