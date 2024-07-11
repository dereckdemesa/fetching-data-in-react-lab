import React from 'react';

const StarshipCard = ({ starship }) => {
    return (
        <li>
            <h3>{starship.name}</h3>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
        </li>
    );
};

export default StarshipCard;

