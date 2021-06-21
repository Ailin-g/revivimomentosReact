import React from 'react';
import Btn from './Btn';
import BtnAddCart from './BtnAddCart';
import Resultado from './Resultado';

const infoContenedor = {
    backgroundColor: "rgb(189, 189, 189)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    height: "120px",
    width: "250px",
    justifyContent: "space-around",
    alignItems: "center"
}

const styleContador = {
    height: "35px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
}

const ItemCount = (props) => {
    
        return (
            <div style={infoContenedor}>
                <p style= {{width: "100%", margin: "0 0", fontSize: "140%"}}>Tazas</p>
                <div style={styleContador}>
                    <Btn nombre="Resta" clicked={props.restarProducto}/>
                    <Resultado cuenta={props.initial}/>
                    <Btn nombre="Suma" clicked={props.sumarProducto}/>
                </div>
                <BtnAddCart nombre="Agregar al carrito" clicked={props.informarCantidad}/>
            </div>
        )
}

export default ItemCount;