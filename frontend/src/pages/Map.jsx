import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "90vh",
  width: "100%",
};

const center = {
  lat: 40.748817, // Default center location (e.g., New York)
  lng: -73.985428,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(center);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef();

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(userLocation);
        mapRef.current.panTo(userLocation);
        fetchNearbyParking(userLocation);
      });
    }
  }, []);

  const fetchNearbyParking = (location) => {
    const service = new window.google.maps.places.PlacesService(mapRef.current);
    const request = {
      location,
      radius: "1000", // Search within 1.5km radius
      type: ["parking"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setMarkers(results);
      }
    });
  };

  const onSelectMarker = (marker) => {
    setSelectedPlace(marker);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={currentLocation}
        zoom={14}
        options={options}
        onLoad={onMapLoad}
      >
        {currentLocation && (
          <Marker
            position={currentLocation}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
        )}

        {markers.map((marker) => (
          <Marker
            key={marker.place_id}
            position={{
              lat: marker.geometry.location.lat(),
              lng: marker.geometry.location.lng(),
            }}
            onClick={() => onSelectMarker(marker)}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat(),
              lng: selectedPlace.geometry.location.lng(),
            }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.vicinity}</p>
              <button onClick={() => navigateTo(selectedPlace)}>
                Navigate
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

const navigateTo = (place) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
  window.open(url, "_blank");
};

export { Map };
