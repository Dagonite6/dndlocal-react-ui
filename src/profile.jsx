import React, { useEffect, useState } from 'react';
import Title from './components/title';

async function getChars() {
    return fetch('http://127.0.0.1:8000/character/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      }
    })
      .then(data => data.json())
  }

export default function Profile() {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function startFetching() {
            const response = await getChars()
            console.log(response)
            setChars(response.results)
        }
        startFetching();
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div className="w-full mt-[30px] max-w-md">
            <Title></Title>
            <ul className='list-none'>
                {chars.map((char) => {
                    return (
                        <li className="bg-white drop-shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" key={char.id}>
                            <p>{char.name}</p>
                            <p>Experience: {char.experience}</p>
                            <p>Race: {char.race}</p>
                            <p>Class: {char.char_class}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}