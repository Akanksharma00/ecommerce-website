import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <ul className={style['navbar__ul']}>
                <li className={style['navbar__list']}><a href='#'>HOME</a></li>
                <li className={style['navbar__list']}><a href='#'>STORE</a></li>
                <li className={style['navbar__list']}><a href='#'>ABOUT</a></li>
            </ul>
            {/* <button className={style['cart-button']}>Cart</button> */}
            <HeaderCartButton onShowCart={props.onShowCart}/> 
        </div>
    );
};

export default Navbar;