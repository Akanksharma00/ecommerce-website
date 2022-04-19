import React,{useContext} from 'react';

import CartContext from '../../store/cart-context';

import style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

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