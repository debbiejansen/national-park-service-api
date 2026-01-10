import './BigTile.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function BigTile(props) {
    const layoutClass =
        props.imagePosition === 'left'
            ? 'bigtile-row reverse'
            : 'bigtile-row';

    return (
        <NavLink to={props.to} className="bigtile-link">
        <article className={`bigtile-outer-container ${layoutClass}`}>
            <div className="bigtile-text">
                <h2>{props.title}</h2>
                <p>{props.discription}</p>
            </div>
            <div className="bigtile-image">
                <img src={props.image} alt={props.title}/>
            </div>
        </article>
        </NavLink>
    );
}

export default BigTile;