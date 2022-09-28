import React, {useMemo, useState} from 'react';
import './IPICGoogleMaps.css';
import Aux from '../../hoc/Auxiliary';
import { GoogleMap, useLoadScript, Marker, Polyline } from "@react-google-maps/api";
import homeIcon from "../../assets/home-icon.png";
import highMarker from "../../assets/highMarker.png";
import mediumMarker from "../../assets/mediumMarker.png";
import lowMarker from "../../assets/lowMarker.png";
import {googleApiKey} from "../../shared/googleApiKey";
import Offcanvas from 'react-bootstrap/Offcanvas';

const IPICGoogleMaps = (props) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey,
    });

    const center = useMemo(() => ({ lat: 44, lng: -80}), []);

    /*Modal Attributes*/

    const [show, setShow] = useState(false);

    const [showHome, setShowHome] = useState(false);

    const handleClose = () => {
        setShow(false);
        setShowHome(false);
    };
    const handleShow = (marker) => {
        setShowHome(false);
        props.setCurrentMarker(marker);
        setShow(true);
    };

    const handleShowHome = (marker) => {
        setShow(false);
        props.setCurrentMarker(marker);
        props.setHomeMarker(marker.account_number);
        setShowHome(true);
    };

    const ipMarkers = props.markers.map(marker => (
            <Marker position={{ lat: parseFloat(marker.ip_coordinates.split(",")[0]), lng: parseFloat(marker.ip_coordinates.split(",")[1])}}
                    title={marker.ip_address}
                    onClick={() => handleShow(marker)}
                    icon={(marker.risk_label==="High" ? highMarker : (marker.risk_label==="Medium" ? mediumMarker : lowMarker))}
                    label="IP"
                    key={props.markers.indexOf(marker)}
            />
        )
    );

    const homeMarkers = props.markers.map(marker => (
            <Marker position={{ lat: parseFloat(marker.cust_coordinates.split(",")[0]), lng: parseFloat(marker.cust_coordinates.split(",")[1])}}
                    title={marker.ip_address}
                    onClick={() => handleShowHome(marker)}
                    icon={homeIcon}
                    label="H"
                    key={props.markers.indexOf(marker)}
            />
        )
    );

    const polyLines = props.markers.map(marker => (
        <Polyline path = {[
            { lat: parseFloat(marker.ip_coordinates.split(",")[0]), lng: parseFloat(marker.ip_coordinates.split(",")[1])},
            { lat: parseFloat(marker.cust_coordinates.split(",")[0]), lng: parseFloat(marker.cust_coordinates.split(",")[1])}
                    ]}
                  options={{strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    clickable: false,
                    draggable: false,
                    editable: false,
                    visible: true,
                    radius: 30000,
                    paths: [
                        { lat: parseFloat(marker.ip_coordinates.split(",")[0]), lng: parseFloat(marker.ip_coordinates.split(",")[1])},
                        { lat: parseFloat(marker.cust_coordinates.split(",")[0]), lng: parseFloat(marker.cust_coordinates.split(",")[1])}
                    ],
                    zIndex: 1}}
                  key={props.markers.indexOf(marker)}
        />
    ));

    return (
        <Aux>
            {(!isLoaded) ? <div>Loading...</div> :
                <Aux>
                    <div className={"ipicMapContainer"}>
                        <GoogleMap zoom={3} center={props.center ? props.center : center} mapContainerClassName={"map-container"}>
                            {ipMarkers}
                            {props.show ? homeMarkers : ""}
                            {props.show ? polyLines : ""}
                        </GoogleMap>
                    </div>
                    <div className={"googleMapsLegend"}>
                        <div className={"legendValueContainer"}><img alt={"...Loading"} src={highMarker} height={25}/><p>High</p></div>
                        <div className={"legendValueContainer"}><img alt={"...Loading"} src={mediumMarker} height={25}/><p>Medium</p></div>
                        <div className={"legendValueContainer"}><img alt={"...Loading"} src={lowMarker} height={25}/><p>Low</p></div>
                    </div>
                </Aux>
            }

            <Offcanvas scroll show={show} onHide={handleClose} backdrop={false} placement={"end bottom"} style={{backgroundColor: "#e9ecef", height: "350px", marginTop: "230px", border: "2px solid #bbb"}} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.currentMarker ? props.currentMarker.ip_address : ""}</Offcanvas.Title>
                </Offcanvas.Header>
                {props.currentMarker ? <Offcanvas.Body>
                    <p>
                        <b>Risk Score:</b> {props.currentMarker ? props.currentMarker.risk_score : ""}
                    </p>
                    <p>
                        <b>Account Number:</b> {props.currentMarker ? props.currentMarker.account_number : ""}
                    </p>
                    <p>
                        <b>Name:</b> {props.currentMarker ?  props.currentMarker.name: ""}
                    </p>
                    <p>
                        <b>Country:</b> {props.currentMarker ?  props.currentMarker.ip_country: ""}
                    </p>
                    <p>
                        <b>Reason:</b> {props.currentMarker ?  props.currentMarker.risk_reason : ""}
                    </p>
                </Offcanvas.Body> : ""}
            </Offcanvas>

            <Offcanvas scroll show={showHome} onHide={handleClose} backdrop={false} placement={"end bottom"} style={{backgroundColor: "#e9ecef", height: "350px", marginTop: "230px", border: "2px solid #bbb"}} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.currentMarker ? props.currentMarker.ip_address : ""}</Offcanvas.Title>
                </Offcanvas.Header>
                {props.currentMarker ? <Offcanvas.Body>
                    <p>
                        <b>Risk Level:</b> {props.homeMarker ? props.homeMarker.agg_risk : ""}
                    </p>
                    <p>
                        <b>Account Number:</b> {props.currentMarker ? props.currentMarker.account_number : ""}
                    </p>
                    <p>
                        <b>Name:</b> {props.currentMarker ?  props.currentMarker.name: ""}
                    </p>
                    <p>
                        <b>Home Location:</b> {props.homeMarker ?  props.homeMarker.home_location_list : ""}
                    </p>
                    <p>
                        <b>Geolocation:</b> {props.homeMarker ?  props.homeMarker.geolocation_list.toString() : ""}
                    </p>
                </Offcanvas.Body> : ""}
            </Offcanvas>
        </Aux>
    )
};

export default IPICGoogleMaps;