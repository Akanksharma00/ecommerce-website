import React from 'react';

import style from './Header.module.css';

const Header = (props) => {
    return(
        <div className={style.header}>
            <h1 className={style['header__h1']}>The Generics</h1>
        </div>
    );
};

export default Header;