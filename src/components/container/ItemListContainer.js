import React, { Component } from 'react';
import ItemList from '../ItemList';

const divStyle = {
    minHeight: "90vh",
    width: "100%",
    backgroundColor: "#585858",
    display: "flex",
    flexDirection: "column",
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
                <ItemList/>
            </div>
        )
    }
}

export default ItemListContainer;