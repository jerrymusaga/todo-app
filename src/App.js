import React, {useState} from 'react';
import { Header } from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList'))
  );

  const [newItem, setNewItem] = useState('');

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {id, item, checked: false}
    const listItem = [...items, newItem]
    submitAndsave(listItem);
  }

  const handleNewItemSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addNewItem(newItem)
    setNewItem('')
  }

  const submitAndsave = (listItem) => {
    setItems(listItem)
    localStorage.setItem('shoppingList', JSON.stringify(listItem));
  }

  const handleCheck = (id) => {
      const listItem = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
      submitAndsave(listItem);
  }

  const handleDelete = (id) => {
      const listItem = items.filter((item) => item.id !== id )
      submitAndsave(listItem)
  }
  
  return (
    <div className="App">
      <Header title="My Todo-List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleNewItemSubmit={handleNewItemSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
