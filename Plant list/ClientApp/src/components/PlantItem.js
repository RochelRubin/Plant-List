import React from 'react';
import { Link } from 'react-router-dom';
import PlantInfo from './PlantInfo';

const PlantItem = ({ plant }) => {

    return (
        <div>
            {plant.map((plant) => (
                <tr key={plant.id}>
                    <td>
                        <Link to={`/plant/${plant.id}`}>
                            {plant.latinName}
                        </Link>
                    </td>
                    <td>{plant.family}</td>
                    <td>{plant.category}</td>
                    <td>{plant.style}</td>
                    <td>{plant.growth}</td>
                </tr>
            ))}
        </div>
    );
};

export default PlantItem;