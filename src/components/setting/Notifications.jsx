import React, {  useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const Notifications = ({setOpenpermistionmodal}) => {
    const [notificationAccess, setNotificationAccess] = useState(true);
    const [locationAccess, setLocationAccess] = useState(true);


    // const [location, setLocation] = useState({ latitude: null, longitude: null });
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setLocation({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude,
    //                 });
    //                 setError(null);
    //                 console.log(location)
    //             },
    //             (err) => {
    //                 setError(err.message);
    //             }
    //         );
    //     } else {
    //         setError('Geolocation is not supported by this browser.');
    //     }
    // }, [location])



    return (
        <div className='w-full h-[100vh]  flex justify-center items-center absolute z-50 right-0 left-0 top-0'>
            <div className='w-[60%] h-[60vh] bg-white rounded-md p-6 shadow-lg'>
                <div className='w-full h-auto  flex justify-between items-center mb-6'>
                    <h1 className='text-2xl font-semibold '>Access Permissions</h1>
                    <RxCross1 className='text-xl font-bold cursor-pointer' onClick={() => setOpenpermistionmodal(false)}/>
                </div>
                {/* Notification Access */}
                <div className='flex items-center justify-between mb-6'>
                    <span className='text-lg'>Notification Access</span>
                    <label className='inline-flex items-center cursor-pointer'>
                        <div
                            onClick={() => setNotificationAccess(!notificationAccess)}
                            className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 cursor-pointer ${notificationAccess ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${notificationAccess ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            ></div>
                        </div>
                    </label>
                </div>

                {/* Location Access */}
                <div className='flex items-center justify-between'>
                    <span className='text-lg'>Location Access</span>
                    <label className='inline-flex items-center cursor-pointer'>
                        <div
                            onClick={() => setLocationAccess(!locationAccess)}
                            className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 cursor-pointer ${locationAccess ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${locationAccess ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            ></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
