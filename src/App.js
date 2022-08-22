import './App.css';

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-do List</h1>
      </div>

      <div className='form'>
        <input type="text" placeholder='Place your todo list here' />
        <button>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default App;
