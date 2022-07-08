import React from 'react';

import { TodoContext } from './todoContext';
import { 
    CreateTodoButton,
    TodoCounter,
    TodoItem,
    TodoList,
    TodoSearch
  } from './components/index';

function AppUi() {
    return (
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          { ({error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo}) => (
              <TodoList>
              { error && <p>hubo un error en la app</p> }
              { loading && <p>cargando la app</p> }
              { (!loading && !searchedTodos.length) && <p>crea tu primer TODO</p>}
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
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </>
    );
}

export { AppUi };