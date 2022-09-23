import React, {useMemo, useState} from 'react';
import './IPICGoogleMaps.css';
import Aux from '../../hoc/Auxiliary';
import { GoogleMap, useLoadScript, Marker, Polyline } from "@react-google-maps/api";
import homeIcon from "../../assets/home-icon.png"
import {googleApiKey} from "../../shared/googleApiKey";
import Offcanvas from 'react-bootstrap/Offcanvas';


const IPICGoogleMaps = (props) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey,
    });

    const center = useMemo(() => ({ lat: 44, lng: -80}), []);

    /*Polyline Attributes*/
    const path = [
        { lat: 44, lng: -80},
        { lat: 44, lng: -80.5}
    ];

    const options = {
        strokeColor: '#FF0000',
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
            { lat: 44, lng: -80},
            { lat: 44, lng: -80.5}
        ],
        zIndex: 1
    };

    /*Modal Attributes*/

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        /*console.log(props.currentAccountData);*/
        setShow(true);
    };

    return (
        <Aux>
            {(!isLoaded) ? <div>Loading...</div> :
                <GoogleMap zoom={10} center={center} mapContainerClassName={"map-container"}>
                    <Marker position={{ lat: 44, lng: -80}}
                            title={"Here is the marker"}
                            onClick={handleShow}
                            icon={homeIcon}
                            label="H"
                    />
                    <Marker position={{ lat: 44, lng: -80.5}}
                            title={"Here is the marker"}
                            onClick={handleShow}
                            label="IP"
                    />
                    <Polyline path = {path} options={options} />
                </GoogleMap>
            }

            <Offcanvas scroll show={show} onHide={handleClose} backdrop={false} placement={"end bottom"} style={{backgroundColor: "#e9ecef", height: "350px", marginTop: "230px"}} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>IP Account Data</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>
                        <b>Risk Score:</b> High
                    </p>
                    <p>
                        <b>Account Number:</b> XXX7101
                    </p>
                    <p>
                        <b>Name:</b> Oliver Willow
                    </p>
                    <p>
                        <b>Home Location:</b> CT, USA
                    </p>
                    <p>
                        <b>Geolocation:</b> Ghana (10), Yamen(5)
                    </p>
                    <p>
                        <b>Server location:</b>
                    </p>
                </Offcanvas.Body>
            </Offcanvas>

        </Aux>
    )
};

export default IPICGoogleMaps;