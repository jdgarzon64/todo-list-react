import React from 'react';

import { 
    CreateTodoButton,
    TodoCounter,
    TodoItem,
    TodoList,
    TodoSearch
  } from './components/index';

function AppUi({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
        <TodoCounter
          total={ totalTodos }
          completedTodos={ completedTodos }
        />
        <TodoSearch
          searchValue={ searchValue }
          setSearchValue={ setSearchValue }
        />
        <TodoList>
          { searchedTodos.map(todo => (
              <TodoItem
                key={ todo.text }
                text={ todo.text }
                completed={ todo.completed }
                onComplete={ () => completeTodo(todo.text) }
                onDelete={ () => deleteTodo(todo.text) }
              />
            ))
          }
        </TodoList>
        <CreateTodoButton />
      </>
    );
}

export { AppUi };