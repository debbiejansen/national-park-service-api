import './ParkDetails.css';
import React, {useEffect, useState, useContext} from 'react';
import Button from '../../components/Button/Button.jsx';
import fallbackImg from '../../assets/fallbackImg.jpg';
import {AuthContext} from '../../context/AuthContext.jsx';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function ParkDetails() {
    const {id} = useParams(); // Dit is de parkCode van de URL
    const {user} = useContext(AuthContext);
    const [park, setPark] = useState(null);
    const [loading, setLoading] = useState(true);

    // Opslaan van de database ID van de favorite/visited
    const [favoriteEntryId, setFavoriteEntryId] = useState(null);
    const [visitedEntryId, setVisitedEntryId] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";
    const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

    // Centralized headers
    const headers = {
        'novi-education-project-id': '1a3cf68c-7efb-4295-a36a-681e9ea8ee2b',
        'accept': '*/*'
    };

    useEffect(() => {
        async function fetchParkDetails() {
            try {
                setLoading(true);
                // 1. Fetch NPS data
                const npsResponse = await axios.get(
                    `https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=${API_KEY}`
                );
                const currentPark = npsResponse.data.data[0];
                setPark(currentPark);

                // 2. Check of het park al is favorited/visited
                if (user && currentPark) {
                    const [favResponse, visResponse] = await Promise.all([
                        axios.get(`${BASE_URL}/favouriteparks?userId=${user.id}`, {headers}),
                        axios.get(`${BASE_URL}/visitedparks?userId=${user.id}`, {headers})
                    ]);

                    // Zoek input dat deze parkCode in de string bevat
                    const favEntry = favResponse.data.find(item => item.parkCodes?.includes(id));
                    const visEntry = visResponse.data.find(item => item.parkCodes?.includes(id));

                    if (favEntry) setFavoriteEntryId(favEntry.id);
                    if (visEntry) setVisitedEntryId(visEntry.id);
                }
            } catch (error) {
                console.error("Error fetching park details", error);
            } finally {
                setLoading(false);
            }
        }

        fetchParkDetails();
    }, [id, user]);

    const toggleFavorite = async () => {
        if (!user) return; // 'alert' /tooltip voor inloggen om button te gebruiken

        try {
            if (favoriteEntryId) {
                // DELETE met behulp van entry ID
                await axios.delete(`${BASE_URL}/favouriteparks/${favoriteEntryId}`, {headers});
                setFavoriteEntryId(null);
            } else {
                // POST dmv 'parkCodes' (plural) passend bij de structuur
                const response = await axios.post(`${BASE_URL}/favouriteparks`, {
                    userId: user.id,
                    parkCodes: id
                }, {headers});
                setFavoriteEntryId(response.data.id);
            }
        } catch (e) {
            console.error("Error updating favourites", e);
        }
    };

    const toggleVisited = async () => {
        if (!user) return alert("Please log in first");

        try {
            if (visitedEntryId) {
                await axios.delete(`${BASE_URL}/visitedparks/${visitedEntryId}`, {headers});
                setVisitedEntryId(null);
            } else {
                const response = await axios.post(`${BASE_URL}/visitedparks`, {
                    userId: user.id,
                    parkCodes: id
                }, {headers});
                setVisitedEntryId(response.data.id);
            }
        } catch (e) {
            console.error("Error updating visited status", e);
        }
    };

    if (loading) return <div className="outer-container"><p>Loading details...</p></div>;
    if (!park) return <div className="outer-container"><p>Park not found.</p></div>;

    return (
        <div className="outer-container">
            <main className="page-container-parkdetails">
                <div className="parkdetails-park-image">
                    <img src={park.images?.[0]?.url || fallbackImg} alt={park.fullName}/>
                </div>

                <p className="parkdetails-park-location">
                    {park.states} - {park.addresses?.[0]?.city}
                </p>

                <div className="parkdetails-bar-full">
                    <p className="parkdetails-park-title">{park.name}</p>
                    <div className="parkdetails-bar-options">
                        <div
                            className="tooltip-wrapper"
                            onMouseEnter={() => !user && setShowTooltip('fav')}
                            onMouseLeave={() => setShowTooltip(null)}
                        >
                            {showTooltip === 'fav' && !user && (
                                <span className="tooltip-text">Please login first</span>
                            )}
                            <Button
                                type="button"
                                label={favoriteEntryId ? "♥ Remove favorite" : "♡ Add to favorites"}
                                onClick={toggleFavorite}
                                disabled={!user}
                            />
                        </div>

                        <div
                            className="tooltip-wrapper"
                            onMouseEnter={() => !user && setShowTooltip('vis')}
                            onMouseLeave={() => setShowTooltip(null)}
                        >
                            {showTooltip === 'vis' && !user && (
                                <span className="tooltip-text">Please login first</span>
                            )}
                            <Button
                                type="button"
                                label={visitedEntryId ? "✓ Remove visited" : "✓ Add to visited"}
                                onClick={toggleVisited}
                                disabled={!user}
                            />
                        </div>
                    </div>
                </div>

                <div className="parkdetails-park-discription">
                    <p>{park.description}</p>
                    <br/>
                    <h3>How to get there?</h3>
                    <p>{park.directionsInfo}</p>
                    <br/>
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

export default ParkDetails;