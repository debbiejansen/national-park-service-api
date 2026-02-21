import './Profile.css'
import React from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import BigTile from '../../components/BigTile/BigTile.jsx';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import img from '../../assets/National-Park-Service-Logo-1968.png';
import parkimg from '../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg';
import profile from '../../assets/SS_profile-test.png';


// key NPS.GOV: XDmzaFo0GOhc6aztJdJbxmZ6bB5eGsDVGkxowKAi

function Profile() {
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
                    <SmallTile
                        image={img}
                        title="Naam van park"
                        discription="Info over park"
                        label="Popular"
                    />
                    <SmallTile
                        image={img}
                        title="Naam van park"
                        discription="Info over park"
                        label="Local Wildlife"
                    />
                    <SmallTile
                        image={img}
                        title="Naam van park"
                        discription="Info over park"
                        label="Beautiful Scenery"
                    />
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