import React from 'react';
import CartWidget from './cartWidget';

const ulStyle = {
    listStyle: "none"
}
const aStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.3rem"
}
const liStyle = {
    display: "inline-block",
    margin: "0 10px"
}
const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}
const divStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
}

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <div style={divStyle}>
                <h1 style={{marginLeft: "8px", color: "#fff"}}>Revivi Momentos</h1>
            </div>
            <ul style={ulStyle}>
                <li style={liStyle}><a style={aStyle} href={"#"}>Inicio</a></li>
                <li style={liStyle}><a style={aStyle} href={"#"}>Productos</a></li>
                <li style={liStyle}><a style={aStyle} href={"#"}>Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default NavBar;