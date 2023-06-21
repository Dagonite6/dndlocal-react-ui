function StageSelect({curStage, stageChanger }) {
    return (
        <nav id='stage-select' className='flex justify-center mx-3 mt-2'>
            <div className="w-full max-w-3xl">
                <ul className='text-gray-950 font-semibold w-full max-w-3xl flex gap-1 flex-wrap flex-row justify-between text-gray-50 items-center'>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "pers" ? 'from-slate-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Personality</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "race" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Race</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "class" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Class</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "back" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Background</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "stats" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Stats</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "abscore" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Ability Scores</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "prof" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Proficiencies</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "spells" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Spells</li>
                <li className={`text-center flex-auto rounded-t-md bg-gradient-to-b ${curStage === "equip" ? 'from-gray-50 via-gray-50' : 'from-gray-400 via-gray-400'} px-1 pt-1 pb-2`}>Equipment</li>
                </ul>
            </div>
        </nav>)
}

export default StageSelect