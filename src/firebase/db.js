import { getFirestore, collection, getDocs } from "firebase/firestore";
import { appFirebase } from "./config.js";
export const db = getFirestore(appFirebase);



export const getProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let productos = []
    querySnapshot.forEach((doc) => {
      productos.push({...doc.data(), id: doc.id});
    });
    return productos;
}

export const getCategorias = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let categorias = [];
    querySnapshot.forEach((doc) => {
      const categoria = doc.data().categoria;
      if (!categorias.includes(categoria)) {
        categorias.push(categoria);
      }
    });
    return categorias;
}

export const productosCategoria = async (categoria) => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let productos = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().categoria === categoria) {
        productos.push({...doc.data(), id: doc.id});
      }
    });
    return productos;
}

export const getProducto = async (id) => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let producto = null;
    querySnapshot.forEach((doc) =>{
      if (doc.id === id){
        producto = {...doc.data(), id: doc.id};
      }
    });
    return producto;
}