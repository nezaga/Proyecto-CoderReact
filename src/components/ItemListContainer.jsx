import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    // Se define la constante id que se alimenta de la URL. La key id viene determinada desde el path en la App.js 
    const { id } = useParams();

    useEffect(() => {
        // Se va a buscar la colección items al Firestore y se guarda en la constante prodCollection
        const prodCollection = collection(db, 'items')

        // Se qué documentos ir a buscar, según la categoría activa. Primero, consultando por el id que se obtiene desde la url, si es undefined se trae toda la prodCollection, si no, se trae la prodCollection filtrada por la categoría seleccionada.
        const activeCategory = id
            ? query(prodCollection, where('category', '==', id))
            : prodCollection; 

        getDocs(activeCategory)
        .then((response)=>{
            const products = response.docs.map((prod)=>{
                return {
                    id: prod.id,
                    ...prod.data()
                }
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [id]);

    

    return (
        <div className="container">
            <h1 className="display-3">Titulo</h1>
            <p>{props.greeting}</p>
            <ItemList items={items}/>
        </div>
        

    )
}

export default ItemListContainer;