import styles from '../styles/Products.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Products({ prods }) {

    const navigate = useNavigate();

    const unicosPorCategoria = Object.values(
        prods.reduce((acc, prod) => {
            // si la categoría no existe todavía, guardo el primer objeto que aparece
            if (!acc[prod.categoria]) {
                acc[prod.categoria] = prod;
            }
            return acc;
        }, {})
    );

    const productos = unicosPorCategoria.map(prod => ({
        img: prod.url,
        nombre: prod.categoria
    }));


    const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((index + 1) % productos.length);
  };

  const anterior = () => {
    setIndex((index - 1 + productos.length) % productos.length);
  };

    return (
        <section className={styles.productos}>
            <div className={`${styles.tituloProductos} flex flex-col py-2`}>
                <h1 className={`${styles.h1Prods} font-bold text-center p-4`}>NUESTROS</h1>
                <h1 className={`${styles.h1Prods} font-bold text-center p-4`}>PRODUCTOS</h1>
            </div>

    {productos.length > 0 && (
        <div className="flex items-center justify-center gap-6 w-full">

      {/* Flecha izquierda */}
      <button
        onClick={anterior}
        className="text-3xl font-bold px-3"
      >
        ◀
      </button>

      {/* Carrusel */}
      <div className="flex gap-10">

        {[0,1,2].map((offset) => {
          const producto = productos[(index + offset) % productos.length];

          return (
            <div key={offset} className="flex flex-col items-center">
            <button onClick={()=>navigate(`/categoria/${producto.nombre}`)} className="w-full cursor-pointer">
              <img src={producto.img}
              alt={producto.nombre}
              className={`${styles.imgProd} w-[280px] h-[280px] object-contain border rounded shadow mt-10`}/>
            </button>
            <p className={`${styles.pProducts} mt-2 text-center text-4xl mt-15 mb-15`}>{producto.nombre}</p>
            </div>
          );
        })}

      </div>

      {/* Flecha derecha */}
      <button
        onClick={siguiente}
        className="text-3xl font-bold px-3"
      >
        ▶
      </button>

    </div>
    )}

        </section>
    )
}