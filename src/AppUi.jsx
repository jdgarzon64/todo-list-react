import React from 'react';

import { TodoContext } from './todoContext';
import './AppUi.css'
import { 
    CreateTodoButton,
    Modal,
    TodoCounter,
    TodoForm,
    TodoItem,
    TodoList,
    TodoSearch
  } from './components/index';

import Button  from '@mui/material/Button';

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <>
        <div className='main-container'>
          <TodoCounter />
          <TodoSearch />
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
              { openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
          <CreateTodoButton setOpenModal={ setOpenModal }/>
        </div>
      </>
    );
}

export { AppUi };