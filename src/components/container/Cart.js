import React, { useContext, useEffect, useState } from 'react'
import Btn from '../Btn';

const seccionCarrito = {
    width: "100%",
    minHeight: "90vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#272f3d"
}
const cartStyle = {
    margin: "48px 0 0 0",
    backgroundColor: "#a7a7a7",
    display: "flex",
    flexDirection: "Column",
    borderRadius: "5px",
    fontSize: "120%"
}
const articuloStyle = {
    width: "250px",
    display: "flex",
    flexDirection: "row"
}
const nomProdStyle = {
    width: "40%",
    margin:"5px 0"
}
const cantProdStyle = {
    width: "30%",
    margin:"5px 0"
}
const precioProdStyle = {
    width: "30%",
    margin:"5px 0"
}
const cabecera = {
    width: "250px",
    display: "flex",
    flexDirection: "row"
}
const cabeceraNombre = {
    width: "40%",
}
const cabeceraDetalle = {
    width: "30%"
}

const ThemeContext = React.createContext();

const Cart = () =>  {

    const [cartVacio, setCartVacio] = useState(false);

    let articulos = [];

    const datosProducto = useContext(ThemeContext);

    useEffect(() => {
        if(datosProducto !== undefined) {
            articulos.push(
                <div style={articuloStyle}>
                <p style={nomProdStyle}>{datosProducto.nombreProd}</p>
                <p style={cantProdStyle}>{datosProducto.precioProd}</p>
                <p style={precioProdStyle}>{datosProducto.initial}</p>
            </div>
        )
    }
    })
    useEffect(() => {
        if( {}  === datosProducto ) {
            setCartVacio(true)
        }
    }, [datosProducto])


    let infoCarrito =  (
        <div style={cartStyle}>
            <div style={cabecera}>
                <div style={cabeceraNombre}>Producto</div>
                <div style={cabeceraDetalle}>Cantidad</div>
                <div style ={cabeceraDetalle}>Precio</div>
            </div>
            {articulos}
        </div>
    );
    const carritoVacio =(
        <div style={cartStyle}>
            <p>carritoVacio!</p>
            <Btn nombre="ir a productos!"></Btn>
        </div>
    )          


return(
    <div style={seccionCarrito}>
        {cartVacio ? infoCarrito : carritoVacio }
        {console.log(datosProducto)}                
    </div>
        )

}

export default Cart;