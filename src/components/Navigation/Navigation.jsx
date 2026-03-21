import './Navigation.css';
import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from '../../assets/National-Park-Service-Logo-1968.png';
import Button from '../Button/Button.jsx';
import {AuthContext} from '../../context/AuthContext.jsx';


function Navigation() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

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
                            to="/explore">
                            Explore
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/profile">
                            Profile
                        </NavLink>
                    </li>

                    {isAuth ?
                        <li>
                            <Button
                                type="button"
                                disabled={false}
                                label="Log out"
                                onClick={logout}
                            />
                        </li>
                        :
                        <li>
                          <Button
                            type="button"
                            disabled={false}
                            label="Log in"
                            onClick={() => navigate('/login')}
                        />
                    </li>
                        }
                </ul>
            </nav>
        </header>
    );
}

export default Navigation