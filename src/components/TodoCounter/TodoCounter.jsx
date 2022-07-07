import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completedTodos}) {
    return (
        <h2 className="todo-counter">Has completado { completedTodos }/{ total } TODOs</h2>
    );
}

export { TodoCounter };