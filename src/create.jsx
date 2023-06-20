import React, { useEffect, useState } from 'react';
import Title from './components/title';
import Logout from "./components/logout";
import RaceSel from './components/raceStage';
import CharList from './components/charList';
import ClassSel from './components/classStage';


export default function Create() {
    const [stage, setStage] = useState("race");

    return (
        <>
            <div id='header' className='flex justify-center'>
                <div className='w-full max-w-3xl flex justify-between items-center pt-3 px-3'>
                    <Title />
                    <div className='flex flex-row gap-2'><CharList /><Logout /></div>

                </div>
            </div>
            <div id='char-content' className="flex flex-col items-center gap-2 my-4 mx-3">
                {stage === "race" && <RaceSel stateChanger={setStage}/>}
                {stage === "class" && <ClassSel stateChanger={setStage}/>}
            </div>
        </>
    )
}