import { useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
  delete: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addhandle = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        delete: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <div className="form">
        <h1>TO DO TASK</h1>
        <input
          className='input'
          type="text"
          placeholder='To do ...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='btn-add' onClick={addhandle}>Add</button>
      </div>
      <div className="wrapper">
        {todos.length > 0 && todos.map((todo) => (
          <div className="box" key={todo.id}>
            <p className='text'>{todo.text}</p>
            <button className='btn-delet' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
