import style from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'

export function Menu(){
    return (
        <main>
            <nav className={style.nav}>
                <Logo/>
                
            </nav>
        </main>
    )
}