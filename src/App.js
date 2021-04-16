import React, { useEffect, useState } from 'react';
import './App.css';
import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    
    if(items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

  return (
    <div className="App">
      <div className="formCont">
      <div className="left">
      <header className="header">To Do Items</header>
      <AddItemForm addItem={addItem}/>
      </div>
      <ItemList items={items} removeItem={removeItem}/>
      </div>
    </div>
  );
}

export default App;
