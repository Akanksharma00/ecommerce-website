import React from 'react';
import {Link} from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';

import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <ul className={style['navbar__ul']}>
                <li className={style['navbar__list']}>
                    <Link to='#'>HOME</Link>
                </li>
                <li className={style['navbar__list']}>
                    <Link to='/dynamicStore'>STORE</Link>
                </li>
                <li className={style['navbar__list']}>
                    <Link to='/about'>ABOUT</Link>
                </li>
            </ul>
            {/* <button className={style['cart-button']}>Cart</button> */}
            <HeaderCartButton onShowCart={props.onShowCart}/> 
        </div>
    );
};

export default Navbar;