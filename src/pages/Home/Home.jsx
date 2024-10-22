import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'


const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
//testing


const Home = () => {
    const [date, setDate] = useState('');
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImage = async (chosenDate) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(APOD_URL + (chosenDate ? `&date=${chosenDate}` : ''));
            console.log("API Response:", response);  // Debugging API response
            setApodData(response.data);
        } catch (err) {
            console.error("API Error:", err);  // Log the actual error
            setError('Error at catching data of NASA. Try another date!');
        } finally {
            setLoading(false);
            
        }
    };
    

    useEffect(() => {
        fetchImage();
    }, []);

    const handleDateChange = (e) => setDate(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchImage(date);
    };

    return (
        
        <div className="container">
            <h1>NASA Astronomy Picture of the Day</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}


                    //toISOString converte a data pra o Formato iso, em um array.
                    // split('T') divide em dois onde tem o T: ['2024-10-18', '14:36:59.123Z']
                    // [0] pega o primeiro, ou seja, a data que precisamos 
                    
                    max={new Date().toISOString().split('T')[0]}
                    
                />
                <button type="submit">Search by date</button>
            </form>
    
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
    
            {apodData && (
                <div>
                    <h2>{apodData.title}</h2>
                    <p>{apodData.date}</p>
                    <img
                        src={apodData.url}
                        alt={apodData.title}
                    />
                    <p>{apodData.explanation}</p>
                </div>
            )}
            <br></br>
           <> today the moon is beautiful, and so are the stars s2 </>
        </div>
    

        
        
    );
    
};

export default Home;
