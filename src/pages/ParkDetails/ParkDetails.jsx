import './ParkDetails.css'
import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button.jsx';
import fallbackImg from '../../assets/fallbackImg.jpg';
import {useParams} from 'react-router-dom';

function ParkDetails() {
    const {id} = useParams();
    const [park, setPark] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

    // Toevoegen aan favorieten & bezocht
    const [isFavorite, setIsFavorite] = useState(false);
    const [isVisited, setIsVisited] = useState(false);

    useEffect(() => {
        // Fetch juiste park data adhv de ID
        async function fetchParkDetails() {
            try {
                const response = await fetch(
                    `https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=${API_KEY}`
                );
                const data = await response.json();

                // hier returned de API een array, pak het eerste en enige resultaat
                setPark(data.data[0]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching park details", error);
                setLoading(false);
            }

            const savedFavorites = JSON.parse(localStorage.getItem('faveParks')) || [];
            const exists = savedFavorites.some(p => p.parkCode === id);
            setIsFavorite(exists);

            const savedVisited = JSON.parse(localStorage.getItem('visitedParks')) || [];
            const existsVisited = savedVisited.some(p => p.parkCode === id);
            setIsVisited(existsVisited);
        }

        fetchParkDetails();
    }, [id]);

    const toggleFavorite = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('faveParks')) || [];
        if (isFavorite) {
            const updatedFavorites = savedFavorites.filter(p => p.parkCode !== id);
            localStorage.setItem('faveParks',JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            const parkToSave = {
                id: park.id,
                parkCode: park.parkCode,
                name: park.name,
                image: park.images?.[0]?.url,
                description: park.description
            };
            const updated = [...savedFavorites, parkToSave];
            localStorage.setItem('faveParks', JSON.stringify(updated));
            setIsFavorite(true);
        }
    };

    const toggleVisited = () => {
        const savedVisited = JSON.parse(localStorage.getItem('visitedParks')) || [];
        if (isVisited) {
            const updatedVisited = savedVisited.filter(p => p.parkCode !== id);
            localStorage.setItem('visitedParks', JSON.stringify(updatedVisited));
            setIsVisited(false);
        } else {
            const parkToSaveVisited = {
                id: park.id,
                parkCode: park.parkCode,
                name: park.name,
                image: park.images?.[0]?.url,
                description: park.description
            };
            savedVisited.push(parkToSaveVisited);
            localStorage.setItem('visitedParks', JSON.stringify(savedVisited));
            setIsVisited(true);
        }
    };

    if (loading) return <div className="outer-container"><p>Loading details...</p></div>;
    if (!park) return <div className="outer-container"><p>Park not found.</p></div>;

    return (
        <div className="outer-container">
            <main className="page-container-parkdetails">
                <div className="parkdetails-park-image">
                    <img
                        src={park.images?.[0]?.url || fallbackImg}
                        alt={park.fullName}
                    />
                </div>

                <p className="parkdetails-park-location">
                    {park.states} - {park.addresses?.[0]?.city}
                </p>

                <div className="parkdetails-bar-full">
                    <p className="parkdetails-park-title">
                        {park.name}
                    </p>
                    <div className="parkdetails-bar-options">
                        <Button
                            type="button"
                            disabled={false}
                            label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                            onClick={toggleFavorite}
                        />
                        <Button
                            type="button"
                            disabled={false}
                            label={isVisited ? "Remove from visited" : "Visited"}
                            onClick={toggleVisited}
                        />

                    </div>
                </div>

                <div className="parkdetails-park-discription">
                    <p>{park.description}</p>
                    <br/>
                    <h3>How to get there?</h3>
                    <p className="parkdetails-park-discription">
                        {park.directionsInfo}</p>
                    <br />
                    <h3>Activities:</h3>
                    <ul className="parkdetails-activities-list">
                        {park.activities?.slice(0, 5).map(act => (
                            <li key={act.id}>{act.name}</li>
                            ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default ParkDetails