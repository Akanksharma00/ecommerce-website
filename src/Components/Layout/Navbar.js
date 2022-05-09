import React,{useState, useContext} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import HeaderCartButton from './HeaderCartButton';

import style from './Navbar.module.css';

const Navbar = (props) => {
    const authCtx = useContext(AuthContext);
    const [showCartBtn, setShowCartBtn] = useState(true);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }

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
                <li className={style['navbar__list']}>
                    <NavLink activeClassName={style.active} to='/contact' onClick={hideCartBtnHandler}>CONTACT US</NavLink>
                </li>
                {!isLoggedIn && <li className={style['navbar__list']}>
                    <NavLink to='/login' >LOGIN</NavLink>
                </li>}
                {isLoggedIn && <li className={style['navbar__list']}>
                    <button onClick={logoutHandler}>LOG OUT</button>
                </li>}
            </ul>
            {/* <button className={style['cart-button']}>Cart</button> */}
            {showCartBtn && <HeaderCartButton onShowCart={props.onShowCart}/> }
        </div>
    );
};

export default Navbar;