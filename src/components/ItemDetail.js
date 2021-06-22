import React from 'react';


const tarjeta = {
    width: "250px",
    height : "450px",
    backgroundColor: "#fff",
    borderRadius: "15px"
}
const tarjSuperior = {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #272f3d"
}
const titulo = {
    fontSize: "210%",
    margin: "0"
}
const tarjInferior = {
    width: "100%",
    height: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center"
}
const imgProducto = {
    height: "auto",
    width: "100%",
    margin: "0",
    borderBottom: "2px solid #272f3d"
}
const precioProducto = {
    fontSize: "110%",
    color: "red",
    margin: "8px 0 0 0",
    fontWeight: "bold",
    marginLeft: "8px",
    alignSelf: "center"
}
const infoProducto = {
    display:"flex",
    flexDirection: "column",
}

const ItemDetail = (props) => {
    return(
        <div style={tarjeta}>
            <div style={tarjSuperior}>
                <p style={titulo}>{props.nombreArt}</p>
            </div>
            <div style={tarjInferior}>
                <img style={imgProducto} src={`${props.urlImg}`} alt="Producto"></img>
                <div style={infoProducto}>
                    <p style={precioProducto}>{props.precio}</p>
                    <p>{props.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;