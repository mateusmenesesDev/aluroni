import style from './Order.module.scss'
import options from './options.json'


export function Order(){
    
    return (
        <button className={style.order}>
            <span>Ordenar Por</span>
            <div className={style.order__options}>
                {options.map(option=>(
                            <div className={style.order__option} key={option.value}>
                                {option.nome}
                            </div>
                        )
                    )
                }
            </div>
        </button>
    )
}