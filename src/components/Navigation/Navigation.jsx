import './Navigation.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <header className="header-img">
            <nav className="navigation-bar">
                <div className="navigation-logo">
                    <NavLink to="/" className="logo-as-text">
                        National Park Service
                    </NavLink>
                </div>

                <ul className="navigation-links">
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/profile">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation