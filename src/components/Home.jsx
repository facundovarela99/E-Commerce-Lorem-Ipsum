import { HomeContainer } from "./HomeContainer.jsx"
import { useState, useEffect } from 'react';
import { getProductos } from '../firebase/db.js';

export function Home() {

    const [productos, setItems] = useState([]);

    useEffect(() => {

        const productosObtenidos = async () => {
            const productosObtenidos = await getProductos();
            setItems(productosObtenidos);
        }
        productosObtenidos();
    }, [])

    return (
        <HomeContainer productos={productos} />
    )
}