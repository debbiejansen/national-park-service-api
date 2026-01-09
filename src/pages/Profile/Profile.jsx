import './Profile.css'
import React from 'react';
import SmallTile from "../../components/SmallTile/SmallTile.jsx";
import img from "../../assets/National-Park-Service-Logo-1968.png";
import BigTile from "../../components/BigTile/BigTile.jsx";
import parkimg from "../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg";

function Profile() {
    return (
        <>
            <div className="outer-container">
            <h1>Test Profile page</h1>
            <p>hier komt content over jezelf</p>
                <section className="small-tiles-container">
                    <SmallTile
                        image={img}
                        title="Naam van park"
                        subtitle="Info over park"
                        label="Popular"
                    />
                    <SmallTile
                        image={img}
                        title="Naam van park"
                        subtitle="Info over park"
                        label="Local Wildlife"
                    />
                    <SmallTile
                        image={img}
                        title="Naam van park"
                        subtitle="Info over park"
                        label="Beautiful Scenery"
                    />
                </section>

                <div className="big-tiles-container">
                    <BigTile
                        title="The park"
                        subtitle="Info over park"
                        image={parkimg}
                        imagePosition="right"
                        to="/about"
                    />
                    <BigTile
                        title="The park"
                        subtitle="Info over park"
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