import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';
import { IoMdSettings } from "react-icons/io";
import { VscBell } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../redux/Searchvalue';
import Notifications from '../setting/Notifications';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [openpermistionmodal, setOpenpermistionmodal] = useState(false);
    const dispatch = useDispatch();
    const weatherStatus = useSelector((state) => state.weather.status);
    // const weatherError = useSelector((state) => state.weather.error);
    const [input, setInput] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if (weatherStatus === 'loading') {
            toast.loading('Loading...');
        } else {
            toast.dismiss();
        }

        if (weatherStatus === 'failed') {
            toast.error('Not found!');
        }

        if (weatherStatus === 'succeeded') {
            toast.success('Data loaded successfully!');
        }
    }, [weatherStatus]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(setInputValue(input));
            navigate('/dashboard/weather')
        }
    };

    const Permissionsnotifications = () => {
        setOpenpermistionmodal(true);
    };

    return (
        <>
            <div className='w-full xl:h-20 h-auto gap-4 p-4 bg-[#FFFFFF] border border-[#E3E4E8] border-hide flex flex-col items-center justify-between pr-4 pl-4'>

                {/* side navigation */}
                <div className=' w-full h-auto flex  justify-between gap-4 '>
                    <div className='w-auto h-auto '>
                        <h1 className='text-3xl font-bold'>SafeSky</h1>
                    </div>

                    <div className="flex gap-4">
                        {/* desktop input */}
                        <div className='hidden sm:flex sm:w-auto sm:pl-3 sm:pr-3 sm:p-2 sm:bg-[#F4F4F6] sm:h-auto sm:items-center sm:justify-center sm:gap-1 sm:rounded-full'>
                            <CiSearch className='text-2xl text-gray-400' />
                            <input
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                className='bg-transparent outline-0 text-gray-400'
                                type='text'
                                placeholder='Search for something..'
                            />
                        </div>


                        {/* setting */}
                        <div
                            onClick={Permissionsnotifications}
                            className='w-[40px] h-[40px] bg-[#F4F4F6] flex justify-center items-center rounded-full cursor-pointer'
                            title='Setting'
                        >
                            <IoMdSettings className='text-[#888EA2] text-xl' />
                        </div>
                        {/* notification */}
                        <div className='w-[40px] h-[40px] bg-[#F4F4F6] flex justify-center items-center rounded-full cursor-pointer relative' title='notification'>
                            <div className='w-[8px] h-[8px] bg-[#D13329] rounded-full absolute top-2 right-2'></div>
                            <VscBell className='text-xl text-[#D13329]' />
                        </div>
                        {/* profile */}
                        <div className='w-[40px] h-[40px] bg-[#F4F4F6] flex justify-center items-center rounded-full cursor-pointer' title='Profile'>
                            <CiUser className='text-[#888EA2] text-xl ' />
                        </div>
                    </div>
                </div>
                {openpermistionmodal && <Notifications setOpenpermistionmodal={setOpenpermistionmodal} />}
                {/* mobile input */}
                <div className='xl:hidden lg:hidden md:hidden sm:hidden block w-full pl-3 pr-3 p-2 bg-[#F4F4F6] h-auto flex items-center justify-center gap-4 rounded-full'>
                    <CiSearch className='text-2xl text-gray-400' />
                    <input
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        className='w-[85%] bg-transparent outline-0 text-gray-400'
                        type='text'
                        placeholder='Search for something..'
                    />
                </div>


            </div>
        </>
    );
};

export default Nav;
