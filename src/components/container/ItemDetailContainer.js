import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getFirestore } from '../../clientFactory';


const detailContainer = {
    width: "100%",
    background: "#272f3d",
    display:"flex",
    padding: "16px 0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"

}

function ItemDetailContainer()  {

    const { id } = useParams();
   
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        console.log("la coleccion es ");

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("Sin resultado");
            }
            console.log(querySnapshot.docs.data)
            console.log(querySnapshot);
            setProducto(querySnapshot.docs.map(doc => doc.data()));
            console.log(producto);
        }).catch((error) => {
            console.log("error buscando archivos");
        })
        
    }, [])
    
        useEffect(() => {
            const idFiltrado = producto.filter(el => el.id === id);
            console.log(idFiltrado)
            setProducto(idFiltrado)
        },[])


    return (
        <div style={detailContainer}>
            <ItemDetail nombreArt={producto.nombre} urlImg={producto.imgUrl} precio={producto.precio} descripcion={producto.descripcion}></ItemDetail>
        </div>
    )
}
    
export default ItemDetailContainer;