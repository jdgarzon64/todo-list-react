import React from 'react';

import './App.css';
import { AppUi } from './AppUi';

const defaultTodos = [
  {
    text: 'Cocinar',
    completed: true
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: true
  },
  {
    text: 'Limpiar el cuarto',
    completed: false
  }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = !searchValue.length ?
    todos :
    todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUi
      totalTodos={ totalTodos }
      completedTodos={ completedTodos }
      searchValue={ searchValue }
      setSearchValue={ setSearchValue }
      searchedTodos={ searchedTodos }
      completeTodo={ completeTodo }
      deleteTodo={ deleteTodo }
    />
  );
}

export default App;
