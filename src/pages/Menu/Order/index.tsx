import style from './Order.module.scss'
import options from './options.json'
import React, { useState } from 'react'
import classNames from 'classnames'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

interface Props{
    order: string,
    setOrder:React.Dispatch<React.SetStateAction<string>>
}
export function Order({order, setOrder}:Props){
    const[open, setOpen] = useState(false)
    const nameOrder = order && options.find(option=> option.value === order)?.nome
    return (
        <button 
            className={classNames(
                {
                    [style.order]: true,
                    [style['order--active']]: order !== ''
                }
            )} 
            onClick={()=> setOpen(!open)}
            onBlur={()=>setOpen(false)}
        > 
            <span>{nameOrder || 'Ordenar Por'}</span>
            {open ? < MdKeyboardArrowUp size={20}/>: <MdKeyboardArrowDown size={20}/>}
            <div className={classNames(
                {
                    [style.order__options]: true,
                    [style['order__options--active']]: open,
                }
            )}>
                {options.map(option=>(
                            <div 
                                className={style.order__option} 
                                key={option.value}
                                onClick={()=>setOrder(option.value)}
                            >
                                {option.nome}
                            </div>
                        )
                    )
                }
            </div>
        </button>
    )
}