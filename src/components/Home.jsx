import { HomeContainer } from "./homeContainer.jsx"
import { useState, useEffect } from 'react';
import { getProductos } from '../firebase/db.js';

export function Home() {

    const [productos, setItems] = useState([]);

    useEffect(() => {

        const productosObtenidos = async () => {
            const productosObtenidos = await getProductos();
            console.log('Productos obtenidos!!!!: ', productosObtenidos);
            setItems(productosObtenidos);
        }
        productosObtenidos();
    }, [])

    return (
        <HomeContainer productos={productos} />
    )
}