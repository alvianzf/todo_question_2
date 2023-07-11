import React, { useState } from 'react';
import styles from './App.module.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(['Learn React', 'Build an app', 'Deploy it']);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✅ ${updatedTodos[index]}`;
    setTodos(updatedTodos);
  };

  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className={styles.addButton} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <TodoList todos={todos} onComplete={handleComplete} onDelete={handleDelete} />
    </div>
  );
};

export default App;
