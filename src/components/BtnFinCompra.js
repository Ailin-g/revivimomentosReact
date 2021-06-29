import React from 'react';
import {Link} from 'react-router-dom'

const btnStyle ={
    display:"none",
    backgroundColor: "#61dafb"
}

function BtnFinCompra(props) {
    return(
        <button style={btnStyle} onClick={props.clicked}><Link to="/cart">{props.nombre}</Link></button>
    )
}

export default BtnFinCompra;