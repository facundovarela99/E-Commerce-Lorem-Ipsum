export function FormCheckout() {
    return (
        <div className="flex justify-center">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Checkout</legend>

                <label className="label">Nombre</label>
                <input type="text" className="input" placeholder="Nombre" />

                <label className="label">Apellido</label>
                <input type="text" className="input" placeholder="Apellido" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Celular</label>
                <input type="text" className="input" placeholder="Celular" />

                <label className="label">Ciudad</label>
                <input type="text" className="input" placeholder="Ciudad" />
                
                <label className="label">Dirección</label>
                <input type="text" className="input" placeholder="Dirección" />

                <button className="btn btn-neutral mt-4">Enviar</button>
            </fieldset>
        </div>
    )
}