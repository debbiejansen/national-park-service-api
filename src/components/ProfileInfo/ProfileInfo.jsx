import './ProfileInfo.css';
import React from 'react';

function ProfileInfo(props) {
    return (
        <article className="profile-info-outer-container">
            {props.subtitle}
        </article>
    );
}
export default ProfileInfo;