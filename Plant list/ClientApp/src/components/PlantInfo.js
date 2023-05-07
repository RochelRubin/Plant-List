import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios"
import { useParams } from 'react-router-dom'



const PlantInfo = () => {
    const [plant, setPlant] = useState(null);
    const history = useHistory();
const {id} = useParams();

   
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `https://house-plants2.p.rapidapi.com/id/${id}`,
                headers: {
                    'X-RapidAPI-Key': 'insert-your-api-key-here',
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
            <h2>{plant["Latin name"]}</h2>
            <img src={plant.Img } />

<div>
  <b>Common name:</b> {plant["Common name"]}
</div>
<div>
  <b>Latin name:</b> {plant["Latin name"]}
</div>
<div>
  <b>Family:</b> {plant["Family"]}
</div>
<div>
  <b>Category:</b> {plant["Categories"]}
</div>
<div>
  <b>Style:</b> {plant["Style"]}
</div>
<div>
  <b>Growth:</b> {plant["Growth"]}
</div>
<div>
  <b>Origin:</b> {plant["Origin"][0]}
</div>
<div>
  <b>Available sizes (Pot):</b> {plant["Available sizes (Pot)"]}
</div>
<div>
  <b>Climate:</b> {plant["Climat"]}
</div>
<div>
  <b>Zone:</b> {plant["Zone"][0]}
</div>
<div>
  <b>Light tolered:</b> {plant["Light tolered"]}
</div>
<div>
  <b>Light ideal:</b> {plant["Light ideal"]}
</div>
<div>
  <b>Watering:</b> {plant["Watering"]}
</div>
<div>
  <b>Disease:</b> {plant["Disease"] || "N/A"}
</div>
<div>
  <b>Insects:</b> {plant["Insects"].join(", ")}
</div>
<div>
  <b>Bearing:</b> {plant["Bearing"]}
</div>
<div>
  <b>Blooming season:</b> {plant["Blooming season"]}
</div>
<div>
  <b>Color of leaf:</b> {plant["Color of leaf"].join(", ")}
</div>
<div>
  <b>Color of blooms:</b> {plant["Color of blooms"]}
</div>
<div>
  <b>Use:</b> {plant["Use"].join(", ")}
</div>
<div>
  <b>Appeal:</b> {plant["Appeal"]}
</div>
<div>
  <b>Pruning:</b> {plant["Pruning"]}
</div>
<div>
  <b>Description:</b> {plant["Description"] || "N/A"}
</div>
<div>
  <b>Availability:</b> {plant["Avaibility"]}
</div>
<div>
</div>


            <button onClick={handleBackClick}>Back</button>
        </>
    );
};


export default PlantInfo