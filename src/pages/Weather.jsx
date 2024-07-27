import React, { useEffect } from 'react'
import Nav from "../components/layout/Nav"
import WeatherData from '../components/dashboard/weather/WeatherData'
import MapForcast from '../components/dashboard/weather/Map_Forcast'
import Userprotect from '../components/dashboard/weather/Userprotect'
import { useDispatch, useSelector } from 'react-redux'
import { fetchweatherData } from '../redux/WeatherApiSlice'
import { fetchweatherforcastData } from '../redux/WeatherForcastSlice'
const Weather = () => {

  const dispatch = useDispatch()
  const inputvalue = useSelector((state) => state.input.value);
 

  useEffect(() => {
    dispatch(fetchweatherData(inputvalue))
  }, [dispatch, inputvalue])

  /* forcast weather */
  useEffect(() => {
    dispatch(fetchweatherforcastData(inputvalue))
  }, [dispatch,inputvalue])

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