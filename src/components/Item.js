import React from 'react';

const tarjeta = {
    width: "250px",
    height: "150px",
    backgroundColor: "#fff",
    borderRadius: "15px"
}
const tarjSuperior = {
    width: "100%",
    heigth: "15%",
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
    fontSize: "50%",
    color: "#272f3d",
    margin: "0",
}
const tarjInferior = {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
}
const imgProducto = {
    height: "100%",
    width: "60%",
    margin: "0",

}
 const precioProducto = {
     fontSize: "110%",
     color: "blue",
    margin: "0",
    fontWeight:"bold"
 }

const Item = (props)  => {
    const url = `.${props.urlImg}`
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
