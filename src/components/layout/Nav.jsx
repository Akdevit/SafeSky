import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { VscBell } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";

const Nav = () => {
    return (
        <>
            <div className='w-full h-20 bg-[#FFFFFF] border border-[#E3E4E8] border-hide flex items-center justify-between pr-4 pl-4'>
                <div className='w-auto h-auto '>
                    <h1 className='text-3xl font-bold'>Weather</h1>
                </div>

                {/* side navigation */}

                <div className=' w-auto h-auto flex gap-4'>

                    {/* input */}
                    <div className='w-auto pl-3 pr-3 p-2 bg-[#F4F4F6] h-auto flex items-center justify-center gap-1 rounded-full'>
                        <CiSearch className='text-2xl text-gray-400' />
                        <input className='bg-transparent outline-0 text-gray-400' type='text' placeholder='Search for samething..' />
                    </div>

                    {/* setting */}
                    <div className='w-[40px] h-[40px] bg-[#F4F4F6] flex justify-center items-center rounded-full cursor-pointer' title='Setting'>
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
        </>
    )
}

export default Nav
