import './Navigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/National-Park-Service-Logo-1968.png';

function Navigation() {
    return (
        <nav className="navigation-bar">
            <div className="navigation-logo">
                {/*<NavLink to="/">*/}
                {/*    <img*/}
                {/*        src={logo}*/}
                {/*        alt="Company logo"*/}
                {/*        className="logo-image"*/}
                {/*    />*/}
                {/*</NavLink>*/}
            </div>

            <ul className="navigation-links">
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/overview">
                        Alle posts
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/newposts">
                        Nieuwe post maken
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation