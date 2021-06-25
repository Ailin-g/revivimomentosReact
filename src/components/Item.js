import React from 'react';

const tarjeta = {
    width: "250px",
    height: "180px",
    backgroundColor: "#fff",
    borderRadius: "10px"
}
const tarjSuperior = {
    width: "100%",
    heigth: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
} 

const titulo = {
    fontSize: "140%",
    margin: "0",
    }

const articulo = {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    fontSize: "70%",
    color: "#272f3d",
    margin: "0",
}
const tarjInferior = {
    width: "100%",
    height: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center"
}
const imgProducto = {
    height: "100%",
    width: "auto",
    margin: "0",
    borderRadius: "0 0 0 10px"

}
 const precioProducto = {
     fontSize: "110%",
     color: "blue",
     margin: "0",
     fontWeight: "bold",
     marginLeft: "8px",
     alignSelf: "flex-start "
 }

const Item = (props)  => {
   
    return(
        <div style={tarjeta}>
            <div style={tarjSuperior}>
                <p style={titulo}>{props.nombreArt}</p>
                <p style={articulo}>{props.idArt}</p>
            </div>
            <div style={tarjInferior}>
                <img style={imgProducto} src={props.urlImg} alt="Producto"></img>
                <p style={precioProducto} >{props.precio}</p>
            </div>
        </div>
    )
}

export default Item;
