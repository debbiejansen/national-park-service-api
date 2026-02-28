import './Login.css'
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext.jsx';
import axios from 'axios';
import WideButton from '../../components/WideButton/WideButton.jsx';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            // Hier nog linken naar de Novi API voor inloggen - localhost klopt niet
            const result = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login', {
                email: email,
                password: password,
                });
            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.accesToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    return (
<div className="outer-container">
        <section className="page-container-login">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email-field">
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">An error occurd, please try again</p>}

                <WideButton
                    type="submit"
                    label="log in"
                />
            </form>
        </section>
</div>
    );
}

export default Login