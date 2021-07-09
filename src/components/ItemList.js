import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import { getFirestore } from '../clientFactory';


const divStyle = {
    width: "100%",
    marginTop: "24px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "centar"
}


const Itemlist = ()  => {
    const [productoDb, setProductoDb] = useState([]);

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
            setProductoDb(querySnapshot.docs.map(doc => doc.data()));
            console.log(productoDb);
        }).catch((error) => {
            console.log("error buscando archivos");
        })
        
    }, [])
    
    return(
        <div style= {divStyle}>
            {productoDb.map(el => <Link to={`/detalle/${el.id}`}><Item nombreArt={el.nombre} urlImg={el.imageId} precio={el.precio} ></Item></Link> )}       
        </div>
    )
}   

export default Itemlist;
