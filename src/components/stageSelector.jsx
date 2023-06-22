let stages = ["Race", "Class", "Background", "Stats", "Ability Scores", "Proficiencies", "Spells", "Equipment"]
// TODO: make an iterator to render the stage selector

function StageSelect({curStage, stateChanger }) {
    
    return (
        <nav id='stage-select' className='flex justify-center mx-3 mt-2'>
            <div className="w-full max-w-3xl">
                <ul className='text-gray-950 font-semibold w-full max-w-3xl flex gap-1 flex-wrap flex-row justify-between text-gray-50 items-center'>
                <li onClick={() => { if(curStage !== "pers"){stateChanger("pers")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "pers" ? 'from-slate-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Personality</li>
                <li onClick={() => { if(curStage !== "race"){stateChanger("race")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "race" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Race</li>
                <li onClick={() => { if(curStage !== "class"){stateChanger("class")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "class" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Class</li>
                <li onClick={() => { if(curStage !== "back"){stateChanger("back")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "back" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Background</li>
                <li onClick={() => { if(curStage !== "stats"){stateChanger("stats") }}} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "stats" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Stats</li>
                <li onClick={() => { if(curStage !== "abscore"){stateChanger("abscore") }}} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "abscore" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Ability Scores</li>
                <li onClick={() => { if(curStage !== "prof"){stateChanger("prof")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "prof" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Proficiencies</li>
                <li onClick={() => { if(curStage !== "spells"){stateChanger("spells")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "spells" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Spells</li>
                <li onClick={() => { if(curStage !== "equip"){stateChanger("equip")} }} className={`cursor-pointer text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "equip" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Equipment</li>
                </ul>
            </div>
        </nav>)
}

export default StageSelect