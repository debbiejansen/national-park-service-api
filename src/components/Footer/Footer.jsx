import './Footer.css'
import React from 'react';
import logo from '../../assets/National-Park-Service-Logo-1968.png';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (

        <footer className="outer-container-footer">
            <div>
                <img src={logo}
                     alt="Company logo"
                     className="footer-logo"/>
            </div>

            <ul className="footer-links">
                <li>
                <h3>Quick Acces</h3>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/about">
                        About
                    </NavLink>
                </li>

            </ul>

            <div className="footer-quote">
                <h3>National Park Service</h3>
                <p>The national park community welcomes you! Together we can celebrate these special places and ensure
                    they exist forever.</p>
            </div>
        </footer>

    );
}

export default Footer