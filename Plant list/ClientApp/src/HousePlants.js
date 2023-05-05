import React, { useState, useEffect } from "react";
import PlantGrid from "./components/PlantGrid";
import axios from "axios";

const HousePlants = () => {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setSelectedCategory] = useState('');

    // Fetch data from API when component mounts
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://house-plants2.p.rapidapi.com/all',
                headers: {
                    'X-RapidAPI-Key': '2ca4704713msh3b05be2231f1465p1e5b4ejsn1fde519286e8',
                    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
                }
            };
            const response = await axios.request(options);

            setPlants(response.data);
        };
        fetchData();
    }, []);


    // Create a list of unique category names
    const categoryList = [...new Set(plants.map((plant) => plant.Categories))];

    // Function to handle dropdown option selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchTerm('')
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event);
        setSelectedCategory('');
    };


    return (
        <div>
            <h1>House Plants</h1>

            <div className="dropdown">


                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                >
                    {filterCategory || "All Categories"}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {categoryList.map((category) => (
                        <button
                            className="dropdown-item"
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                <div>
                    <input
                        type="text"
                        placeholder="Search by Latin name or Family based"
                        className="form-control smaller-search"
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                </div>
            </div>
            <PlantGrid plants={plants} filterCategory={filterCategory} searchTerm={searchTerm} />
        </div>
    );
};

export default HousePlants;











