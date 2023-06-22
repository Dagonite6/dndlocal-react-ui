import React, { useEffect, useState } from 'react';

import RaceOptions from './raceOptions';


async function getRaceDetails(category, id) {
    const url = `http://127.0.0.1:8000/search/${category}/${id}/`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${localStorage.getItem("access_token")}`
        }
    })
}

export default function RaceStage({ stateChanger }) {
    const [races, setRaces] = useState([])
    const [race, setRace] = useState(JSON.parse(localStorage.getItem('race')) ?? {})
    const [selected, setSelected] = useState(localStorage.getItem('selected-race') ?? "0")
    const [descCol, setDescCol] = useState(true)

    useEffect(() => {
        localStorage.setItem('race', JSON.stringify(race));
    }, [race]);

    useEffect(() => {
        localStorage.setItem('selected-race', selected);
    }, [selected]);

    const handleChange = (prop) => (event) => {
        setSelected(event.target.value)

        let raceCache = races.find(raceC => raceC['id'] === event.target.value);

        if (raceCache) {
            setRace(raceCache)
            return
        }

        async function startFetching() {
            const response = await (await getRaceDetails(prop, event.target.value)).json();
            response.id = event.target.value
            setRaces(oldRaces => [...oldRaces, response]);
            setRace(response)
        }
        startFetching();
    }

    return (
        <>
            <div className='relative w-full max-w-3xl'>
                <div onClick={() => { stateChanger("pers") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 left-0'>&larr;</div>
                <div onClick={() => { stateChanger("class") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 right-0'>&rarr;</div>
            </div>
            <label className="block text-gray-200 text-xl font-bold" htmlFor="races">
                        Character's race:
                    </label>
            <div className="inline-block relative max-w-3xl">
                <select onChange={handleChange('races')} name="races" defaultValue={selected} id="races" className='max-w-[250px] truncate text-gray-950 hover:bg-gray-300 cursor-pointer font-semibold block appearance-none w-full bg-gray-50 px-4 py-2 pr-8 rounded-md drop-shadow-md focus:outline-none focus:shadow-outline'>
                    <RaceOptions />
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
            {race.lore && <div className='flex flex-col max-w-3xl bg-card text-text-color drop-shadow-md relative rounded-lg px-3 pt-3 pb-5'>
                <p className='font-bold text-lg'>About:</p>
                <div className={`${descCol ? "line-clamp-3 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-900" : "line-clamp-none"} indent-8`}>{race.lore.split("<br />").map((str, index) => <p key={index}>{str}</p>)}</div>
                <div onClick={() => setDescCol(!descCol)} className='cursor-pointer absolute bottom-3 left-1/2 font-bold transform -translate-x-1/2'>{descCol ? "Read More" : "Show Less"}</div>   
            </div>}
            {race.size &&
                    <div className='flex-auto bg-card drop-shadow-md text-text-color rounded-lg px-3 py-3 max-w-3xl'>
                        <p className='font-bold text-lg'>Size: <span className='font-normal text-base'>{race.size}</span></p>
                        <p className='font-bold text-lg'>Speed: <span className='font-normal text-base'>{race.speed}</span></p>
                        <p className='font-bold text-lg'>Age: <span className='font-normal text-base'>{race.age}</span></p>
                        <p className='font-bold text-lg'>Languages: <span className='font-normal text-base'>{race.languages.join(", ")}</span></p>
                    </div>}
            <div className='w-full gap-2 text-text-color flex-wrap flex flex-row max-w-3xl'>
                {race.ability_score &&
                    <div className='flex-auto bg-card drop-shadow-md rounded-lg px-3 py-3'>
                        <p className='font-bold text-lg'>Ability scores bonuses:</p>
                        {Object.entries(race.ability_score).map(([key, value]) => {
                            return (<li key={key}><span className='font-normal'>{key}: +</span>{value}</li>)
                        })}
                    </div>}
                {race.proficiencies &&
                    <div className='flex-auto bg-card drop-shadow-md rounded-lg px-3 py-3'>
                        <p className='font-bold text-lg'>Proficiencies:</p>
                        {Object.entries(race.proficiencies).map(([key, value]) => {
                            return (<li key={key}>{key}</li>)
                        })}
                    </div>}
            </div>      
            {race.inate_abilities && <div className='flex flex-col max-w-3xl bg-card text-text-color drop-shadow-md rounded-lg px-3 py-3'>
                <p className='font-bold text-lg'>Inate Abilities:</p>
                {Object.entries(race.inate_abilities).map(([key, value]) => {
                    return (<li key={key}><span className='font-semibold'>{key}: </span>{value}</li>)
                })}
            </div>}
        </>
    )
}