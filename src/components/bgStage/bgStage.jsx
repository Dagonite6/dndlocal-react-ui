import React, { useEffect, useState } from 'react';
import BgOptions from './bgOptions';


async function getBgDetails(category, id) {
    const url = `http://127.0.0.1:8000/search/${category}/${id}/`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${localStorage.getItem("access_token")}`
        }
    })
    return
}

export default function BgStage({stateChanger}) {
    const [bgs, setBgs] = useState([])
    const [bg, setBg] = useState(JSON.parse(localStorage.getItem('bg')) ?? {})
    const [selected, setSelected] = useState(localStorage.getItem('selected-bg') ?? "0")
    const [descCol, setDescCol] = useState(true)

    useEffect(() => {
        localStorage.setItem('bg', JSON.stringify(bg));
    }, [bg]);

    useEffect(() => {
        localStorage.setItem('selected-bg', selected);
    }, [selected]);

    const handleChange = (prop) => (event) => {
        setSelected(event.target.value)

        let bgCache = bgs.find(bgC => bgC['id'] === event.target.value);

        if (bgCache) {
            setBg(bgCache)
            return
        }

        async function startFetching() {
            const response = await (await getBgDetails(prop, event.target.value)).json();
            response.id = event.target.value
            setBgs(oldBgs => [...oldBgs, response]);
            setBg(response)
        }
        startFetching();
    }

    return (
        <>
            <div className='relative w-full max-w-3xl'>
                <div onClick={() => {stateChanger("class")}} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl left-0'>&larr;</div>
                <div onClick={() => {stateChanger("stats")}} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl right-0'>&rarr;</div>
            </div>
            <div className="inline-block relative max-w-2xl">
                <select onChange={handleChange('bgs')} name="bgs" defaultValue={selected} id="bgs" className='text-gray-950 hover:bg-gray-300 cursor-pointer font-semibold block appearance-none w-full bg-gray-50 px-4 py-2 pr-8 rounded-md drop-shadow-md focus:outline-none focus:shadow-outline'>
                    <BgOptions />
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
            {bg.content && <div className='flex flex-col max-w-3xl bg-white drop-shadow-md relative rounded-lg px-3 pt-3 pb-5'>
                <p className='font-bold text-lg'>{bg.content.title}</p>
                <div className={`${descCol ? "line-clamp-3" : "line-clamp-none"} indent-8`}>{bg.content.text.map((str, index) => <p key={index}>{str}</p>)}</div>
                <div onClick={() => setDescCol(!descCol)} className='cursor-pointer absolute bottom-3 left-1/2 font-bold transform -translate-x-1/2'>{descCol ? "Read More" : "Show Less"}</div>   
            </div>}
            <div className='w-full gap-2 flex-wrap flex flex-row max-w-3xl'>
                {bg.proficiencies &&
                    <div className='flex-auto bg-white drop-shadow-md rounded-lg px-3 py-3'>
                        <p className='font-bold text-lg'>Proficiencies:</p>
                        {bg.proficiencies.map((prof, index) => {
                            return (<li key={index}>{prof}</li>)
                        })}
                    </div>}
            </div>  
        </>
    )
}