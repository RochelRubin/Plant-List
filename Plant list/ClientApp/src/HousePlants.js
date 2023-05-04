import React, { useState, useEffect } from "react";
import PlantInfo from "./components/PlantInfo";
import PlantGrid from "./components/PlantGrid";
import { Dropdown, FormControl, } from "bootstrap";
import axios from "axios";

const HousePlants = () => {
    const [plants, setPlants] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState("");




    // Fetch data from API when component mounts
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://house-plants2.p.rapidapi.com/all',
                headers: {
                    'X-RapidAPI-Key': 'a477e0d174msh3d147690621b353p103995jsn603821a059a2',
                    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
                }
            };
            const response = await axios.request(options);

            setPlants(response.data);
        };
        fetchData();
    }, []);


    const handleFilterChange = (event) => {
        setFilterCategory(event);
        setSearchTerm("");
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event);
        setFilterCategory('');
    };


    return (
        <div>
            <h1>House Plants</h1>
            <div>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {filterCategory === '' ? 'All Categories' : filterCategory}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => handleFilterChange('')} >  All Categories</button>
                        <button className="dropdown-item" type="button" onClick={() => handleFilterChange('Indoor')} >  Indoor</button>
                        <button className="dropdown-item" type="button" onClick={() => handleFilterChange('Outdoor')} >  Outdoor </button>
                        <button className="dropdown-item" type="button" onClick={() => handleFilterChange('Fruit Trees')} > Fruit Trees</button>


                    </div>
                </div>
                <div>
                    <input
                    size="small"
                        type="text"
                        placeholder="Search by Latin name or Family based"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <PlantGrid plants={plants} filterCategory={filterCategory} searchTerm={searchTerm} />
        </div>
    );
};

export default HousePlants;











