import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([])

  const addItems = (inputText) => {
    setItems(prevItems => {
      return [...prevItems, inputText]
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-do List</h1>
      </div>
      <InputArea
        onAdd={addItems}
       />
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <TodoItem 
              key={index}
              text={todoItem}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
