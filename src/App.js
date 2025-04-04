import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
      setTodos([...todos, newItem]);
      setNewItem('');
  };

  const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a todo"
          className="todo-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <span>{todo}</span>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
