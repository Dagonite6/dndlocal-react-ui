let stages = ["Race", "Class", "Background", "Stats", "Ability Scores", "Proficiencies", "Spells", "Equipment"]
// TODO: make an iterator to render the stage selector

function StageSelect({curStage, stateChanger }) {
    
    return (
        <nav id='stage-select' className='flex justify-center mx-3 mt-2'>
            <div className="w-full max-w-3xl">
                <ul className='text-gray-950 font-semibold w-full max-w-3xl flex gap-1 flex-wrap flex-row justify-between text-gray-50 items-center'>
                <li onClick={() => { if(curStage !== "pers"){stateChanger("pers")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "pers" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Personality</li>
                <li onClick={() => { if(curStage !== "race"){stateChanger("race")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "race" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Race</li>
                <li onClick={() => { if(curStage !== "class"){stateChanger("class")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "class" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Class</li>
                <li onClick={() => { if(curStage !== "back"){stateChanger("back")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "back" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Background</li>
                <li onClick={() => { if(curStage !== "stats"){stateChanger("stats") }}} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "stats" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Stats</li>
                <li onClick={() => { if(curStage !== "abscore"){stateChanger("abscore") }}} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "abscore" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Ability Scores</li>
                <li onClick={() => { if(curStage !== "prof"){stateChanger("prof")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "prof" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Proficiencies</li>
                <li onClick={() => { if(curStage !== "spells"){stateChanger("spells")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "spells" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Spells</li>
                <li onClick={() => { if(curStage !== "equip"){stateChanger("equip")} }} className={`cursor-pointer text-center flex-auto rounded-md bg-gradient-to-b ${curStage === "equip" ? 'bg-orange-600 text-gray-50' : 'bg-card'} p-1`}>Equipment</li>
                </ul>
            </div>
        </nav>)
}

export default StageSelect