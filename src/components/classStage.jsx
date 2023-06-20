import React, { useEffect, useState } from 'react';

async function getRaces() {
    // return fetch('http://127.0.0.1:8000/search/races/', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Token ${localStorage.getItem("access_token")}`
    //     }
    // })
    //     .then(data => data.json())
    return
}

async function getRaceDetails(category, id) {
    // const url = `http://127.0.0.1:8000/search/${category}/${id}/`;
    // return fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Token ${localStorage.getItem("access_token")}`
    //     }
    // })
    return
}

export default function ClassSel({stateChanger}) {
    const [classes, setClasses] = useState([]);
    const [charClass, setCharClass] = useState({})

    // useEffect(() => {
    //     let ignore = false;
    //     async function startFetching() {
    //         const response = await getRaces()
    //         setRaces(response)
    //     }
    //     startFetching();
    //     return () => {
    //         ignore = true;
    //     };
    // }, []);

    const handleChange = (prop) => (event) => {
        // async function startFetching() {
        //     const response = await getRaceDetails(prop, event.target.value)
        //     setRace(await response.json())
        // }
        // startFetching();
        return
    }

    return (
        <>
            <div className='relative w-full max-w-3xl'>
                <div onClick={() => {stateChanger("race")}} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl left-0'>&larr;</div>
                <div onClick={() => {stateChanger("background")}} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl right-0'>&rarr;</div>
            </div>
            <div className="inline-block relative max-w-lg">
                <select onChange={handleChange('races')} name="races" id="races" className='hover:bg-gray-300 cursor-pointer font-semibold block appearance-none w-full bg-gray-50 px-4 py-2 pr-8 rounded-md drop-shadow-md focus:outline-none focus:shadow-outline'>
                    <option key='blankKey' hidden value >Select class    </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </>
    )
}