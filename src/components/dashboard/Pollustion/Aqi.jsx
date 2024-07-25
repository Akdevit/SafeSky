import React from 'react'
import { FaCloud, FaSmog, FaWind, FaSun, FaCloudSun, FaCloudMoon, FaLeaf } from 'react-icons/fa';

const Aqi = ({ datauserprotectaqi }) => {


    return (
        <>
            {/* AQI */}
            <div className='w-full h-auto flex justify-center items-center p-4'>
                <div
                    className='w-[30%] rounded-md shadow-sm p-6 text-center'
                    style={{ backgroundColor: datauserprotectaqi?.bg_color }}
                >
                    <p
                        className='text-6xl font-bold'
                        style={{ color: datauserprotectaqi?.text_color }}
                    >
                        50
                    </p>
                    <div className="text-xl font-semibold mt-2">Air Quality Index (AQI)</div>
                    <div className="text-gray-600 mt-1">
                        {datauserprotectaqi?.category}
                    </div>
                </div>
            </div>

            {/* all */}
            <div className="air-quality grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-blue-500"><FaCloud /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">Carbon Monoxide</div>
                        <div className="value text-gray-600">350.48 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-red-500"><FaSmog /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">Nitric Oxide</div>
                        <div className="value text-gray-600">0.44 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-yellow-500"><FaWind /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">Nitrogen Dioxide</div>
                        <div className="value text-gray-600">67.86 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-orange-500"><FaSun /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">Ozone</div>
                        <div className="value text-gray-600">21.28 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-purple-500"><FaCloudSun /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">Sulfur Dioxide</div>
                        <div className="value text-gray-600">25.27 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-green-500"><FaCloudMoon /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">PM2.5</div>
                        <div className="value text-gray-600">12.16 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-indigo-500"><FaCloudMoon /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">PM10</div>
                        <div className="value text-gray-600">14.66 µg/m³</div>
                    </div>
                </div>
                <div className="pollutant flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                    <div className="icon text-3xl mr-4 text-teal-500"><FaLeaf /></div>
                    <div className="details">
                        <div className="name font-semibold text-lg">Ammonia</div>
                        <div className="value text-gray-600">1.52 µg/m³</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aqi
