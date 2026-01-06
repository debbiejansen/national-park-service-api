import './Footer.css'
import React from 'react';
import logo from '../../assets/National-Park-Service-Logo-1968.png';

function Footer() {
    return (

        <footer className="outer-container-footer">
            <ul>
                <li>
                    {logo}
                </li>

            </ul>

        </footer>

    );
}

export default Footer