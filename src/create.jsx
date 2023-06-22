import React, { useEffect, useState } from 'react';
import Title from './components/title';
import Logout from "./components/ui_buttons/logout";
import RaceStage from './components/raceStage/raceStage';
import CharList from './components/ui_buttons/charList';
import ClassStage from './components/classStage/classStage';
import StageSelect from './components/stageSelector';
import PersStage from './components/persStage/persStage';
import BgStage from './components/bgStage/bgStage';


export default function Create() {
    const [stage, setStage] = useState(localStorage.getItem('stage') ?? "pers");
    const [name, setName] = useState(localStorage.getItem('new-char-name') ?? "name");


    useEffect(() => {
        localStorage.setItem('new-char-name', name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem('stage', stage);
    }, [stage]);

    return (
        <>
            <div id='header' className='flex justify-center'>
                <div className='w-full max-w-3xl flex justify-between items-center pt-3 px-3'>
                    <Title />
                    <div className='flex flex-row gap-2'><CharList /><Logout /></div>
                </div>
            </div>
            <StageSelect curStage={stage} stateChanger={setStage}/>
            <div id='char-content' className="flex flex-col items-center gap-2 my-2 mx-3">
                {stage === "pers" && <PersStage curName={name} nameChanger={setName} stateChanger={setStage} />}
                {stage === "race" && <RaceStage stateChanger={setStage} />}
                {stage === "class" && <ClassStage stateChanger={setStage} />}
                {stage === "back" && <BgStage stateChanger={setStage} />}
            </div>
        </>
    )
}