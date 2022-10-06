import style from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import { Search } from './Search'
import { useState } from 'react'
import { Filters } from './Filter'
import { Order } from './Order'
import { Items } from './Items'

export function Menu(){
    
    const[search, setSearch] = useState('')
    const[filter, setFilter] = useState<number | null>(null)
    const[order, setOrder] = useState('')
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
                <div className={style.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Order order={order} setOrder={setOrder}/>
                </div>
                <Items/>
            </section>
        </main>
    )
}