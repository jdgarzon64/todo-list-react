import React from 'react';

import { TodoContext } from '../../todoContext';
import './TodoList.css';

function TodoList(props) {
    const { totalTodos } = React.useContext(TodoContext);

    return (
        <section>
            {(
                totalTodos > 0 ?
                <div className='list-box'>
                    <ul className="todo-list">
                        {props.children}
                    </ul>
                </div>
                : null
            )}
        </section>
    );
}

export { TodoList };
