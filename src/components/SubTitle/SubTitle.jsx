import './SubTitle.css';
import React from 'react';

function SubTitle(props) {
    return (
        <article className="subtitle-outer-container">
            {props.subtitle}
        </article>
    );
}
export default SubTitle;