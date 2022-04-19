import React from 'react';
import {NavLink} from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';

import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <ul className={style['navbar__ul']}>
                <li className={style['navbar__list']}>
                    <NavLink to='#'>HOME</NavLink>
                </li>
                <li className={style['navbar__list']}>
                    <NavLink activeClassName={style.active} to='/dynamicStore'>STORE</NavLink>
                </li>
                <li className={style['navbar__list']}>
                    <NavLink activeClassName={style.active} to='/about'>ABOUT</NavLink>
                </li>
            </ul>
            {/* <button className={style['cart-button']}>Cart</button> */}
            <HeaderCartButton onShowCart={props.onShowCart}/> 
        </div>
    );
};

export default Navbar;