import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';


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
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve([
                {nombre: "Tazas", id: "1", imgUrl: "/img/taza.jpg", precio: 450, descripcion: "Taza de ceramica con el diseño que vos quieras "},
                {nombre: "Vasos", id: "2", imgUrl: "/img/vaso.jpg", precio: 500,  descripcion: "Vaso de Polimero  con el diseño que vos quieras"},
                {nombre: "Chopp", id: "3", imgUrl: "/img/chopp.jpg", precio: 550,  descripcion: "Chopp esmerilado o de vidrio con el diseño que vos quieras"}
               ]) 
            }, 2000);
        })
        prom.then((res) => {
            setProducto(res);
        })
    }, []);

        useEffect(() => {
            const idFiltrado = producto.filter(el => el.id === id);
            console.log(idFiltrado)
            setProducto(idFiltrado)
        },[])


    return (
        <div style={detailContainer}>
            <ItemDetail nombreArt={producto.nombre} idArt={producto.id} urlImg={producto.imgUrl} precio={producto.precio} descripcion={producto.descripcion}></ItemDetail>
            {/* {producto.map(el => <ItemDetail nombreArt={el.nombre} idArt={el.id} urlImg={el.imgUrl} precio={el.precio} descripcion={el.descripcion}></ItemDetail>)} */}
        </div>
    )
}
    
export default ItemDetailContainer;