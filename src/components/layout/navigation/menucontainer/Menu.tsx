import MenuItem from "./MenuItem"
import { IMenu,IMenuItem } from "./menu.interface"
import styles from './Menu.module.scss'
const Menu:React.FC<{menu:IMenu}> = ({menu:{items,title}}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading} >{title}</div>
      <ul className={styles.ul}>
        {items.map((item:IMenuItem)=>(
          <MenuItem menu={item} key={item.link} />
        ))}
      </ul>
    </div>
  )
}
export default Menu