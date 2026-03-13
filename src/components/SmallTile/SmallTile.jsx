import './SmallTile.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function SmallTile(props) {
    return (
        <NavLink to={props.to} className="smalltile-link">
        <article className="article-outer-container">
            <span>{props.label}</span>
            <div className="article-image">
            <img src={props.image} alt={props.title}/></div>
            <div className="article-text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            </div>
        </article>
        </NavLink>
    );
}
export default SmallTile;