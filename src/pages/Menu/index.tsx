import style from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import { Search } from './Search'
import { useState } from 'react'
import { Filters } from './Filter'

export function Menu(){
    
    const[search, setSearch] = useState('')
    const[filter, setFilter] = useState<number | null>(null)
    return (
        <main>
            <nav className={style.nav}>
                <Logo/>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={style.menu}>
                <h3 className={style.menu__title}>Cardápio</h3>
                <Search search={search} setSearch={setSearch}/>
                <div className={style.menu__filter}>
                    <Filters filter={filter} setFilter={setFilter}/>
                </div>
            </section>
        </main>
    )
}