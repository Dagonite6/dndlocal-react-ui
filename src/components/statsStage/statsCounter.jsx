function StatsCounter({id, stat, statBonus, setStat}) {
    return (
        <div className='w-20 bg-card border-1 flex flex-col aspect-square items-center justify-center relative rounded-xl border-btn'>
            <p className='text-center font-semibold top-0 absolute text-xs pt-1'>{id}</p>
            <div onClick={() => { if (stat > 8) { setStat(prev => prev - 1) } }} className='bg-btn select-none w-8 aspect-square cursor-pointer border-2 border-btn-hover text-center hover:bg-btn-hover rounded-full text-gray-50 font-bold absolute -left-4'>-</div>
            <div className='text-center font-bold text-3xl p-1'>{stat}</div>
            <div onClick={() => { if (stat < 20) { setStat(prev => prev + 1) } }} className='bg-btn select-none w-8 aspect-square cursor-pointer border-2 border-btn-hover text-center hover:bg-btn-hover rounded-full text-gray-50 font-bold absolute -right-4'>+</div>
            <div className='text-center w-12 -bottom-3 bg-btn text-gray-50 text-lg absolute border-btn rounded-xl'>{statBonus > 0 && "+"}{statBonus}</div>
        </div>
    )
}

export default StatsCounter