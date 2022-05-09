import React,{useReducer} from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        console.log(existingCartItemIndex);
        if(existingCartItemIndex !== -1){
            alert('Item already added to the cart');

            return {
                items: state.items,
                totalAmount: state.totalAmount
            }
        }else{
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            const updatedItems = [...state.items,action.item];

            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }

        
    }

    if(action.type === 'REMOVE'){
        console.log('remove: ',action.id);
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        console.log('index: ',existingCartItemIndex);
        const existingCartItem = state.items[existingCartItemIndex];
        console.log('item: ',existingCartItem);
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        console.log('updatedAmount: ',updatedTotalAmount);
        console.log('Lets catch the error: ',state.items);
        let updatedItems = state.items.filter(item => item.id !== action.id);
        console.log('updateItems: ',updatedItems);
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD',item:item});
    };

    const removeItemFromCartHandler = (id) => {
        console.log('context: ', id)
        dispatchCartAction({type:'REMOVE',id:id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;