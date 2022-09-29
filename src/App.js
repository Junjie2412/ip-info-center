import './App.css';
import React, {Component} from "react";
import Header from './containers/Header/Header'
import UploadDataPage from './containers/UploadDataPage/UploadDataPage';
import GeolocationPage from './containers/GeolocationPage/GeolocationPage';
import TradeDataPage from './containers/TradeDataPage/TradeDataPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import Auth from "./containers/Auth/Auth";
import AboutPage from "./containers/AboutPage/AboutPage";

class App extends Component {

    render() {
        return (
            <div className="AppMainPage">
                <Header />
                <Routes>
                    <Route path="" element={<Auth/>}/>
                </Routes>
                <Routes>
                    <Route path="about" element={<NavBar/>}/>
                    <Route path="home" element={<NavBar/>}/>
                    <Route path="geolocation" element={<NavBar/>}/>
                    <Route path="tradedata" element={<NavBar/>}/>
                </Routes>
                <Routes>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="home" element={<UploadDataPage/>}/>
                    <Route path="geolocation" element={<GeolocationPage/>}/>
                    <Route path="tradedata" element={<TradeDataPage/>}/>
                </Routes>
                <Footer/>
            </div>
        );
    }
}

export default App;
