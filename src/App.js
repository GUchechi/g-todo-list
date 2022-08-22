import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])

  const addItems = () => {
    setItems(prevItems => {
      return [...prevItems, inputText]
    });
    setInputText("")
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-do List</h1>
      </div>

      <div className='form'>
        <input onChange={handleChange} type="text" placeholder='Place your todo list here' value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
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
