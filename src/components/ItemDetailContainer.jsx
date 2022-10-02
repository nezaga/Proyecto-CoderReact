import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    // Se define la constante id que se alimenta de la URL. La key id viene determinada desde el path en la App.js
    const { id } = useParams();

    useEffect(() => {
        const prodCollection = collection(db, 'items')
        const activeProduct = doc(prodCollection, id)

        getDoc(activeProduct)
        .then((response)=>{
            setItem({
                id: response.id,
                ...response.data(),
            });
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])

    return (
        <div className="container" style={{ maxWidth: '50vw' }}>
            {loading ? <Loading /> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;