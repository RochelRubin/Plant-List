import React from 'react';
import PlantItem from './PlantItem';

const PlantGrid = ({ plants, filterCategory, searchTerm }) => {

    const filteredPlants = plants.filter(plant => {
        // check if plant matches search term
        const matchesSearch = plant.latinName.toLowerCase().includes(searchTerm.toLowerCase()) || plant.family.toLowerCase().includes(searchTerm.toLowerCase());

        // check if plant matches category filter
        const matchesCategory = filterCategory === '' || plant.category === filterCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <table className="striped bordered hover">
                <thead>
                    <tr>
                        <th>Latin Name</th>
                        <th>Family</th>
                        <th>Category</th>
                        <th>Style</th>
                        <th>Growth</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlants.map(plant => (
                        <PlantItem key={plant.id} plant={plant} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlantGrid;



