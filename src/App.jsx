import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx';

function App() {

  return (
    <>
        <nav>
            <ul>
                <li><a href={"/"}>Shop</a></li>
                <li><a href={"/"}>Ons verhaal</a></li>
                <li><a href={"/"}>Blog</a></li>
            </ul>
            <Button
                label="testtesttest"
                type="button"
                disabled={false}
                // handleClick={logClick}
            />
        </nav>
        <header>
            <h1>National Park Service</h1>
        </header>
<main>
    <Button
    label="testtesttest"
    type="button"
    disabled={false}
    // handleClick={logClick}
    />
</main>


    </>
  )
}

export default App
