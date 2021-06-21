import React from 'react';

const btnStyle = {

}

function BtnAddCart (props) {
    return (
        <button style={btnStyle} onClick={props.clicked}>{props.nombre}</button>
    )
}

export default BtnAddCart;