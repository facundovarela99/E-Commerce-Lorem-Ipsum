import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Product } from "./Product.jsx";
import { getProducto } from "../firebase/db.js";

export function ProductDetail(){

    const {id} = useParams();

    const [producto, setproducto] = useState({});

    useEffect(()=>{
        const setearProducto = async () => {
            const productoObtenido = await getProducto(id);
            console.log('Producto obtenido: ', productoObtenido);
            setproducto(productoObtenido);
        }
        setearProducto();
    }, [id])

    return <Product producto={producto}></Product>
}