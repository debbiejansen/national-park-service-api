import './Profile.css'
import React, {useEffect, useRef, useState} from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import profile from '../../assets/SS_profile-test.png';
import fallbackImg from '../../assets/fallbackImg.jpg';

function Profile() {

    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(true);
    // ophalen van favorieten en bezocht
    const [favorites, setFavorites] = useState([]);
    const [visited, setVisited] = useState([]);
    // scrollbar bij favorites
    const scrollRef = useRef(null);
    // API key NPS
    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

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

    // Remove from favorites via label
    const handleRemoveFavorite = (e, parkId) => {
        // This stops the click from triggering the NavLink
        e.preventDefault();
        e.stopPropagation();

        // Filter the list
        const updatedFavorites = favorites.filter(park => park.id !== parkId);

        // Update State and LocalStorage
        setFavorites(updatedFavorites);
        localStorage.setItem('faveParks', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {

        const savedFavorites = JSON.parse(localStorage.getItem('faveParks')) || [];
        setFavorites(savedFavorites);
        const savedVisited = JSON.parse(localStorage.getItem('visitedParks')) || [];
        setVisited(savedVisited);

        async function fetchParks() {
            try {
                const API_URL = `https://developer.nps.gov/api/v1/parks?&api_key=${API_KEY}`;
                const response = await fetch(API_URL);
                const data = await response.json();
                setParks(data.data || []);
            } catch (error) {
                console.error("Error fetching parks:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchParks();
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
                <div className="favorites-wrapper">
                    <button className="scroll-button" onClick={() => scroll('left')}> ‹</button>

                    <section className="small-tiles-container" ref={scrollRef}>
                        {favorites.length > 0 ? (
                            favorites.map((park) => (
                                <SmallTile
                                    key={park.id}
                                    image={park.image || fallbackImg}
                                    title={park.name}
                                    description="Added to favorites. Click ♥︎ to remove"
                                    label="♥︎"
                                    to={`/parkdetails/${park.parkCode}`}
                                    onClickLabel={() => {
                                        const updated = favorites.filter(f => f.id !== park.id);
                                        setFavorites(updated);
                                        localStorage.setItem('faveParks', JSON.stringify(updated));
                                    }}
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