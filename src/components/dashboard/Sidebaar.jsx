import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCloudSun, FaIndustry, FaGraduationCap } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Sidebaar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            {/* hide show menu sidebaar  */}
            <div onClick={() => setOpen(true)} className='h-[60px] w-[25px] bg-gray-300 shadow-md absolute left-0 top-1/2  z-50 flex justify-center items-center rounded-sm cursor-pointer xl:hidden lg:hidden md:hidden sm:block block'>
                <IoIosArrowForward className='text-xl font-bold' />
            </div>


            <div className={`w-[250px] h-[100vh]  p-4 xl:relative lg:relative md:relative xl:block lg:block md:block  ${open ? 'block' : 'hidden'} absolute top-0 left-0 z-[999999] bg-white`}>
                {/* hide show menu sidebaar  */}
                <div onClick={() => setOpen(false)} className='h-[60px] w-[25px] bg-gray-300 shadow-md absolute right-0 top-1/2  z-50 flex justify-center items-center rounded-sm cursor-pointer xl:hidden lg:hidden md:hidden sm:block block'>
                    <IoIosArrowBack className='text-xl font-bold' />
                </div>

                <NavLink to='/'>
                    <div className='w-full h-auto   '>
                        <h2 className='text-2xl font-bold mb-6'>Dashboard</h2>
                    </div>
                </NavLink>
                <ul className='space-y-4'>
                    <li className='flex items-center'>
                        <FaCloudSun className='mr-2 text-xl' />
                        <NavLink
                            to="/dashboard/weather"
                            className={({ isActive }) =>
                                `w-full text-lg ${isActive ? ' bg-gray-100' : 'text-black'}   rounded-lg p-2 transition-colors duration-300`
                            }
                        >
                            Weather
                        </NavLink>
                    </li>
                    <li className='flex items-center'>
                        <FaIndustry className='mr-2 text-xl' />
                        <NavLink
                            to="/dashboard/pollustion"
                            className={({ isActive }) =>
                                `w-full text-lg ${isActive ? ' bg-gray-100' : 'text-black'}   rounded-lg p-2 transition-colors duration-300`
                            }
                        >
                            Pollution
                        </NavLink>
                    </li>
                    <li className='flex items-center'>
                        <FaGraduationCap className='mr-2 text-xl' />
                        <NavLink
                            to="/dashboard/education"
                            className={({ isActive }) =>
                                `w-full text-lg ${isActive ? ' bg-gray-100' : 'text-black'}   rounded-lg p-2 transition-colors duration-300`
                            }
                        >
                            Education
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebaar;
