import React, {useMemo} from 'react';
import './IPICGoogleMaps.css';
import Aux from '../../hoc/Auxiliary';
import { GoogleMap, useLoadScript, Marker, Polyline } from "@react-google-maps/api";
import homeIcon from "../../assets/home-icon.png"
import {googleApiKey} from "../../shared/googleApiKey";


const IPICGoogleMaps = (props) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey,
    });

    const center = useMemo(() => ({ lat: 44, lng: -80}), []);

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

    return (
        <Aux>
            {(!isLoaded) ? <div>Loading...</div> :
                <GoogleMap zoom={10} center={center} mapContainerClassName={"map-container"}>
                    <Marker position={{ lat: 44, lng: -80}}
                            title={"Here is the marker"}
                            onClick={() => console.log("Hi this is the marker")}
                            icon={homeIcon}
                            label="H"
                    />
                    <Marker position={{ lat: 44, lng: -80.5}}
                            title={"Here is the marker"}
                            onClick={() => console.log("Hi this is the marker")}
                            label="IP"
                    />
                    <Polyline path = {path} options={options} />
                </GoogleMap>
            }
        </Aux>
    )
};

export default IPICGoogleMaps;