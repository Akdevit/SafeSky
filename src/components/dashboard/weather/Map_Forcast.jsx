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

const Map_Forcast = () => {
    const position = [25.6, 85.1167];
    return (
        <>
            {/* Map and Details Section */}
            <div className='w-full h-auto  flex gap-4 p-4 shadow-sm'>
                {/* Map */}
                <div className='w-[30%] h-[350px]   rounded-md overflow-hidden'>
                    <MapContainer center={position} zoom={6} style={{ height: '350px', width: '100%' }}>
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

                {/* Additional Details */}
                <div className="w-[70%] mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Bihar
                        Weather Forecast</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {/* cards */}
                        <div className='w-full bg-red-100 shadow-sm p-4 rounded-md'>
                            <div className="flex items-center">
                                <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt='' className="w-12 h-12" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">
                                        25°C
                                    </h2>
                                    <p>
                                        cloud weather
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p>
                                    <p >max: 30°C  min: 15°C</p>
                                </p>
                                <p><strong>monday</strong> </p>
                            </div>
                        </div>
                        <div className='w-full bg-red-100 shadow-sm  p-4 rounded-md'>
                            <div className="flex items-center">
                                <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt='' className="w-12 h-12" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">
                                        25°C
                                    </h2>
                                    <p>
                                        cloud weather
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p>
                                    <p >max: 30°C  min: 15°C</p>
                                </p>
                                <p><strong>monday</strong> </p>
                            </div>
                        </div>
                        <div className='w-full bg-red-100 shadow-sm  p-4 rounded-md'>
                            <div className="flex items-center">
                                <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt='' className="w-12 h-12" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">
                                        25°C
                                    </h2>
                                    <p>
                                        cloud weather
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p>
                                    <p >max: 30°C  min: 15°C</p>
                                </p>
                                <p><strong>monday</strong> </p>
                            </div>
                        </div>
                        <div className='w-full bg-red-100 shadow-sm p-4 rounded-md'>
                            <div className="flex items-center">
                                <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt='' className="w-12 h-12" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">
                                        25°C
                                    </h2>
                                    <p>
                                        cloud weather
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p>
                                    <p >max: 30°C  min: 15°C</p>
                                </p>
                                <p><strong>monday</strong> </p>
                            </div>
                        </div>
                        <div className='w-full bg-red-100 shadow-sm p-4 rounded-md'>
                            <div className="flex items-center">
                                <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt='' className="w-12 h-12" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">
                                        25°C
                                    </h2>
                                    <p>
                                        cloud weather
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p>
                                    <p >max: 30°C  min: 15°C</p>
                                </p>
                                <p><strong>monday</strong> </p>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Map_Forcast
