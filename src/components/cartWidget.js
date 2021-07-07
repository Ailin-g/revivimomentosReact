import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const cartStyle = {
    fontSize: "120%",
    color: "#fff"
}

const contenedorStyle = {
    position: "absolute",
    rigth: "50",
    top: "50"
}

const ThemeContext = React.createContext();

 const style = `fas fa -shopping-cart ${cartStyle}`;

 const CartWidget = () => {

    const datosCarrito = useContext(ThemeContext);
    let vacio = true;

   datosCarrito.initial ? vacio = false : vacio = true;

    return (
        <Link style={vacio ? { display: "none"} : { display: "inline-block"}} to="/cart">
            <p style ={contenedorStyle}>{datosCarrito.initial}</p>
        <i className="fas fa-shopping-cart" style={cartStyle}></i>
        </Link>
    )
}

export default CartWidget;