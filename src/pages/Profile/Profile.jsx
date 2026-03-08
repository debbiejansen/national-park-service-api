import './Profile.css'
import React, {useEffect, useState} from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import parkimg from '../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg';
import profile from '../../assets/SS_profile-test.png';
import fallbackImg from "../../assets/scenic-view-landscape.jpg";

function Profile() {

    // 1. STATE: This is the "memory" where the API data will live
    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. LIFECYCLE: This runs once when the component "mounts"
    useEffect(() => {
        const API_URL = "https://developer.nps.gov/api/v1/parks?limit=3&start=5&api_key=XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

        async function fetchParks() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                // In the NPS API, the actual array is inside data.data
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
                    discription="Since 1916, the National Park Service has been entrusted with the care of our national parks. With the help of volunteers and partners, we safeguard these special places and share their stories with more than 318 million visitors every year. But our work doesn't stop there."
                    image={profile}
                />

                <h2>Favorites</h2>

                <section className="small-tiles-container">
                    {loading ? (
                        <p>Loading the great outdoors...</p>
                    ) : (
                        parks.map((park) => (

                            <SmallTile
                                image={park.images?.[0]?.url || fallbackImg}
                                key={park.id}
                                title={park.name}
                                discription={park.description.substring(0, 35) + "..."}
                                label={park.activities?.slice(0, 1).map(act => (
                                    <li key={act.id}>{act.name}</li>
                                ))}
                                to={`/parkdetails/${park.parkCode}`}
                            />
                        ))
                    )}

                    {!loading && parks.length === 0 && (
                        <p>No parks found. Try a different search!</p>
                    )}
                </section>

                <h2>Visited</h2>

                <div className="big-tiles-container">
                    <BigTile
                        title="The park"
                        discription="Info over park"
                        image={parkimg}
                        imagePosition="right"
                        to="/parkdetails"
                    />
                    <BigTile
                        title="The park"
                        discription="Info over park"
                        image={parkimg}
                        imagePosition="left"
                        to="/about"
                    />
                </div>
            </div>
        </>
    );
}

export default Profile