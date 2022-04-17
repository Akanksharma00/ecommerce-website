import React from 'react';

import Button from '../UI/Button';

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
            <Button>cart</Button>
        </div>
    );
};

export default Navbar;