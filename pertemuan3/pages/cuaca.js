import { useState, useEffect } from "react";

const ListCuaca = () => {
    const [cuaca, setCuaca] = useState([]);

    useEffect(() => {
        const fetchCuaca = async () => {
            const response = await fetch('api/cuaca');
            const cuaca = await response.json();
            setCuaca(cuaca);
        };

        fetchCuaca();
    }, []);

    return (
        <div>
            <h1>Daftar Cuaca</h1>
            <hr/>
            <ul>
                {cuaca.map((cuaca) => (
                    <div key={cuaca.id}>
                        <p><strong>City: </strong>{cuaca.city}</p>
                        <p><strong>Country: </strong>{cuaca.country}</p>
                        <p><strong>Latitude: </strong>{cuaca.latitude}</p>
                        <p><strong>longitude: </strong>{cuaca.longitude}</p>
                        <p><strong>temperature: </strong>{cuaca.temperature}</p>
                        <p><strong>weather_description: </strong>{cuaca.weather_description}</p>
                        <p><strong>humidity: </strong>{cuaca.humidity}</p>
                        <p><strong>wind_speed: </strong>{cuaca.wind_speed}</p>
                       
                        
                        <hr/>
                    </div>
                ))};
                
            </ul>
        </div>
    );
};

export default ListCuaca;