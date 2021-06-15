import React, { Component } from 'react';
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

class ItemCount extends Component {
    
    state = {
        cantidadProducto: 0
    }

    sumarProducto = () => {
        this.setState((state) => {
            return  { cantidadProducto: state.cantidadProducto + 1 }
        })
    }
    restarProducto = () => {
        if(this.state.cantidadProducto > 0 ) {
            this.setState((state) => {
                return  { cantidadProducto: state.cantidadProducto - 1 }
            })
        }
    }

    render() {
        return (
            <div style={infoContenedor}>
                <p style= {{width: "100%", margin: "0 0", fontSize: "140%"}}>Tazas</p>
                <div style={styleContador}>
                    <Btn nombre="Resta" clicked={this.restarProducto}/>
                    <Resultado cuenta={this.state.cantidadProducto}/>
                    <Btn nombre="Suma" clicked={this.sumarProducto}/>
                </div>
                <BtnAddCart nombre="Agregar al carrito"/>
            </div>
        )
    }
}

export default ItemCount;