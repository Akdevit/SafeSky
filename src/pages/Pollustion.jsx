import React, { useEffect, useState } from 'react'
import Nav from '../components/layout/Nav'
import Aqi from '../components/dashboard/Pollustion/Aqi'
import AQIjsondata from "../json/AQI.json"
import UserProtectionPollustion from '../components/dashboard/Pollustion/UserProtectionPollustion'
import { fetchpollustionData } from '../redux/Pollustion'
import { useDispatch, useSelector } from 'react-redux'
import { fetchweatherData } from '../redux/WeatherApiSlice'
const Pollustion = () => {
    const [datauserprotectaqi, setDatauserprotectaqi] = useState(['']);
    const dispatch = useDispatch()
    const pollustiondata = useSelector((state) => state.pollustion.data);
    const weatherData = useSelector((state) => state.weather.data);
    const inputvalue = useSelector((state) => state.input.value);


    useEffect(() => {
        dispatch(fetchweatherData(inputvalue))
    }, [dispatch, inputvalue])


    const lat = weatherData?.coord?.lat
    const lon = weatherData?.coord?.lon



    useEffect(() => {
        dispatch(fetchpollustionData({ lat, lon }))
    }, [dispatch, lat, lon])

    const AQI = pollustiondata?.list && pollustiondata?.list[0]?.main?.aqi;


    useEffect(() => {
        const range = AQIjsondata?.aqi_ranges?.find(teprenge =>
            (AQI >= teprenge.min && AQI <= teprenge.max)
        );
        if (range) {
            // console.log('AQI Range:', range);
            setDatauserprotectaqi(range)
        } else {
            console.log('No range found for temperature:', AQI);
        }
    }, [AQI]);




    return (
        <>
            <Nav />
            <Aqi datauserprotectaqi={datauserprotectaqi} />
            <UserProtectionPollustion datauserprotectaqi={datauserprotectaqi} />
            {/* <Map /> */}

        </>
    )
}

export default Pollustion
