import './NotFound.css'
import React from 'react';

function NotFound() {
    return (

            <main className="page-container-not-found">
                <h2>Oops... This page doesn't exist</h2>
                <p>Take me back to the <Link to="/"> home page.</Link></p>
            </main>

    );
}

export default NotFound