import React, { useEffect, useState } from 'react';
import Title from './components/title';
import Logout from "./components/ui_buttons/logout";
import RaceStage from './components/raceStage/raceStage';
import CharList from './components/ui_buttons/charList';
import ClassStage from './components/classStage/classStage';
import StageSelect from './components/stageSelector';
import PersStage from './components/persStage/persStage';
import BgStage from './components/bgStage/bgStage';
import StatsStage from './components/statsStage/statsStage';


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
            <StageSelect curStage={stage} stateChanger={setStage} />
            <div id='char-content' className="w-full flex justify-center">
                <div className='flex w-full max-w-3xl flex-col items-center gap-2 mx-2'>
                    {stage === "pers" && <PersStage curName={name} nameChanger={setName} stateChanger={setStage} />}
                    {stage === "race" && <RaceStage curName={name} stateChanger={setStage} />}
                    {stage === "class" && <ClassStage curName={name} stateChanger={setStage} />}
                    {stage === "back" && <BgStage curName={name} stateChanger={setStage} />}
                    {stage === "stats" && <StatsStage curName={name} stateChanger={setStage} />}
                </div>
            </div>
        </>
    )
}