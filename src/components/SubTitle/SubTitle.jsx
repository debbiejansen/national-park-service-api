import './SubTitle.css';
import React from 'react';
import dottedLineRight from '../../assets/dotted-line-right.png';
import dottedLineLeft from '../../assets/dotted-line-left.png';

function SubTitle(props) {
    return (
        <div className="subtitle-outer-container">
            <img
                src={dottedLineLeft}
                alt="dotted line"
                className="dotted-line"
            />
            <span className="subtitle-text">
            {props.subtitle}
                </span>

            <img
                src={dottedLineRight}
                alt="dotted line"
                className="dotted-line"
            />
        </div>
    );
}

export default SubTitle;