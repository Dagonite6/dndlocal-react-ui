import React, { useEffect, useState } from 'react';
import Title from './components/title';
import Logout from "./components/logout";
import RaceSel from './components/raceStage';


export default function Create() {
    const [stage, setStage] = useState("race");

    return (
        <>
            <div className='w-full flex justify-around items-center pt-3 px-3'>
                <Title />
                {localStorage.getItem("access_token") && <Logout />}
            </div>
            <div className="flex flex-col items-center my-4"></div>
            {stage === "race" && <RaceSel/>}
        </>
    )
}