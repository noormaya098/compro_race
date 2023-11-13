import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { keygoogle } from '../../Api/GoogleApi'; // Ensure this import is correct

function MapsGoogle({ width = '100%', height = '400px', AlamatMuatBongkarCoordinate }) {
    const containerStyle = {
        width: width,
        height: height,
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: keygoogle
    });

    const center = AlamatMuatBongkarCoordinate || { lat: -34.397, lng: 150.644 };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            {/* Child components like markers, info windows, etc. */}
        </GoogleMap>
    );
}

export default MapsGoogle;
