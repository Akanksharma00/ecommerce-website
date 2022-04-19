import React,{useState} from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    amount: 0
}

const CartContextProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems([...items,item]);
    };

    const cartContext = {
        items: items,
        amount: 0,
        addItem: addItemToCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;