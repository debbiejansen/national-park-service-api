import './Profile.css'
import React from 'react';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import img from '../../assets/National-Park-Service-Logo-1968.png';
import BigTile from '../../components/BigTile/BigTile.jsx';
import parkimg from '../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg';
import SubTitle from '../../components/SubTitle/SubTitle.jsx';

function Profile() {
    return (
        <>
            <div className="outer-container">
                <div className="profile-container">
                    <div className="profile-picture">
                        hier komt een soort profielfoto
                    </div>
                    <div className="profile-text">
                        <p>hier komt content over jezelf</p>
                    </div>
                </div>

                <SubTitle
                    subtitle="Favorites"
                />

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

                <SubTitle
                    subtitle="Visited"
                />

                <div className="big-tiles-container">
                    <BigTile
                        title="The park"
                        discription="Info over park"
                        image={parkimg}
                        imagePosition="right"
                        to="/about"
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