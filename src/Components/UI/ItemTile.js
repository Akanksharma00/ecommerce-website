import React,{useContext} from "react";
import CartContextProvider from "../../store/cart-context";

const ItemTile = (props) => {
    const cartCtx = useContext(CartContextProvider);

    const addItemHandler = () => { 
        const item = {
            id: props.data.id,
            img: props.data.imageUrl,
            title: props.data.title,
            price: props.data.price
        }
        cartCtx.addItem(item);
    }

    return(
        <div>
            <h2 >{props.data.title}</h2>
            <img src={props.data.imageUrl} alt='product img'/>
            <div>
               <h4>{props.data.price}</h4>
               <button onClick={addItemHandler}>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ItemTile;