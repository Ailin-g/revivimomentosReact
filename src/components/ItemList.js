import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';


const divStyle = {
    width: "100%",
    marginTop: "24px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "centar"
}


const Itemlist = ()  => {
    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        const prom = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {nombre: "Taza", id:  "1", imgUrl: "/img/taza.jpg", precio: 450 },
                    {nombre: "Vaso", id:  "2", imgUrl: "/img/vaso.jpg", precio: 500 },
                    {nombre: "Chopp", id: "3", imgUrl: "/img/chopp.jpg", precio: 550 },
                ])
            }, 2000);
        })
        prom.then((res) =>{
            setProducto(res);
        })
    },[])

    return(
        <div style= {divStyle}>
            {producto.map(el => <Link to={`/detalle/:${el.id}`}><Item  nombreArt={el.nombre} idArt={el.id} urlImg={el.imgUrl} precio={el.precio} ></Item></Link> )}       
        </div>
    )
}   

export default Itemlist;
