import './Profile.css'
import React, {useContext, useEffect, useRef, useState} from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import profile from '../../assets/SS_profile-test.png';
import fallbackImg from '../../assets/fallbackImg.jpg';
import {AuthContext} from '../../context/AuthContext.jsx';
import axios from 'axios';

function Profile() {
    const { user, status } = useContext(AuthContext); // Haal de user data uit de context
    const [favorites, setFavorites] = useState([]); // ophalen van favorieten en bezocht
    const [loading, setLoading] = useState(true);
    const [visited, setVisited] = useState([]);
    const scrollRef = useRef(null);     // scrollbar bij favorites
    const email = user?.email || "";
    const rawName = email.substring(0, email.indexOf("@"));
    const profileName = rawName.charAt(0).toUpperCase() + rawName.slice(1);


    const NPS_API_KEY = import.meta.env.VITE_NPS_API_KEY;
    const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

// Scrollbar
    const scroll = (direction) => {
        const {current} = scrollRef;
        const scrollAmount = 320;

        if (direction === 'left') {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };
    const NOVI_API_KEY = import.meta.env.VITE_NOVI_API_KEY;

    const headers = {
        'novi-education-project-id': NOVI_API_KEY,
        'accept': '*/*'
    };

    useEffect(() => {
        if (status !== 'done' || !user) return;

        async function fetchParks() {
            try {
                setLoading(true);

                const [favParks, visParks] = await Promise.all([
                    axios.get(`${BASE_URL}/favouriteparks?userId=${user.id}`, { headers }),
                    axios.get(`${BASE_URL}/visitedparks?userId=${user.id}`, { headers }),
                ]);
                // 1. Get de basis arrays en splits ze in individuele  codes
                const favCodesArray = favParks.data.flatMap(item => item.parkCodes.split(','));
                const visCodesArray = visParks.data.flatMap(item => item.parkCodes.split(','));

                // 2. Creeer een unique lijst voor de API call API call
                const allCodesSet = new Set([...favCodesArray, ...visCodesArray]);
                const allCodesString = Array.from(allCodesSet).join(',');
                if (allCodesString) {
                    // 3. Fetch van de NPS API dmv de joined string
                    const npsResponse = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${allCodesString}&api_key=${NPS_API_KEY}`);
                    const npsData = npsResponse.data.data;

                    // 4. Filter de resultaten terug in de State variabelen
                    // Check of de NPS parkCode bestaat in de originele arrays
                    setFavorites(npsData.filter(park => favCodesArray.includes(park.parkCode)));
                    setVisited(npsData.filter(park => visCodesArray.includes(park.parkCode)));
                }


            } catch (error) {
                console.error("Error fetching parks:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchParks();
    }, [user, status]);

    const handleRemoveFavorite = async (e, parkCode) => {
        e.preventDefault();
        try {
            // 1. Fetch de favorieten parken
            const response = await axios.get(`${BASE_URL}/favouriteparks?userId=${user.id}`, { headers });

            // 2. Zoek de entry met de parCode (parkID)
            const entry = response.data.find(item => item.parkCodes.split(',').includes(parkCode));

            if (entry) {
                const currentCodes = entry.parkCodes.split(',');
                const updatedCodes = currentCodes.filter(code => code !== parkCode);

                if (updatedCodes.length === 0) {
                    // Gebruik entry.id (the database PK), Niet user.id
                    await axios.delete(`${BASE_URL}/favouriteparks/${entry.id}`, { headers });
                } else {
                    // Gebruik hier ook entry.id
                    await axios.put(
                        `${BASE_URL}/favouriteparks/${entry.id}`,
                        {
                            userId: entry.userId,
                            parkCodes: updatedCodes.join(',')
                        },
                        { headers }
                    );
                }

                // Update UI State
                setFavorites(prev => prev.filter(park => park.parkCode !== parkCode));
            }
        } catch (error) {
            console.error("Unable to remove favorite:", error.response || error);
        }
    };

    if (loading) return <p>Loading profile...</p>;

    return (
        <>
            <div className="outer-container">

                <ProfileInfo
                    title={"Hello, " + profileName}
                    description={"Welcome to your personal page " + profileName + "! Below you will see an overview of your favourite parks. No favourites yet? Go find some on the explore page and add them to your favourites. If you've already been to certain parks you can also find them here on your page. Just scroll down a bit more and you will find your overview."}
                    image={profile}
                />

                <h2>Favorites</h2>
                <div className="favorites-wrapper">
                    <button className="scroll-button" onClick={() => scroll('left')}> ‹</button>

                    <section className="small-tiles-container" ref={scrollRef}>
                        {favorites.length > 0 ? (
                            favorites.map((park) => (
                                <SmallTile
                                    key={park.id}
                                    image={park.images?.[0]?.url || fallbackImg}
                                    title={
                                        park.name.length > 35
                                            ? park.name.substring(0, 32) + "..."
                                            : park.name
                                    }
                                    description="Added to favorites. Click the heart to remove"
                                    label="♥︎"
                                    to={`/parkdetails/${park.parkCode}`}
                                    onClickLabel={(e) => handleRemoveFavorite(e, park.parkCode)}
                                />
                            ))
                        ) : (
                            <p>No parks in your favorites yet</p>
                        )}
                    </section>
                    <button className="scroll-button" onClick={() => scroll('right')}> ›</button>
                </div>

                <h2>Visited</h2>

                <div className="big-tiles-container">
                    {visited.length > 0 ? (
                        visited.map((park, index) => (
                            <BigTile
                                key={park.id}
                                title={park.name}
                                description={park.description ? park.description.substring(0, 100) + "..." : "No description available"}
                                image={park.images?.[0]?.url || fallbackImg}
                                // Wisselen van waar de afbeelding staat
                                imagePosition={index % 2 === 0 ? "right" : "left"}
                                to={`/parkdetails/${park.parkCode}`}
                            />
                        ))
                    ) : (
                        <p>You have not visited any parks yet</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Profile