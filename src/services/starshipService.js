const BASE_URL = 'https://swapi.dev/api/starships';

export const fetchAllStarships = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch starships');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const fetchStarshipById = async (id) => { 
    try {
        const response = await fetch(`${BASE_URL}/${id}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch starship with id');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const searchStarships = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/?search=${query}`);
        if (!response.ok) {
            throw new Error(`Failed to search starships with query "${query}"`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
