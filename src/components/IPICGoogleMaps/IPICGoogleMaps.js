import React, {useMemo} from 'react';
import './IPICGoogleMaps.css';
import Aux from '../../hoc/Auxiliary';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import homeIcon from "../../assets/home-icon.png"
import {googleApiKey} from "../../shared/googleApiKey";


const IPICGoogleMaps = (props) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey,
    });

    const center = useMemo(() => ({ lat: 44, lng: -80}), []);

    return (
        <Aux>
            {(!isLoaded) ? <div>Loading...</div> :
                <GoogleMap zoom={10} center={center} mapContainerClassName={"map-container"}>
                    <Marker position={{ lat: 44, lng: -80}}
                            title={"Here is the marker"}
                            onClick={() => alert("Hi this is the marker")}
                            icon={homeIcon}
                            label="H"
                    />
                    <Marker position={{ lat: 44, lng: -80.2}}
                            title={"Here is the marker"}
                            onClick={() => alert("Hi this is the marker")}
                            label="IP"
                    />
                </GoogleMap>
            }
        </Aux>
    )
};

export default IPICGoogleMaps;