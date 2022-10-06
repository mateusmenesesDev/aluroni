import { Item } from './Item'
import menu from './items.json'
import style from './Items.module.scss'
export function Items(){
    return(
        <div className={style.items}>
            {menu.map(item=>(
                <Item 
                    key={item.id} 
                    {...item}
                />
            ))}
        </div>
    )
}