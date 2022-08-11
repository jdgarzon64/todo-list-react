import React from 'react';

import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);

      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;

      const searchedTodos = !searchValue.length ?
        todos :
        todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

      const nextKey = todos[todos.length - 1];
      const addTodo = (text) => {
        const newTodos = [...todos];

        newTodos.push({
          completed: false,
          text: text,
          key: parseInt(nextKey?.key || 0) + 1
        });

        saveTodos(newTodos);
      };

      const completeTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.key === key);
        const newTodos = [...todos];

        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };

      const deleteTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.key === key);
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={ {
            addTodo,
            completedTodos,
            completeTodo,
            deleteTodo,
            error,
            loading,
            openModal,
            searchedTodos,
            searchValue,
            setOpenModal,
            setSearchValue,
            totalTodos
         } }>
            { props.children }
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider};