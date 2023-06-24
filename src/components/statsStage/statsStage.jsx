import React, { useEffect, useState } from 'react';
import StatsCounter from './statsCounter';


async function getStatsRecomendation(category, id) {
    // const url = `http://127.0.0.1:8000/search/${category}/${id}/`;
    // return fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Token ${localStorage.getItem("access_token")}`
    //     }
    // })
    return
}

export default function StatsStage({ curName, stateChanger }) {

    if (localStorage.getItem('stats')){
        var stats = JSON.parse(localStorage.getItem('stats'))
    }
    
    const [descCol, setDescCol] = useState(false)
    const [str, setStr] = useState(stats ? stats.strC : 10)
    const [dex, setDex] = useState(stats ? stats.dexC : 10)
    const [con, setCon] = useState(stats ? stats.conC : 10)
    const [int, setInt] = useState(stats ? stats.intC : 10)
    const [wis, setWis] = useState(stats ? stats.wisC : 10)
    const [chr, setChr] = useState(stats ? stats.chrC : 10)

    let strBonus = Math.floor((str - 10)/2)
    let dexBonus = Math.floor((dex - 10)/2)
    let conBonus = Math.floor((con - 10)/2)
    let intBonus = Math.floor((int - 10)/2)
    let wisBonus = Math.floor((wis - 10)/2)
    let chrBonus = Math.floor((chr - 10)/2)

    useEffect(() => {
        localStorage.setItem('stats', JSON.stringify({ strC: str, dexC: dex, conC: con, intC: int, wisC: wis, chrC: chr }));
    }, [str, dex, con, int, wis, chr]);

    
    if (!curName) {
        return (
            <>
                <div className='relative w-full max-w-3xl'>
                    <div onClick={() => { stateChanger("race") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 left-0'>&larr;</div>
                    <div onClick={() => { stateChanger("pers") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-1.5 right-0'>&rarr;</div>
                </div>
                <div className="text-gray-200 text-xl font-bold">
                    Please select race and class first
                </div>
            </>
        )
    }

    return (
        <>
            <div className='relative w-full max-w-3xl'>
                <div onClick={() => { stateChanger("race") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-0 left-0'>&larr;</div>
                <div onClick={() => { stateChanger("pers") }} className='cursor-pointer absolute text-gray-50 font-extrabold text-4xl top-0 right-0'>&rarr;</div>
            </div>
            <div className="text-gray-200 text-xl font-bold">
                {curName}'s stats:
            </div>
            <div className='flex flex-col max-w-3xl bg-card text-text-color drop-shadow-md relative rounded-lg px-3 pt-3 pb-5'>
                <p className='font-bold text-lg'>Choosing stats:</p>
                <div className={`${descCol ? "line-clamp-1 text-transparent bg-clip-text bg-gradient-to-b from-gray-900" : "line-clamp-none"} text-justify indent-8`}><p>Based on your class selection of %CLASS% recomended stat distribution is to put your highest ability score in <span className='font-bold'>Strength</span>, followed by <span className='font-bold'>Constitution</span>. For new players it is advised to use the <span className='font-bold'>15, 14, 13, 12, 10, 8</span> stats distribution.</p></div>
                <div onClick={() => setDescCol(!descCol)} className='cursor-pointer absolute bottom-3 left-1/2 font-bold transform -translate-x-1/2'>{descCol ? "Read More" : "Show Less"}</div>   
            </div>
            <div className='flex w-full max-w-3xl mt-1'>
                <div className='flex flex-row gap-x-10 gap-y-4 w-full items-center flex-wrap justify-center mx-4 max-h-80'>
                    <StatsCounter id={"Strength"} stat={str} statBonus={strBonus} setStat={setStr} />
                    <StatsCounter id={"Dexterity"} stat={dex} statBonus={dexBonus} setStat={setDex} />
                    <StatsCounter id={"Constitution"} stat={con} statBonus={conBonus} setStat={setCon} />
                    <StatsCounter id={"Intelligence"} stat={int} statBonus={intBonus} setStat={setInt} />
                    <StatsCounter id={"Wisdom"} stat={wis} statBonus={wisBonus} setStat={setWis} />
                    <StatsCounter id={"Charisma"} stat={chr} statBonus={chrBonus} setStat={setChr} />        
                </div>
            </div>

        </>
    )
}