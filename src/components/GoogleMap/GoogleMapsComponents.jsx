import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import { GoogleApiKey } from '../../Api/GoogleApi';
import GoogleMpasStore from '../../ZustandStore/GooglemapStore';
import iconTruck from "../../assets/Truck (1).png"
function MapsGoogle({ width = '100%', height = '400px', LatLongMuat, LatLongBongkar, LokasiDriverLongLat }) {
    const [map, setMap] = useState(null);
    const [directionJalanan, setDirectionJalanan] = useState(null);
    const { validasimaps } = GoogleMpasStore()
    const containerStyle = {
        width: width,
        height: height,
    };

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GoogleApiKey // Replace with your actual API key
    });

    useEffect(() => {
        if (!isLoaded || !LatLongMuat || !LatLongBongkar) {
            return;
        }

        const calculateRoute = async () => {
            if (typeof window.google === 'undefined') {
                console.error('Google Maps API is not defined.');
                return;
            }

            const directionsService = new window.google.maps.DirectionsService();

            try {
                const result = await directionsService.route({
                    origin: new window.google.maps.LatLng(LatLongMuat?.lat, LatLongMuat?.lng),
                    destination: new window.google.maps.LatLng(LatLongBongkar?.lat, LatLongBongkar?.lng),
                    travelMode: window.google.maps.TravelMode.DRIVING,
                });
                setDirectionJalanan(result);
                GoogleMpasStore.setState({ validasimaps: true })
            } catch (error) {
                console.error('Failed to get route: ', error);
            }
        };

        calculateRoute();
    }, [isLoaded, LatLongMuat, LatLongBongkar]); // Added isLoaded to the dependency array

    const center = {
        lat: (LatLongMuat?.lat + LatLongBongkar?.lat) / 2,
        lng: (LatLongMuat?.lng + LatLongBongkar?.lng) / 2
    };
    console.log(`LatLongMuat`, LatLongMuat);
    console.log(`LatLongBongkar`, LatLongBongkar);
    const mapOnLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const mapOnUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    if (loadError) {
        return <div>Error loading maps</div>;
    }
    if (!isLoaded) {
        return <div></div>;
    }

    return (
        <>
            {directionJalanan && (
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} onLoad={mapOnLoad} onUnmount={mapOnUnmount}>
                    <Marker position={{ lat: LatLongMuat?.lat, lng: LatLongMuat?.lng }} />
                    <Marker position={{ lat: LatLongBongkar?.lat, lng: LatLongBongkar?.lng }} />
                    <Marker icon={{
                        url: iconTruck,
                        scaledSize: new window.google.maps.Size(30, 30), // Adjust the size here
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(25, 25)
                    }}  position={{ lat: LokasiDriverLongLat?.lat, lng: LokasiDriverLongLat?.lon }} />
                    {directionJalanan && (
                        <DirectionsRenderer
                            directions={directionJalanan}
                            options={{
                                polylineOptions: {
                                    strokeColor: '#1B5EEE',
                                    strokeWeight: 2,
                                },
                            }}
                        />
                    )}
                </GoogleMap>
            )}
        </>
    );
}

export default MapsGoogle;
