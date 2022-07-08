import React from 'react';

import { useLocalStorage } from './useLocalStorage';

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
const TodoContext = React.createContext();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', defaultTodos);

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
        saveTodos(newTodos);
      };

      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={ {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
         } }>
            { props.children }
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider};