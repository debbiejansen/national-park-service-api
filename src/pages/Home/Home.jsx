import './Home.css'
import React, {useEffect, useState} from 'react';
import WideButton from '../../components/WideButton/WideButton.jsx';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import {useNavigate} from 'react-router-dom';
import fallbackImg from '../../assets/fallbackImg.jpg';

function Home() {

    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

    useEffect(() => {

        // Randomize de start voor verschillende parken per refresh. Anders: Limit=nummer&start=nummer
        const randomStart = Math.floor(Math.random() * 450);
        const API_URL = `https://developer.nps.gov/api/v1/parks?limit=5&start=${randomStart}&api_key=${API_KEY}`;

        async function fetchParks() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                // Data staat in data.data
                setParks(data.data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching parks:", error);
                setLoading(false);
            }
        }

        fetchParks().catch(console.error);
    }, []);

    const navigate = useNavigate();

    return (
        <div className="outer-container">
            <WideButton
                label="find a park"
                onClick={() => navigate('/explore')}
            />
            <section className="small-tiles-container">
                {loading ? <p>Loading parks...</p> :
                    // Alleen de eerste 3 parken
                    parks.slice(0, 3).map((park) => (
                        <SmallTile
                            key={park.id}
                            image={park.images?.[0]?.url || fallbackImg}
                            title={
                                park.name.length > 35
                                    ? park.name.substring(0, 32) + "..."
                                    : park.name
                            }
                            description={park.description.substring(0, 40) + "..."}
                            label={park.activities?.slice(0, 1).map(act => (
                                <li key={act.id}>{act.name}</li>))}
                            to={`/parkdetails/${park.parkCode}`}
                        />
                    ))
                }
            </section>

            <h2>Featured</h2>

            <div className="big-tiles-container">
                {!loading && parks.slice(3, 5).map((park, index) => (
                    <BigTile
                        key={park.id}
                        title={park.name}
                        description={park.description.substring(0, 100) + "..."}
                        image={park.images?.[0]?.url || fallbackImg}
                        // Alternate image position based on index
                        imagePosition={index % 2 === 0 ? "right" : "left"}
                        to={`/parkdetails/${park.parkCode}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home