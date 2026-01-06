import './App.css'
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Explore from './pages/Explore/Explore';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Profile from './pages/Profile/Profile';
import Favorites from './pages/Favorites/Favorites';
import Visited from './pages/Visited/Visited';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/explore" element={<Explore/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/faq" element={<Faq/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/visited" element={<Visited/>} />

              <Route path="*" element={<NotFound />} />
              {/*<Route path="/posts/:id" element={<Blogpost/>} />*/}
          </Routes>
          <Footer />
      </>
  );
}

export default App
