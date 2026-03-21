import './App.css'
import {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login.jsx';
import ParkDetails from './pages/ParkDetails/ParkDetails.jsx';
import {AuthContext} from './context/AuthContext.jsx';

import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Faq from './pages/Faq/Faq';
import NotFound from './pages/NotFound/NotFound';


function App() {
    const {isAuth} = useContext(AuthContext);
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/login"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/parkdetails/:id" element={<ParkDetails/>}/>

                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App
