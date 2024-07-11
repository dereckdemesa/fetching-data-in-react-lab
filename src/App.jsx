// src/App.jsx

import React, { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { fetchAllStarships } from './services/starshipService';
import './App.css';

const App = () => {
    const [starships, setStarships] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStarships = async () => {
            try {
                const starshipData = await fetchAllStarships();
                setStarships(starshipData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching starships');
                setLoading(false);
                console.error('Error fetching starships:', error);
            }
        };

        getStarships();
    }, []);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    const filteredStarships = starships.filter((starship) =>
        starship.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h1>Starship Database</h1>
            {error && <p>{error}</p>}
            <StarshipSearch onSearch={handleSearch} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <StarshipList starships={filteredStarships} />
            )}
        </div>
    );
};

export default App;
