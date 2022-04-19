import React,{useContext} from "react";

import Button from "./Button";

import style from './ItemTile.module.css';

const ItemTile = (props) => {
    return(
        <div>
            <h2 >{props.data.title}</h2>
            <img src={props.data.imageUrl}/>
            <div>
               <h4>{props.data.price}</h4>
               <Button>ADD TO CART</Button>
            </div>
        </div>
    );
};

export default ItemTile;