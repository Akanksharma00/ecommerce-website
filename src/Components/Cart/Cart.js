import React,{useContext} from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import style from './Cart.module.css';

// const cartElements = [
//     {
//         title: 'Colors',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//         quantity: 2,
//     },
//     {
//         title: 'Black and white Colors',
//         price: 50,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//         quantity: 3,
//     },
//     {
//         title: 'Yellow and Black Colors',
//         price: 70,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//         quantity: 1,
//     }
// ]
    
const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    return(
        <Modal className={style.cart}>
            <div className={style['cart-head']}>
                <h2>CART</h2>
                <button className={style['cart-head__btn']} onClick={props.onHideCart}>X</button>
            </div>
            <div>
                <table>
                    <thead >
                        <tr>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartCtx.items.map(cartElem => {
                            return <tr>
                                <td><img src={cartElem.imageUrl} className={style['cart-body__image']}/>{cartElem.title}</td>
                                <td>{cartElem.price}</td>
                                <td>
                                    {cartElem.quantity}
                                    <Button>Remove</Button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><Button>Purchase</Button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Modal>
    );
};

export default Cart;