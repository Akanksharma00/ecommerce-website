import React from 'react';
import ItemTile from './ItemTile';

const Products = (props) =>{
    return (
        <section>
            <div>
                <h2>{props.sectionName}</h2>
                <div>
                    {props.data.map(i => (
                        <ItemTile key={i.id} data={i}/>
                    ))}  
                </div>
            </div>
        </section>
    )
};

export default Products;