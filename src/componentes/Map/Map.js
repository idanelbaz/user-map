import React from 'react';
import './Map.css';

const MapContainer = props => {

    const { city, countryCode } = props;
    const googleLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${city}+${countryCode}`;
    return (
        <div>
            <iframe className="map" title="Your IP location"
                frameBorder="0"
                src={googleLink}
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default MapContainer;
