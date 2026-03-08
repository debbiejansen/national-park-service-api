import './ParkDetails.css'
import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button.jsx';
import fallbackImg from '../../assets/scenic-view-landscape.jpg';
import {useParams} from "react-router-dom";

function ParkDetails() {

    const {id} = useParams();
    const [park, setPark] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

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
        }

        fetchParkDetails();
    }, [id]);

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
                            label="Add to favorites"
                            // onClick={handleClick}
                        />
                        <Button
                            type="button"
                            disabled={false}
                            label="Visited"
                            // onClick={handleClick}
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