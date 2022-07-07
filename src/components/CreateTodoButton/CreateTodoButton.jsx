import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const message = 'Modal Abierto';
    const onClickButton = (msg) => {
        alert(msg);
    };
    return (
        <button
            className="todo-button"
            onClick={() => onClickButton(message)}>+
        </button>
    );
}

export { CreateTodoButton };
