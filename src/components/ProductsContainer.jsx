import { Products } from "./Products.jsx";
import { useState, useEffect } from "react";
import { getProductos } from '../firebase/db.js';


export function ProductsContainer() {

    const [prods, setItems] = useState([]);

    useEffect(() => {

        const productosObtenidos = async () => {
            const productosObtenidos = await getProductos();
            setItems(productosObtenidos);
        }
        productosObtenidos();
    }, [])

    

    return (
        <Products prods={prods}/>
    )
}