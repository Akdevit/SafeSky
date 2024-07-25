import React from 'react'
import Markermap from '../../../images/marker.png'

/* leaflet */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;
const customIcon = new L.Icon({
    iconUrl: Markermap,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const Map = () => {
    const position = [25.6, 85.1167];
    return (
        <>
            <div className='w-full h-[80vh]  p-2  flex justify-center'>
              
                    <MapContainer center={position} zoom={6} style={{ height: '80vh', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            // {`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`}
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup>
                                A sample popup message!
                            </Popup>
                        </Marker>
                    </MapContainer>
              
            </div>
        </>
    )
}

export default Map
