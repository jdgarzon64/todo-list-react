import React from 'react';

import { TodoContext } from '../../todoContext';

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
        <form onSubmit={ onSubmit }>
            <label >...</label>
            <textarea
                value={ newTodoValue }
                onChange={ onChange }
                placeholder='preparar la salsa'></textarea>
            <div>
                <button
                type='button'
                onClick={ onCancel }>
                    Cancelar
                </button>

                <button type='submit'>Agregar TODO</button>
            </div>
        </form>
    );
}

export { TodoForm };
