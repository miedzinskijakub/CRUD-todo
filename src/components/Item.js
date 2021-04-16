import React from 'react';
import '../App.css';

const Item = ({ item, removeItem }) => {
    return(
        <div>
            <span className="itemStyle">{item}</span>
            <button className="removeStyle" onClick={() => removeItem(item)}>X</button>
        </div>
    )
}

export default Item;