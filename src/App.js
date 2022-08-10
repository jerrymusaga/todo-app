import React, {useState} from 'react';
import { Header } from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  const [items, setItems] = useState([
    {
        'id': 1,
        'item': "This is the first item",
        'checked': false
    },
    {
        'id': 2,
        'item': "This is the second item",
        'checked': true
    },
    {
        'id': 3,
        'item': "This is the third item",
        'checked': true 
    }
]);

const handleCheck = (id) => {
    const listItem = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItem)
    localStorage.setItem('shoppingList', JSON.stringify(listItem));
}

const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id )
    setItems(listItem)
    localStorage.setItem('shoppingList', JSON.stringify(listItem));
}
  
  return (
    <div className="App">
      <Header title="My Todo-List"/>
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
