import React from "react"
import style from './Search.module.scss'
interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Search({search, setSearch}:Props){
    return <div className={style.search}> 
        <input
            value={search}
            onChange={event => setSearch(event.target.value)}
        />
    </div>
}