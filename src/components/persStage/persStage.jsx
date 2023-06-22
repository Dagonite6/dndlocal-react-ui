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

export default function PersStage({ curName, nameChanger, stateChanger }) {
    // const [classes, setClasses] = useState([]);
    // const [charClass, setCharClass] = useState({})

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
                <div onClick={() => { stateChanger("race") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 right-0'>&rarr;</div>
            </div>
            <div className="inline-block relative max-w-3xl">
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="char-name">
                        Character's name:
                    </label>
                    <input onChange={e => nameChanger(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 font-semibold focus:outline-none focus:shadow-outline focus:bg-slate-100" name="char-name" id="char-name" type="text" value={curName}placeholder=""/>
                </div>
            </div>
        </>
    )
}