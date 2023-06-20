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

export default function RaceSel({ stateChanger }) {
    const [race, setRace] = useState(JSON.parse(localStorage.getItem('race')) ?? {})
    const [selected, setSelected] = useState(localStorage.getItem('selected') ?? "0")


    useEffect(() => {
        localStorage.setItem('race', JSON.stringify(race));
    }, [race]);

    useEffect(() => {
        localStorage.setItem('selected', selected);
    }, [selected]);

    const handleChange = (prop) => (event) => {
        setSelected(event.target.value)
        async function startFetching() {
            const response = await getRaceDetails(prop, event.target.value);
            setRace(await response.json())
        }
        startFetching();
    }

    return (
        <>
            <div className='relative w-full max-w-3xl'>
                <div onClick={() => { stateChanger("class") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl right-0'>&rarr;</div>
            </div>
            <div className="inline-block relative max-w-2xl">
                <select onChange={handleChange('races')} name="races" defaultValue={selected} id="races" className='hover:bg-gray-300 cursor-pointer font-semibold block appearance-none w-full bg-gray-50 px-4 py-2 pr-8 rounded-md drop-shadow-md focus:outline-none focus:shadow-outline'>
                    <RaceOptions />
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
            <div className='w-full gap-2 flex-wrap flex flex-row mt-2 max-w-3xl'>
                {race.ability_score &&
                    <div className='flex-auto bg-white drop-shadow-md rounded-lg px-3 py-3'>
                        <p className='font-bold text-lg'>Ability scores bonuses:</p>
                        {Object.entries(race.ability_score).map(([key, value]) => {
                            return (<li key={key}><span className='font-normal'>{key}: +</span>{value}</li>)
                        })}
                    </div>}
                {race.proficiencies &&
                    <div className='flex-auto bg-white drop-shadow-md rounded-lg px-3 py-3'>
                        <p className='font-bold text-lg'>Proficiencies:</p>
                        {Object.entries(race.proficiencies).map(([key, value]) => {
                            return (<li key={key}><span className='font-normal'>{key}: +</span>{value}</li>)
                        })}
                    </div>}
                {race.size &&
                    <div className='flex-auto bg-white drop-shadow-md rounded-lg px-3 py-3'>
                        <p className='font-bold text-lg'>Size: <span className='font-normal'>{race.size}</span></p>
                        <p className='font-bold text-lg'>Speed: <span className='font-normal'>{race.speed}</span></p>
                        <p className='font-bold text-lg'>Languages: <span className='font-normal'>{race.languages.join(", ")}</span></p>
                    </div>}
            </div>
            {race.inate_abilities && <div className='flex flex-col max-w-3xl bg-white drop-shadow-md rounded-lg px-3 py-3'>
                <p className='font-bold text-lg'>Inate Abilities:</p>
                {Object.entries(race.inate_abilities).map(([key, value]) => {
                    return (<li key={key}><span className='font-semibold'>{key}: </span>{value}</li>)
                })}
            </div>}
        </>
    )
}