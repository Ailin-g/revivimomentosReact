import React, { Component } from 'react';
import ItemCount from '../ItemCount';
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
    state = {
        stock: 15,
        initial:1
    }

    sumarProducto = () => {
        if(this.state.initial < this.state.stock){
            this.setState({initial:this.state.initial +1})
        }
    }
    restarProducto = () => {
        if(this.state.initial > 0 ) {
            this.setState({initial: this.state.initial -1})
        }
    }
    informarCantidad = () => {
            alert(`se agregarán al carrito ${this.state.initial} unidades`);
    }

    render() {
        return (
            <div style={divStyle}>
                <h1 style={h1Style}>Catalogo de productos</h1>
                <ItemCount stock={this.state.stock} initial={this.state.initial} sumarProducto={this.sumarProducto} restarProducto={this.restarProducto} informarCantidad={this.informarCantidad}/>
                <ItemList/>
            </div>
        )
    }
}

export default ItemListContainer;