import React, { useEffect, useState } from 'react';
import ClassOptions from './classOptions';


async function getClassDetails(category, id) {
    // const url = `http://127.0.0.1:8000/search/${category}/${id}/`;
    // return fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Token ${localStorage.getItem("access_token")}`
    //     }
    // })
    return
}

export default function ClassStage({curName, stateChanger}) {
    const [classes, setClasses] = useState([]);
    const [charClass, setCharClass] = useState(JSON.parse(localStorage.getItem('class')) ?? {})
    const [selected, setSelected] = useState(localStorage.getItem('selected-class') ?? "0")

    useEffect(() => {
        localStorage.setItem('class', JSON.stringify(charClass));
    }, [charClass]);

    useEffect(() => {
        localStorage.setItem('selected-class', selected);
    }, [selected]);

    const handleChange = (prop) => (event) => {
        setSelected(event.target.value)
        
        let classCache = classes.find(classC => classC['id'] === event.target.value);

        if (classCache) {
            setCharClass(classCache)
            return
        }

        async function startFetching() {
            const response = await (await getClassDetails(prop, event.target.value)).json();
            response.id = event.target.value
            setClasses(oldClasses => [...oldClasses, response]);
            setCharClass(response)
        }
        startFetching();
    }

    return (
        <>
            <div className='relative w-full max-w-3xl'>
                <div onClick={() => {stateChanger("race")}} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 left-0'>&larr;</div>
                <div onClick={() => {stateChanger("stats")}} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 right-0'>&rarr;</div>
            </div>
            <label className="block text-gray-200 text-xl font-bold" htmlFor="classes">
                        {curName}'s class:
                    </label>
            <div className="inline-block relative max-w-3xl">
                <select onChange={handleChange('classes')} name="classes" defaultValue={selected} id="classes" className='text-gray-950 hover:bg-gray-300 cursor-pointer font-semibold block appearance-none w-full bg-gray-50 px-4 py-2 pr-8 rounded-md drop-shadow-md focus:outline-none focus:shadow-outline'>
                    <ClassOptions />
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </>
    )
}