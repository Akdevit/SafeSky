import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <div className='w-full h-[90vh] bg-[#F5F7FA] flex '
                style={{
                    backgroundImage: `url(https://img.freepik.com/premium-photo/map-world-with-words-pink-blue_1002361-4631.jpg?w=1380)`,
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    backgroundSize: 'cover',
                }}
            >
                <div className='w-[100%] h-[100%] flex justify-center items-center' >

                    <div className='w-[60%] h-auto  flex flex-col gap-4 justify-center items-center' >
                        <h1 className='text-6xl font-bold text-center'>“Stay Informed, Stay Safe”</h1>
                        <p className='text-2xl text-center'>Access accurate data to protect your health and make informed decisions. Stay informed, stay healthy, and ensure your well-being.</p>

                        <div className='w-full h-auto flex gap-4 items-center justify-center'>
                            <Link to='/dashboard/weather'>
                                <button className='w-[150px] h-[40px] rounded-md dark:bg-gray-800 text-white  ' >Dashboard</button>
                            </Link>
                            <button className='w-[150px] h-[40px] rounded-md dark:bg-gray-800 text-white  ' >Learn More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero
