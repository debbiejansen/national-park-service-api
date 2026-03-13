import './Explore.css'
import React, {useEffect, useState} from 'react';
import fallbackImg from '../../assets/fallbackImg.jpg';
import ExploreTile from '../../components/ExploreTile/ExploreTile.jsx';
import Button from '../../components/Button/Button.jsx';

function Explore() {
    // STATE
    const [parks, setParks] = useState([]);
    const [loading, setLoading] = useState(false); // State voor dropdown menu
    const [selectedState, setSelectedState] = useState("");
    const [start, setStart] = useState(0);  // State voor resultaten, start bij 0, + 15

    const API_KEY = "XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi";

    const STATE_MAP = {
        "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
        "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
        "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
        "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
        "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
        "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire",
        "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina",
        "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania",
        "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee",
        "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington",
        "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
    };

    // Fetch functie
    async function fetchParks(isMore = false) {
        setLoading(true);
        const currentStart = isMore ? start + 15 : 0;
        const stateFilter = selectedState ? `&stateCode=${selectedState}` : "";
        const limit = selectedState ? 50 : 15; // limiet van NPS is standaard 50

        // limit aanpassen van cijfer naar const
        // filter meegeven in de URL in geval van keuze.
        const API_URL = `https://developer.nps.gov/api/v1/parks?limit=${limit}&start=${currentStart}${stateFilter}&api_key=${API_KEY}`;

        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (isMore) {
                setParks(prev => [...prev, ...data.data]);
                setStart(currentStart);
            } else {
                setParks(data.data || []);
                setStart(0);
            }
        } catch (error) {
            console.error("Error fetching parks:", error);
        } finally {
            setLoading(false);
        }
    }

    // Mounting
    useEffect(() => {
        fetchParks(false);
    }, [selectedState]); // This triggers fetchParks whenever the state changes

        const handleSearch = () => {
            fetchParks(false);
        };

        const handleLoadMore = () => {
            fetchParks(true);
        };



    return (
        <>
            <div className="outer-container">
                <div className="filter-bar-full">
                   Filter
                    <div className="filter-bar-options">
                        <select
                            className="dropdown-filter"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            >
                            <option value="">Select a State</option>
                            {Object.entries(STATE_MAP).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>

                        <Button
                        type="button"
                        disabled={false}
                        label={loading ? "Searching..." : "Search"}
                        onClick={handleSearch}
                        variant="white"
                        />
                    </div>
                </div>


                <div className="page-container-explore">
                    {parks.map((park) => (
                        <ExploreTile
                            key={park.id}
                            title={park.fullName}
                            description={park.description.substring(0, 100) + "..."}
                            image={park.images?.[0]?.url || fallbackImg}
                            to={`/parkdetails/${park.parkCode}`}
                        />
                    ))}

                    {loading && <p>Loading...</p>}

                    {/* Show "Load More" only if no state is selected (initial view) */}
                    {!selectedState && !loading && parks.length > 0 && (
                        <div className="load-more-container">
                            <Button
                                label="Show more parks"
                                onClick={handleLoadMore}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Explore