import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
    if (!starships.length) {
        return <p>No starships found.</p>;
    }

    return (
        <section>
            <ul>
                {starships.map((starship) => (
                    <StarshipCard key={starship.url} starship={starship} />
                ))}
            </ul>
        </section>
    );
};

export default StarshipList;

