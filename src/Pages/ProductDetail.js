import React from 'react';
import { useParams } from 'react-router-dom';

import style from './ProductDetails.module.css';

const ProductDetail = () => {
    const params = useParams();

    return(
        <React.Fragment>
            <section className={style.imgSection}>
                <div className={style['imgSection__imgIcon']}>
                    <ul className={style['imgSection__imgList']}>
                        <li><img className={style['imgSection__imgIcon-image']} src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png'/></li>
                        <li><img className={style['imgSection__imgIcon-image']} src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png'/></li>
                        <li><img className={style['imgSection__imgIcon-image']} src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png'/></li>
                    </ul>
                </div>
                <div className={style['imgSection__zoomImg']}>
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png'/>
                </div>
            </section>
            <section className={style.detailSection}>
                <div>
                    <h3>Product Title</h3>
                    <p>Nam ut felis sit amet lorem eleifend placerat. Maecenas maximus egestas sem ut volutpat. Integer consequat blandit tellus at aliquam. Phasellus ac dictum elit. Curabitur vel fringilla magna. Vestibulum eleifend, dui in sagittis blandit, ante risus aliquet mi, quis pharetra magna mi vitae odio. Aliquam in aliquam leo. Nullam mollis est vel est venenatis vehicula.</p>
                </div>
                <div>
                    <h3>Review</h3>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ProductDetail;