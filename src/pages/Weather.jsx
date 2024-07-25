import React from 'react'
import Nav from "../components/layout/Nav"
import WeatherData from '../components/dashboard/weather/WeatherData'
import MapForcast from '../components/dashboard/weather/Map_Forcast'
import Userprotect from '../components/dashboard/weather/Userprotect'
const Weather = () => {
  return (
    <>
      <Nav />
      <WeatherData />
      <MapForcast />
      <Userprotect />
    </>
  )
}

export default Weather
