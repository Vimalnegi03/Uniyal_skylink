import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from '../assets/marker-icon.png';
import markerShadow from '../assets/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const defaultPosition = [30.4500, 78.3885];

const locations = [
  { name: "BHAGIRATHIPURAM", position: [30.3722, 78.3170] },
  { name: "THDC IHET", position: [30.3653, 78.3273] },
  { name: "GHANSALI", position: [30.4367, 78.4558] },
  { name: "CHAMIYALA", position: [30.3074, 78.4276] },
  { name: "CHAMBA, TEHRI", position: [30.3538, 78.5106] },
  { name: "TEHRI", position: [30.3721, 78.3185] },
  { name: "KANATAL", position: [30.3894, 78.3365] },
  { name: "DHANAULTI", position: [30.3391, 78.4821] },
  { name: "BURANSKANDA", position: [30.4637, 78.5296] },
  { name: "CHINYALISAUR", position: [30.5960, 78.3743] },
  { name: "BARKOT", position: [30.5711, 78.4186] },
  { name: "PUROLA", position: [30.5292, 78.2816] },
  { name: "GAJA", position: [30.4074, 78.3268] },
  { name: "RANICHAURI", position: [30.4697, 78.4228] }
];

const MapComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Tehri Wi-Fi Connections</h1>
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div style={{ height: '60vh', width: '100%' }}>
            <MapContainer
              center={defaultPosition}
              zoom={10}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  icon={customIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">We have more than 2000+ satisfied customers</h2>
          <p className="text-gray-600">Our services have been highly rated by customers for quality and reliability. Thank you for choosing us!</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
