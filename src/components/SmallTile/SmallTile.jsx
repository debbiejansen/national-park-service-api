import './SmallTile.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function SmallTile({ to, label, image, title, description, onClickLabel = () => {} }) {

    const handleLabelClick = (e) => {
        // Zodat de Navlink niet getriggered wordt.
        // Op de afbeelding/tekst klikken werkt nog steeds voor ParkDetails
        e.preventDefault();
        e.stopPropagation();
        onClickLabel(e);
    };

    return (
        <NavLink to={to} className="smalltile-link">
            <article className="article-outer-container">
                {/* Laat alleen een label zien waar nodig */}
                {label && (
                    <span className="favorite-label" onClick={handleLabelClick}>
                        {label}
                    </span>
                )}
                <div className="article-image">
                    <img src={image} alt={title} />
                </div>
                <div className="article-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </article>
        </NavLink>
    );
}
export default SmallTile;