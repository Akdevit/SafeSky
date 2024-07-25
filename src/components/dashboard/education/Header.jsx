import React from 'react'
import Language from "../../../json/language.json"
const Header = () => {
    console.log(Language)
    return (
        <>
            <div className='w-full h-[80px] bg-white border-b-2 flex items-center'>


                <div className="w-[20%] mx-auto flex  items-center bg-red-200">
                    <label htmlFor="language" className="w-[80%] text-sm font-medium text-gray-700">
                        Topics
                    </label>
                    <select
                        id="language"
                        name="language"
                        className="mt-1 bg-gray-100 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >

                        <option value=''>Real-time weather update</option>
                        <option value=''>Real-time Pollution Alerts update</option>
                        <option value=''>Real-time weather update</option>
                        <option value=''>Real-time weather update</option>
                        <option value=''>Real-time weather update</option>

                    </select>
                </div>

                <div className="max-w-xs mx-auto flex  items-center">
                    <label htmlFor="language" className="w-[80%] text-sm font-medium text-gray-700">
                        Select Language
                    </label>
                    <select
                        id="language"
                        name="language"
                        className="mt-1 bg-gray-100 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        {Language?.languages.map((language, index) => (
                            <option key={index} value={language.code}>
                                {language.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Header
