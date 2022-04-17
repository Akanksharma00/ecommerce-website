import React from 'react';

import style from './Button.module.css';

const Button = (props) => {
    console.log(props.style);
    return(
        <button className={style.button} >{props.children}</button>
    );
};

export default Button;