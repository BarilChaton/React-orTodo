import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('')

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000), // marks a random Id number on tasks between 1 - 10000. So there will not be 2 tasks with same Id.
        text: input
    });

    setInput('');
};

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Add a todo" 
            value={input} name="text" 
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
        />
        <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm