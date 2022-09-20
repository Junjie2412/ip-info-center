import './App.css';
import React, {Component} from "react";
import Header from './containers/Header/Header'
import UploadDataPage from './containers/UploadDataPage/UploadDataPage';
import GeolocationPage from './containers/GeolocationPage/GeolocationPage';
import TradeDataPage from './containers/TradeDataPage/TradeDataPage';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./containers/NavBar/NavBar";

class App extends Component {

    render() {
        return (
            <div className="AppMainPage">
                <Header />
                <NavBar/>
                <Routes>
                    <Route path="" element={<Navigate replace to="/home"/>}/>
                    <Route path="home" element={<UploadDataPage/>}/>
                    <Route path="geolocation" element={<GeolocationPage/>}/>
                    <Route path="tradedata" element={<TradeDataPage/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
