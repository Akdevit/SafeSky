import React, { useEffect, useState } from 'react'
import Nav from '../components/layout/Nav'
import Aqi from '../components/dashboard/Pollustion/Aqi'
import AQIjsondata from "../json/AQI.json"
import UserProtectionPollustion from '../components/dashboard/Pollustion/UserProtectionPollustion'
const Pollustion = () => {
    const [datauserprotectaqi, setDatauserprotectaqi] = useState(['']);

    const AQI = 400;


    useEffect(() => {
        const range = AQIjsondata?.aqi_ranges?.find(teprenge =>
            (AQI >= teprenge.min && AQI <= teprenge.max)
        );
        if (range) {
            console.log('AQI Range:', range);
            setDatauserprotectaqi(range)
        } else {
            console.log('No range found for temperature:', AQI);
        }
    }, []);

    return (
        <>
            <Nav />
            <Aqi datauserprotectaqi={datauserprotectaqi}/>
            <UserProtectionPollustion datauserprotectaqi={datauserprotectaqi}/>
            {/* <Map /> */}

        </>
    )
}

export default Pollustion
