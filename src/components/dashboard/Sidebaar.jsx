import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCloudSun, FaIndustry, FaGraduationCap } from 'react-icons/fa';

const Sidebaar = () => {
    return (
        <div className='w-[250px] h-[100vh]  p-4 '>
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
    );
}

export default Sidebaar;
