import React from 'react';

const cartContext = React.createContext({
    items: [],
    amount: 0,
    addItem: (item) => {}
});

export default cartContext;