import React, { useEffect, useState } from 'react';

async function getRaces() {
    return fetch('http://127.0.0.1:8000/search/races/', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${localStorage.getItem("access_token")}`
        }
    })
        .then(data => data.json())
}

export default function RaceSel() {
    const [races, setRaces] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function startFetching() {
            const response = await getRaces()
            console.log(response)
            setRaces(response)
        }
        startFetching();
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <select name="races" id="races" className=''>
            {races.map((race) => {
                return (
                    <option className="" key={race.id} value={race.id}>
                        {race.en_name}
                    </option>
                )
            })}
        </select>
    )
}