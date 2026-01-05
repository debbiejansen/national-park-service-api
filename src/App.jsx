import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
function App() {

  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/explore" element={<Explore/>} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/visited" element={<Visited/>} />
              <Route path="*" element={<NotFound />} />
              <Route path="/posts/:id" element={<Blogpost/>} />
          </Routes>
      </>
  )
}

export default App
