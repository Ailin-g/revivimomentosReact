import React from 'react';
import url from '../img/logo192.png';

const imgStyle = {
    height: "48px",
    width: "auto",
    marginLeft: "8px"
}

const CartWidget = () => {
    return (
        <img src={url} style={imgStyle} alt={"logo"}></img>
    )
}

export default CartWidget;