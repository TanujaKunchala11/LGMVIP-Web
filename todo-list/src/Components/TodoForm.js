import React from 'react'

export default function TodoForm() {
        
    const [input,setInput] = useState('');

    const  handleSubmit = (e) => {
        e.preventDefault()
    }

  return ( <form>
      <input type="text" placeholder="Add a todo" value={input} name=".text"  />
      <button type="submit"  onclick={handleSubmit} className="todo-btn" >ADD TODO</button>
  </form>
  );
}
