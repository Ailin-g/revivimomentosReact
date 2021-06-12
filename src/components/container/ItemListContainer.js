import React, { Component } from 'react';

const divStyle = {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#323232",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const h1Style = {
    fontSize: "150%",
    color: "#fff",
    padding: "6px",
    border: "3px solid #fff"
}


class ItemListContainer extends Component {

    render() {
        return (
            <div style={divStyle}>
                <h1 style={h1Style}>Catalogo de productos</h1>
            </div>
        )
    }
}

export default ItemListContainer;