import './Profile.css'
import React, {useEffect, useState} from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import profile from '../../assets/SS_profile-test.png';
import fallbackImg from '../../assets/fallbackImg.jpg';

// Foto Nova van novi
// https://info.novi.nl/hs-fs/hubfs/MicrosoftTeams-image-Aug-18-2023-11-38-12-7024-AM.png?width=400&height=300&name=MicrosoftTeams-image-Aug-18-2023-11-38-12-7024-AM.png
// https://avatars.githubusercontent.com/u/32450174?v=4
// Foto Nova van Github

function Profile() {

    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

    // ophalen van favorieten en bezocht
    const [favorites, setFavorites] = useState([]);
    const [visited, setVisited] = useState([]);

    useEffect(() => {
        // Limit=[]&start=[] - bijv /parks?limit=5&start=3&api_key=${API_KEY}`
        const API_URL = `https://developer.nps.gov/api/v1/parks?&api_key=${API_KEY}`;

        const savedFavorites = JSON.parse(localStorage.getItem('faveParks')) || [];
        setFavorites(savedFavorites);
        const savedVisited = JSON.parse(localStorage.getItem('visitedParks')) || [];
        setVisited(savedVisited);

        async function fetchParks() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                setParks(data.data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching parks:", error);
                setLoading(false);
            }
        }

        fetchParks().catch(console.error);
    }, []);

    return (
        <>
            <div className="outer-container">

                <ProfileInfo
                    title="Hello, it me"
                    description="Since 1916, the National Park Service has been entrusted with the care of our national parks. With the help of volunteers and partners, we safeguard these special places and share their stories with more than 318 million visitors every year. But our work doesn't stop there."
                    image={profile}
                />

                <h2>Favorites</h2>

                <section className="small-tiles-container">
                    {favorites.length > 0 ? (
                        favorites.map((park) => (
                            <SmallTile
                                key={park.id}
                                image={park.image || fallbackImg}
                                title={park.name}
                                discription="Added to favorites. Click for more info or to delete"
                                label="♥︎"
                                to={`/parkdetails/${park.parkCode}`}
                            />
                        ))
                    ) : (
                        <p>No parks in your favorites yet</p>
                    )}
                    </section>

                <h2>Visited</h2>

                <div className="big-tiles-container">
                    {visited.length > 0 ? (
                        visited.map((park, index) => (
                            <BigTile
                                key={park.id}
                                title={park.name}
                                description={park.description ? park.description.substring(0, 100) + "..." : "No description available"}
                                image={park.image || fallbackImg}
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