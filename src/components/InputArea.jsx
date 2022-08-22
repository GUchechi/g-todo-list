import React, { useState } from 'react'

const InputItem = (props) => {
  const [inputText, setInputText] = useState("")


  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className='form'>
        <input onChange={handleChange} type="text" placeholder='Place your todo list here' value={inputText} />
        <button onClick={() => {
          props.onAdd(inputText)
          setInputText("")
        }}>
          <span>Add</span>
        </button>
    </div>
  )
}

export default InputItem