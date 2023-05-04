import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios"
import { useParams } from 'react-router-dom'



const PlantInfo = () => {
    const [plant, setPlant] = useState(null);
    const history = useHistory();
const id = useParams();

   
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `https://house-plants2.p.rapidapi.com/id/${id}`,
                headers: {
                    'X-RapidAPI-Key': 'a477e0d174msh3d147690621b353p103995jsn603821a059a2',
                    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
                }
              };
              
              const response = await axios.request(options);
    
            setPlant(response.data);
        };
    
        fetchData();
    }, []);

    const handleBackClick = () => {
        history.goBack();
    };

    if (!plant) {
        return null;
    }

    return (
        <>
            <h2>{plant.latinName}</h2>
            <img src={plant.image ? plant.image : 'placeholder.jpg'} />

            <div>
                <b>Family:</b> {plant.family}
            </div>
            <div>
                <b>Category:</b> {plant.category}
            </div>
            <div>
                <b>Style:</b> {plant.style}
            </div>
            <div>
                <b>Growth:</b> {plant.growth}
            </div>

            <button onClick={handleBackClick}>Back</button>
        </>
    );
};


export default PlantInfo