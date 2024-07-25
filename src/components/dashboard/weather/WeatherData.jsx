import React from 'react';
import { FaCloud, FaEye, FaTemperatureHigh, FaWind } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';//Pressure
import { FaTint } from 'react-icons/fa';//Humidity
import { GiSunrise } from 'react-icons/gi';
import { IoSunny } from 'react-icons/io5';
import { TiCompass } from 'react-icons/ti';
import { MdStorm } from 'react-icons/md'; // Use MdStorm for a stormy weather icon
/* rechart */

const WeatherData = () => {



    return (
        <>
            {/* Weather Cards */}
            <div className='w-full h-auto  flex justify-between p-4 gap-4'>
                {/* card 1 */}
                <div className='w-full md:w-[40%] h-[200px] rounded-md bg-red-200 shadow-sm flex'>
                    <div className='w-[150px] h-full flex flex-col justify-center items-center p-4 '>
                        <img src='http://openweathermap.org/img/wn/04d@2x.png' alt='weather' className='w-[100px] h-[100px]' />
                        <p className='text-xl font-bold '>Clouds</p>
                        <p className='text-base'>broken clouds</p>
                    </div>
                    <div className='w-[60%] h-auto flex flex-col gap-4 justify-center items-center'>
                        <h1 className='text-7xl  font-bold'>25°C</h1>

                        <p >max: 30°C  min: 15°C</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='w-[40%] h-[200px] rounded-md bg-blue-200 shadow-sm p-2'>
                    <h2 className='text-5xl  text-center'>Bihar</h2>
                    <div className=" flex items-center gap-4 mt-2 px-4">
                        <FaTemperatureHigh />
                        <span>Feels Like: feels_like K</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTachometerAlt />
                        <span>Pressure: feels_like K</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTint />
                        <span>Humidity: feels_like K</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTachometerAlt />
                        <span>Sea Level Pressure: feels_like K</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTachometerAlt />
                        <span>Ground Level Pressure: feels_like K</span>
                    </div>

                </div>
                {/* card3 */}
                <div className='w-[40%] h-[200px] rounded-md bg-green-200 p-2 shadow-sm flex flex-wrap '>
                    <div className="w-[50%] h-auto cursor-pointer flex items-center gap-4 px-4" title='Visibility'>
                        <FaEye className="text-xl" />
                        <span >502154 m</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4" title='Wind Speed'>
                        <FaWind className='text-xl' />
                        <span >5.3 m/s</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4" title='Wind Direction'>
                        <TiCompass className='text-xl' />
                        <span > 56°</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4 " title='Wind Gusts'>
                        <MdStorm className='text-xl' />
                        <span > 62.2 m/s</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4" title='Cloud Cover'>
                        <FaCloud className='text-xl' />
                        <span > 652%</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4 " title='Sunrise'>
                        <IoSunny className='text-xl' />
                        <span >6:00AM </span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex  items-center gap-4 px-4 " title='Sunset'>
                        <GiSunrise className='text-xl' />
                        <span >6:00PM </span>
                    </div>

                    {/* Add weather data here */}
                </div>
            </div>


        </>
    );
}

export default WeatherData;


