import React from 'react';

import style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return(
        <div>
            <button className={style['headerCart-btn']} onClick={props.onShowCart}>Cart</button>
            <span>0</span>
        </div>
    );
};

export default HeaderCartButton;