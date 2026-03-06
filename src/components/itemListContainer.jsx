import { ItemList } from './itemList.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productosCategoria } from '../firebase/db.js';
import { getProductos } from '../firebase/db.js';




export function ItemListContainer(){
    
  const [productos, setItems] = useState([]);

  const {nombreCategoria} = useParams();

  
  useEffect(()=>{
    if (nombreCategoria) {
      
      const productosCategoriaObtenidos = async () => {
        const productosObtenidos = await productosCategoria(nombreCategoria);
        console.log('Productos obtenidos!!!!: ', productosObtenidos);
        setItems(productosObtenidos);
      };
      productosCategoriaObtenidos();
    }else{
      const productosObtenidos = async () =>{
        const productosObtenidos = await getProductos();
        console.log('Productos obtenidos!!!!: ', productosObtenidos);
        setItems(productosObtenidos);
      }
      productosObtenidos();
    }
  
    

  }, [nombreCategoria])

    return <ItemList productos={productos}/>
}