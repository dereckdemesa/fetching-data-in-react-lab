import React, { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                name="query" 
                placeholder="Search for starships" 
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default StarshipSearch;
