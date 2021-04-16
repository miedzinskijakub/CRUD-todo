import React from 'react';
import Item from './Item';
import '../App.css';

const ItemList = ({ items, removeItem }) => {
    return(
        <div>
            <ul>
                {items.map((item) => (
                    <li>
                        <Item key={item} item={item} removeItem={removeItem}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {ItemList as default};