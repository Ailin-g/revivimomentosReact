import React, { useContext, useEffect, useState } from 'react'
import Btn from '../Btn';
import { ConsumerCartContext } from '../../context/context';
import cartContext from '../../context/context';
import { getFirestore } from '../../clientFactory';
import firebase from 'firebase/app';


const seccionCarrito = {
    width: "100%",
    minHeight: "90vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#272f3d"
}
const cartStyle = {
    margin: "48px 0 0 0",
    backgroundColor: "#a7a7a7",
    display: "flex",
    flexDirection: "Column",
    borderRadius: "5px",
    fontSize: "120%"
}
const articuloStyle = {
    width: "250px",
    display: "flex",
    flexDirection: "row"
}
const nomProdStyle = {
    width: "40%",
    margin:"5px 0"
}
const cantProdStyle = {
    width: "30%",
    margin:"5px 0"
}
const precioProdStyle = {
    width: "30%",
    margin:"5px 0"
}
const cabecera = {
    width: "250px",
    display: "flex",
    flexDirection: "row"
}
const cabeceraNombre = {
    width: "40%",
}
const cabeceraDetalle = {
    width: "30%"
}

const generarOrden = (datosOrden) => {

    const db = getFirestore();
    const collection = db.collection('ordenes');
    const infoOrden = {
        Comprador: {
            email: datosOrden.email,
            nombre: datosOrden.nombre,
            telefono: datosOrden.telefono
        },
        items: {
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            total: datosOrden.total,
            infoItem: datosOrden.detalleItems
        }
    }
    collection.add(infoOrden).then(({ id }) => {
        console.log(id);
    })
    .catch(err => {
        console.log(err);
    });
    //agregar la actualizacion de la coleccion de items, haciendo que se actualize el stock item por item con un map y un update
    const updStock = db.collection('productos');
    datosOrden.detalleItems.forEach( el => {
        const itemActualizado = updStock.doc(el.id);

        const actualizarStock = itemActualizado.update({
            cantidad: cantidad - el.cantidad
        });
        actualizarStock.then(() => {
            console.log("actualizacion exitosa")
        })
        .catch(err => {
            console.log("error", err);
        });
    });    
}

const Cart = () =>  {

    const [cartVacio, setCartVacio] = useState(false);

    let articulos = [];

    const datosProducto = useContext(cartContext);

    useEffect(() => {
        if(datosProducto !== undefined) {
            articulos.push(
                <div style={articuloStyle}>
                    <p style={nomProdStyle}>{datosProducto.nombreProd}</p>
                    <p style={cantProdStyle}>{datosProducto.precioProd}</p>
                    <p style={precioProdStyle}>{datosProducto.initial}</p>
                </div>
        )
    }
    })
    useEffect(() => {
        if( {}  === datosProducto ) {
            setCartVacio(true)
        }
    }, [datosProducto]);

    const ordenGenerada = () => {

        const datosOrden = {
            email: emailCliente,
            nombre: nombreCliente,
            telefono: telefonoCliente,
            total: totalCompra,
            detalleItems: arrayItems,
        }

        generarOrden(datosOrden);
    }


    let infoCarrito =  (
        <div style={cartStyle}>
            <div style={cabecera}>
                <div style={cabeceraNombre}>Producto</div>
                <div style={cabeceraDetalle}>Cantidad</div>
                <div style ={cabeceraDetalle}>Precio</div>
            </div>
            {articulos}
            <form action={setActivarGenerador(true)}>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" required></input>
                <label for="email">Email</label>
                <input type="email" name="email" required></input>
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" required></input>
                <input type="submit" value="Siguiente"></input>
            </form>
            {activarGenerador ? <Btn nombre="Generar orden" clicked={ordenGenerada()}></Btn> : <Btn nombre="Completar datos!"></Btn>}
            
        </div>
    );
    const carritoVacio =(
        <div style={cartStyle}>
            {datosProducto}
            <p>carritoVacio!</p>
            <Btn nombre="ir a productos!"></Btn>
        </div>
    )          

return(
    <div style={seccionCarrito}>
        {cartVacio ? infoCarrito : carritoVacio }
        {console.log(datosProducto)}
    </div>
    )

}

export default Cart;