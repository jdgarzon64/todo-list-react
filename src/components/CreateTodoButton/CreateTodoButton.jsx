import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const message = 'Modal Abierto';
    const onClickButton = () => {
        console.log(props);
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
