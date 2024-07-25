import React, { useEffect, useState } from 'react'

const Contents = () => {
    const [videodata, setVideodata] = useState([])


    useEffect(() => {

        fetch(`https://yt-search-itx2.onrender.com/search?q=Real-time Weather Updates videos india`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVideodata(data?.searchResults)
            })

    }, [])




    return (
        <>
            {/* <div className='w-full h-auto bg-gray-100 flex flex-wrap gap-4'> */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
                {
                    videodata?.map((data, index) => (
                        <>
                            <div key={index} className='w-full h-[250px] cursor-pointer rounded-md overflow-hidden bg-white shadow-sm'>
                                <img className=' w-full h-[200px]' src={data?.thumbnail} alt='videos' />
                                <p className='text-[14px] p-2'>{data?.title}</p>
                            </div>
                        </>
                    ))
                }




            </div>


            {/* </div> */}
        </>
    )
}

export default Contents


/* For optimizing YouTube videos about weather and pollution safety, here are some keyword ideas to consider:

### General Weather and Pollution Safety Keywords
1. Weather Alerts
2. Pollution Alerts
3. Real-time Weather Updates
4. Air Quality Index (AQI)
5. Pollution Safety Tips
6. Weather Safety Tips
7. Severe Weather Preparedness
8. Emergency Weather Plans
9. Climate Change Impact
10. Air Pollution Health Effects

### Specific Weather Safety Keywords
1. Thunderstorm Safety
2. Flood Safety Tips
3. Hurricane Preparedness
4. Tornado Survival Tips
5. Heat Wave Safety
6. Winter Storm Safety
7. Lightning Strike Safety
8. Snowstorm Preparedness
9. Monsoon Safety Tips
10. Weather Forecasting Techniques

### Pollution Awareness Keywords
1. Air Quality Monitoring
2. Reducing Air Pollution
3. Health Effects of Pollution
4. Smog Alerts
5. Pollution Control Measures
6. Urban Air Quality
7. AQI Explained
8. Breathing Safe Air
9. Reducing Carbon Footprint
10. Green Living Tips

### Environmental Education Keywords
1. Climate Change Education
2. Sustainable Living
3. Environmental Conservation
4. Eco-friendly Practices
5. Renewable Energy
6. Wildlife Protection
7. Water Conservation
8. Recycling and Waste Management
9. Environmental Awareness Campaigns
10. Nature Preservation

### Targeted Keywords for User Engagement
1. How to Stay Safe During a Heat Wave
2. Top Tips for Air Pollution Safety
3. Real-time Weather Tracking Apps
4. Understanding the Air Quality Index
5. Best Practices for Weather Preparedness
6. Pollution's Impact on Health
7. Staying Safe in Extreme Weather
8. Air Quality Tips for Asthmatics
9. Protecting Yourself from Pollution
10. Emergency Kits for Weather Disasters

Using these keywords in your YouTube video titles, descriptions, and tags can help increase visibility and reach a wider audience interested in weather and pollution safety. */