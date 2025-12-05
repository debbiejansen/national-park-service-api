import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <nav>
            <ul>
                <li><a href={"/"}>About</a></li>
                <li><a href={"/"}>Blog</a></li>
            </ul>
        </nav>
        <header>
            <h1>National Park Service</h1>
            <button type="button" onClick={logClick}>Login</button>
        </header>
    </>
  )
}

export default App
