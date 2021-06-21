import React from 'react';

const cartStyle = {
    fontSize: "120%",
    color: "#fff"
}

 const style = `fas fa -shopping-cart ${cartStyle}`;

 const CartWidget = () => {
    return (
        <i className="fas fa-shopping-cart" style={cartStyle}></i>
    )
}

export default CartWidget;