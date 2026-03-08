import './Profile.css'
import React, {useEffect, useState} from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import profile from '../../assets/SS_profile-test.png';
import fallbackImg from "../../assets/scenic-view-landscape.jpg";

// Foto Nova van novi
// https://info.novi.nl/hs-fs/hubfs/MicrosoftTeams-image-Aug-18-2023-11-38-12-7024-AM.png?width=400&height=300&name=MicrosoftTeams-image-Aug-18-2023-11-38-12-7024-AM.png
// https://avatars.githubusercontent.com/u/32450174?v=4
// Foto Nova van Github

function Profile() {

    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Limit=[]&start=[]
        const API_URL = "https://developer.nps.gov/api/v1/parks?limit=5&api_key=XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

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
                    {loading ? <p>Loading the great outdoors...</p> :
                        // Alleen de eerste 3 parken
                        parks.slice(0, 3).map((park) => (
                            <SmallTile
                                key={park.id}
                                image={park.images?.[0]?.url || fallbackImg}
                                title={park.name}
                                discription={park.description.substring(0, 35) + "..."}
                                label={park.activities?.slice(0, 1).map(act => (
                                    <li key={act.id}>{act.name}</li>))}
                                to={`/parkdetails/${park.parkCode}`}
                            />
                        ))
                    }
                </section>

                <h2>Visited</h2>

                <div className="big-tiles-container">
                    {!loading && parks.slice(3, 5).map((park, index) => (
                        <BigTile
                            key={park.id}
                            title={park.name}
                            discription={park.description.substring(0, 100) + "..."}
                            image={park.images?.[0]?.url || fallbackImg}
                            // Alternate image position based on index
                            imagePosition={index % 2 === 0 ? "right" : "left"}
                            to={`/parkdetails/${park.parkCode}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Profile