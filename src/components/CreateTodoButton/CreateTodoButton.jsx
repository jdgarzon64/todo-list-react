import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(openModal => !openModal);
    };
    return (
        <button
            className="todo-button"
            onClick={() => onClickButton()}>+
        </button>
    );
}

export { CreateTodoButton };
