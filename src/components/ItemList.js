import React from 'react';
import Item from './Item';
import stock from '../stock/stock';

const divStyle = {
    width: "100%",
    marginTop: "24px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "centar"
}


const Itemlist = ()  => {
    return(
        <div style= {divStyle}>
            {stock.map(el => <Item  nombreArt={el.nombre} idArt={el.id} urlImg={el.imgUrl} precio={el.precio} ></Item>)}       
        </div>
    )
}   

export default Itemlist;
