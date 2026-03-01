import './ExploreTile.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function ExploreTile(props) {

    return (
        <NavLink to={props.to} className="exploretile-link">
            <article className="exploretile-outer-container">
                <div className="exploretile-text">
                    <h2>{props.title}</h2>
                    <p>{props.discription}</p>
                </div>
                <div className="exploretile-image">
                    <img src={props.image} alt={props.title}/>
                </div>
            </article>
        </NavLink>
    );
}

export default ExploreTile;