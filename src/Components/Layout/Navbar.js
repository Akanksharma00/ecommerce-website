import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';

import style from './Navbar.module.css';

const Navbar = (props) => {
    const [showCartBtn, setShowCartBtn] = useState(true);

    const hideCartBtnHandler = () => {
        setShowCartBtn(false);
    }

    return (
        <div className={style.navbar}>
            <ul className={style['navbar__ul']}>
                <li className={style['navbar__list']}>
                    <NavLink activeClassName={style.active} to='/index' onClick={hideCartBtnHandler}>HOME</NavLink>
                </li>
                <li className={style['navbar__list']}>
                    <NavLink activeClassName={style.active} to='/dynamicStore'>STORE</NavLink>
                </li>
                <li className={style['navbar__list']}>
                    <NavLink activeClassName={style.active} to='/about' onClick={hideCartBtnHandler}>ABOUT</NavLink>
                </li>
            </ul>
            {/* <button className={style['cart-button']}>Cart</button> */}
            {showCartBtn && <HeaderCartButton onShowCart={props.onShowCart}/> }
        </div>
    );
};

export default Navbar;