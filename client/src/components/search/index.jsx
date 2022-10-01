import React from 'react';
import './search.scss'

const Search = ({ setQuery }) => {
    return (
        <div className={'page-search'}>
            <input
                className={'search'}
                placeholder={"Поиск..."}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}/>
        </div>
    );
};

export default Search;