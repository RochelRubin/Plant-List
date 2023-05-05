import React from 'react';
import { Link } from 'react-router-dom';

const PlantItem = ({ plant }) => {

    return (
        
          
                <tr key={plant.id}>
                    <td>
                        <Link to={`/plant/${plant.id}`}>
                            {plant["Latin name"]}
                        </Link>
                    </td>
                    <td>{plant.Family}</td>
                    <td>{plant.Categories}</td>
                    <td>{plant["Other names"]}</td>
                    <td>{plant.Growth}</td>
                </tr>
           
        
    );
};

export default PlantItem;