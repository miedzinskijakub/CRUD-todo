import React, { useState } from 'react';
import '../App.css';



const AddItemForm = ({ addItem }) => {

    const [item, setItem] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addItem(item);
        setItem('');
    };


    return(
        <div>
            <form className="formStyle" onSubmit={handleSubmit}>
                <input placeholder="Add item" className="inputItem" value={item} onChange={(e) => setItem(e.target.value)}/>
                <button className="buttonItem">Add Item</button>
            </form>
        </div>
    )
}

export default AddItemForm;