import { CounterCarrito } from "./CounterCarrito.jsx"
import styles from '../styles/imgProdCart.module.css'

export function CartItem({producto}){
    return(
            <ul className="list bg-base-100 rounded-box shadow-md">
    
    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
    
    <li className="list-row">
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
        <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
        </div>
        <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
        <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
        </button>
    </li>
    
    <li className="list-row">
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
        <div>
        <div>Ellie Beilish</div>
        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
        </div>
        <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
        <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
        </button>
    </li>
    
    <li className="list-row">
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
        <div>
        <div>Sabrino Gardener</div>
        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
        </div>
        <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
        <button className="btn btn-square btn-ghost">
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
        </button>
    </li>
    
    </ul>
    )
}


// <div key={producto.id} className="card flex flex-row bg-base-100 shadow-sm w-full">
//     <figure className="w-1/4">
//         <img src={producto.url} alt={producto.nombre} className={`${styles.imgProd} w-1/3 h-1/3`} />
//     </figure>
//     <div className="card-body flex flex-row justify-around items-center w-1/4">
//         <div className="infoCard">
//             <h2 className="card-title">{producto.nombre}</h2>
//             <h2 className="card-title">${producto.precio}</h2>
//             <h2 className="card-title">Cantidad: {producto.quantity}</h2>
//             <h2 className="card-title">Total: ${producto.precio * producto.quantity}</h2>
//         </div>
//         <div className="card-actions justify-start">
//             <CounterCarrito producto={producto}/>
//         </div>
//     </div>
// </div>