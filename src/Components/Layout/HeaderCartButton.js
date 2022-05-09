import React,{useContext} from 'react';

import CartContext from '../../store/cart-context';

import style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    // const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
    //     return currNumber + item.amount;
    // },0);

    return(
        <div>
            <button className={style['headerCart-btn']} onClick={props.onShowCart}>
                Cart
                <span className={style.badge}>{cartCtx.items.length}</span>
            </button>
        </div>
    );
};

export default HeaderCartButton;