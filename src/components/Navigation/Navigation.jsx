import './Navigation.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../Button/Button.jsx';
import logo from '../../assets/National-Park-Service-Logo-1968.png';

function Navigation() {
    return (
        <header className="header-img">
            <nav className="navigation-bar">
                <div className="navigation-logo">
                    <img src={logo}
                         alt="Company logo"
                         className="navbar-logo"/>
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
                            to="/explore">
                            Explore
                        </NavLink>
                    </li>
                    <li>
                        <Button
                        label="login"
                        disabled="false"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation