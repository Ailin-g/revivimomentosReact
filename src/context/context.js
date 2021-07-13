import React from 'react';

const cartContext = React.createContext();

export const ProviderCartContext = cartContext.Provider;
export const ConsumerCartContext = cartContext.Consumer;

export default cartContext;