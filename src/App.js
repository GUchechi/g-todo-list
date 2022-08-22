import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("")


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
        <button>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default App;
