import React, { createContext } from 'react';

const cartContext = createContext({});

export const ProviderCartContext = cartContext.Provider;
export const ConsumerCartContext = cartContext.Consumer;

export default cartContext;

// export const ProviderCartContext  ({defaultValue=[], children}) => { //si o si poner un valor por defecto o el useState se inicializa con el children
//     <aca adentro van las funciones del carrito> </aca>
// }