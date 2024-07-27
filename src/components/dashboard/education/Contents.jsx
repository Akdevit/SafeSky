import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Lodder from './Lodder';
const Contents = ({ topics, lang }) => {
    const [videodata, setVideodata] = useState([])
    const [lodding, setLodding] = useState(true)
    const [playvideo, setPlayvideo] = useState('')


    /* extract id */
    function extractYouTubeID(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
    const videoId = extractYouTubeID(playvideo);
    // console.log(videoId);
    const playvideoid = videoId ? `https://www.youtube.com/embed/${videoId}` : '';





    useEffect(() => {
        setLodding(true)
        fetch(`https://yt-search-xpf0.onrender.com/search?q=${topics}%20news%20 videos in ${lang}&limit=20`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVideodata(data?.searchResults)
                setLodding(false)
            })

    }, [lang, topics])



    const Playvideoshandler = (url) => {
        setPlayvideo(url)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }




    return (
        <>
            <div className='w-full h-auto flex justify-center  p-4 '>
                {
                    playvideo && (
                        <>
                            <iframe
                                width="80%"
                                height="515"
                                src={playvideoid}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="Video"
                            ></iframe>
                            <RxCross1 className='text-2xl font-bold ml-4 text-red-700 cursor-pointer' onClick={() => setPlayvideo('')} title='close' />
                        </>
                    )
                }

            </div>

            {

                lodding ? (<Lodder />) : (

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
                        {videodata?.map((data, index) => (
                            <>
                                <div key={index} onClick={() => Playvideoshandler(data.url)} className='w-full h-[250px] cursor-pointer rounded-md overflow-hidden bg-white shadow-sm'>
                                    <img className=' w-full h-[200px]' src={data?.thumbnail} alt={data?.title} />
                                    <p className='text-[14px] p-2'>{data?.title}</p>
                                </div>
                            </>
                        ))}
                    </div>

                )



            }
        </>
    )
}

export default Contents


/* For optimizing YouTube videos about weather and pollution safety, here are some keyword ideas to consider:

### General Weather and Pollution Safety Keywords
1. Weather Alerts
2. Pollution Alerts
3. Real-time Weather Updates
4. what is Air Quality Index (AQI)
5. Pollution Safety Tips
6. Weather Safety Tips
7. Severe Weather Preparedness
8. Emergency Weather Plans
9. Climate Change Impact
10. Air Pollution Health Effects

"How to protect yourself from air pollution"
"Safety tips during severe weather"
"Best practices for indoor air quality"
"Protecting your health from climate change effects"
"How to prepare for natural disasters"
"Eco-friendly products for a sustainable home"
"How to reduce exposure to outdoor pollutants"
"Climate change and personal safety measures"
"Preparing for heatwaves and extreme temperatures"
"Protecting children from pollution"
"Healthy living tips in polluted areas"
"Emergency preparedness for hurricanes and storms"
"How to stay safe during a wildfire"
"Adapting to climate change in your community"
"Steps to improve indoor air quality"
"Personal protective equipment for pollution"
"How to stay safe during floods"
"Green home improvements for better air quality"
"Reducing waste to combat pollution"
"Protecting vulnerable populations from climate change"
Using these keywords in your YouTube video titles, descriptions, and tags can help increase visibility and reach a wider audience interested in weather and pollution safety. */