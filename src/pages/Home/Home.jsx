import './Home.css'
import React from 'react';
import Button from '../../components/Button/Button.jsx';
import TinyTile from '../../components/TinyTile/TinyTile.jsx';
import img from '../../assets/National-Park-Service-Logo-1968.png';

function Home() {
    return (
            <div className="outer-container">
                <Button
                    label="find a park"
                    disabled="false"
                />
                <main>
                    <TinyTile
                        image={img}
                        title="Naam van park"
                        subtitle="Info over park"
                        label="Populair"
                    />
                    <TinyTile
                        image={img}
                        title="Naam van park"
                        subtitle="Info over park"
                        label="Populair"
                    />
                    <TinyTile
                        image={img}
                        title="Naam van park"
                        subtitle="Info over park"
                        label="Populair"
                    />
                </main>
            </div>
    );
}

export default Home