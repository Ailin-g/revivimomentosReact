import React from 'react';
import { Link } from 'react-router-dom';

const cartStyle = {
    fontSize: "120%",
    color: "#fff"
}

 const style = `fas fa -shopping-cart ${cartStyle}`;

 const CartWidget = () => {
    return (
        <Link to="/cart">
        <i className="fas fa-shopping-cart" style={cartStyle}></i>
        </Link>
    )
}

export default CartWidget;