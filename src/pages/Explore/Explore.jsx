import './Explore.css'
import React, {useEffect, useState} from 'react';
import fallbackImg from '../../assets/scenic-view-landscape.jpg';
import ExploreTile from '../../components/ExploreTile/ExploreTile.jsx';
import Button from '../../components/Button/Button.jsx';

// API GOV:
// XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi

function Explore() {
    // 1. STATE: This is the "memory" where the API data will live
    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. LIFECYCLE: This runs once when the component "mounts"
    useEffect(() => {
        const API_URL = "https://developer.nps.gov/api/v1/parks?limit=10&api_key=XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

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
                <div className="filter-bar-full">
                   Filter
                    <div className="filter-bar-options">
                        Options

                        <Button
                        type="button"
                        disabled={false}
                        label="Search"
                        // onClick={}
                        variant="white"
                        />
                    </div>
                </div>


                <div className="page-container-explore">

                    {loading ? (
                        <p>Loading the great outdoors...</p>
                    ) : (
                        parks.map((park) => (
                            <ExploreTile
                                key={park.id}
                                title={park.fullName}
                                discription={park.description.substring(0, 100) + "..."}
                                image={park.images?.[0]?.url || fallbackImg}
                                to={`/parkdetails/${park.parkCode}`}
                            />
                        ))
                    )}

                    {/* Optional: Show this if the API returns 0 results */}
                    {!loading && parks.length === 0 && (
                        <p>No parks found. Try a different search!</p>
                    )}

                </div>
            </div>
        </>
    );
}

export default Explore