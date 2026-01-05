import './App.css'
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Explore from './pages/Explore/Explore';
import Favorites from './pages/Favorites/Favorites';
import Visited from './pages/Visited/Visited';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

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
              <Route path="/profile" element={<Profile/>} />
              <Route path="*" element={<NotFound />} />
              {/*<Route path="/posts/:id" element={<Blogpost/>} />*/}
          </Routes>
      </>
  );
}

export default App
