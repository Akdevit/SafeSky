import React, { useEffect } from 'react';
import Nav from "../components/layout/Nav";
import WeatherData from '../components/dashboard/weather/WeatherData';
import MapForcast from '../components/dashboard/weather/Map_Forcast';
import Userprotect from '../components/dashboard/weather/Userprotect';
import { useDispatch, useSelector } from 'react-redux';
import { fetchweatherData } from '../redux/WeatherApiSlice';
import { fetchweatherforcastData } from '../redux/WeatherForcastSlice';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const WeatherCityname = weatherData?.name;
  const inputvalue = useSelector((state) => state.input.value);

  /* user Live coord */
  const lon = "85.7153654";
  const lat = "26.7911112";
  /* search weather by city */
  useEffect(() => {
    dispatch(fetchweatherData({ q: inputvalue, lat, lon }));
  }, [dispatch, inputvalue, lat, lon]);

  /* weather forcast */
  useEffect(() => {
    if (WeatherCityname) {
      dispatch(fetchweatherforcastData(WeatherCityname));
    }
  }, [dispatch, WeatherCityname]);

  return (
    <>
      <Nav />
      <WeatherData />
      <MapForcast />
      <Userprotect />
    </>
  );
};

export default Weather;
