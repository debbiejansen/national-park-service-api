import './ProfileInfo.css';
import React from 'react';

function ProfileInfo(props) {
    return (
        <div className="profile-info-outer-container">

            <div className="profile-info-image">
                <img src={props.image} alt="profile picture"/>
            </div>

            <div className="profile-info-text">
                <h1>{props.title}</h1>
                <p>{props.discription}</p>
            </div>

        </div>
    );
}

export default ProfileInfo;