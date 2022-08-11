import React from 'react';

import { TodoContext } from '../../todoContext';

import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="todo-search"
            placeholder="search"
            onChange={ onSearchValueChange}
            value={ searchValue }
        />
    );
}

export { TodoSearch };