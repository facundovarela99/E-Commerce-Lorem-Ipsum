import { useEffect } from "react";
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext.jsx'

export function CounterCarrito({ producto }) {
  const { addToCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const handlerEliminar = () => removeFromCart(producto.id)

  const handlerSuma = () => {
    let quantity = producto.quantity + 1
    addToCart({ ...producto, quantity })
  };

  const handlerResta = () => {
    let quantity = producto.quantity - 1
    if (quantity === 0) {
      removeFromCart(producto.id)
    } else {
      addToCart({ ...producto, quantity })
    }
  };

  useEffect(() => {
    return () => {
    }
  }, [producto.quantity])

  return (
    <div className="flex flex-col w-75 items-center gap-3">
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button onClick={handlerSuma} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">
          Agregar
        </button>
        <button onClick={handlerResta} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">
          Restar
        </button>
        <button onClick={handlerEliminar} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">
          Eliminar del carrito
        </button>
      </div>
    </div>

  )
}

