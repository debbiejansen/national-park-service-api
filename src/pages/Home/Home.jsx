import './Home.css'
import React from 'react';
import WideButton from '../../components/WideButton/WideButton.jsx';
import SmallTile from '../../components/SmallTile/SmallTile.jsx';
import img from '../../assets/National-Park-Service-Logo-1968.png';
import parkimg from '../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg';
import BigTile from '../../components/BigTile/BigTile.jsx';

function Home() {
    return (
            <div className="outer-container">
                <WideButton
                    label="find a park"
                    disabled="false"
                />
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
    );
}

export default Home