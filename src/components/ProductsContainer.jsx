import { Products } from "./products.jsx";
import { useState, useEffect } from "react";
import { getProductos } from '../firebase/db.js';


export function ProductsContainer() {

    const [prods, setItems] = useState([]);

    useEffect(() => {

        const productosObtenidos = async () => {
            const productosObtenidos = await getProductos();
            console.log('Productos obtenidos!!!! en ProductsContainer: ', productosObtenidos);
            setItems(productosObtenidos);
        }
        productosObtenidos();
    }, [])

    

    return (
        <Products prods={prods}/>
    )
}