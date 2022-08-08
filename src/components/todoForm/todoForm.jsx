import React from 'react';

import { TodoContext } from '../../todoContext';
import './todoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    };

    return (
        <form
            className='form-container'
            onSubmit={ onSubmit }>
            <textarea
                className='text-area'
                rows={ 6 }
                value={ newTodoValue }
                onChange={ onChange }
                placeholder='Write a new TODO'>
            </textarea>
            <div className='button-box'>
                <button
                    className='cancel button'
                    type='button'
                    onClick={ onCancel }>
                </button>
                <button
                    className='add button'
                    type='submit'>
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
