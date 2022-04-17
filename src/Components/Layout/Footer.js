import React from 'react';

import style from './Footer.module.css';

const Footer = (props) => {
    return(
        <section className={style.footer}>
            <div className={style['footer__logo']}>
                <h1>The Generics</h1>
            </div>
            <div className={style['footer__socialMedia-icons']}>
                <ul className={style['footer__socialMedia-iconsList']}>
                    <li className={style['footer__socialMedia-iconsList-li']}>Youtube</li>
                    <li className={style['footer__socialMedia-iconsList-li']}>Twitter</li>
                    <li className={style['footer__socialMedia-iconsList-li']}>facebook</li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;