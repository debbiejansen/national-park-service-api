import './Explore.css'
import React from 'react';
import parkimg from '../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg';
import ExploreTile from '../../components/ExploreTile/ExploreTile.jsx';

function Explore() {
    return (
        <>
            <div className="outer-container">
                <div>
                    Hier komt de filter balk
                </div>
                <div className="page-container-explore">

                    <ExploreTile
                        title="Andere naam van een park"
                        discription="Info over park om te testen of dit werkt"
                        image={parkimg}
                        to="/about"
                    />

                    <ExploreTile
                        title="Andere naam van een park 2"
                        discription="Info over park om te testen of dit werkt 2"
                        image={parkimg}
                        to="/about"
                    />

                    <ExploreTile
                        title="Andere naam van een park 3"
                        discription="Info over park om te testen of dit werkt 3"
                        image={parkimg}
                        to="/about"
                    />

                </div>
            </div>
        </>
    );
}

export default Explore