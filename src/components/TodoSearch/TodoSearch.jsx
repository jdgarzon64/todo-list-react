// import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    // const [searchValue, setSearchValue] = React.useState('');
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="todo-search"
            placeholder="my placeholder"
            onChange={ onSearchValueChange}
            value={ searchValue }
        />
    );
}

export { TodoSearch };