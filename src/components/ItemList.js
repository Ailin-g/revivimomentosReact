import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import { getFirestore } from '../clientFactory';
import { queryByTestId } from '@testing-library/react';


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
    const [idProducto, setIdProducto] = useState();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("Sin resultado");
            }
            setProductoDb(querySnapshot.docs.map(doc => doc.data()));
            setIdProducto(querySnapshot.docs.id);
        }).catch((error) => {
            console.log("error buscando archivos");
        })
        
    }, [])
    
    return(
        <div style= {divStyle}>
            {productoDb.map(el => <Link to={`/detalle/${idProducto}`}><Item nombreArt={el.nombre} urlImg={el.imageId} precio={el.precio} ></Item></Link> )}       
        </div>
    )
}   

export default Itemlist;
