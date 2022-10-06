import filters from './filters.json'
import style from './FIlters.module.scss'
import React from 'react'
import classNames from 'classnames'

type Ichoice = typeof filters[0]
interface Props {
    filter: number | null
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export function Filters({filter, setFilter}:Props){
    
    function selectFilter(choice:Ichoice){
        if (filter === choice.id) return setFilter(null)
        return setFilter(choice.id)

    }
    return <div className={style.filters}>
        {filters.map(choice=>(
            <button 
                className={classNames({
                    [style.filters__filter]: true,
                    [style['filters__filter--active']]: filter === choice.id 
                })}
                key={choice.id} 
                onClick={()=> selectFilter(choice)}
            >
                {choice.label}
            </button>
        ))}
    </div>
}