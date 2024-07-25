import React from 'react';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='w-[100%] h-[100vh] bg-[#eb9f9ff7]  '>
            <Outlet />
        </div>
    );
}

export default Body;
