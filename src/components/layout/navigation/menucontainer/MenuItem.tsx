import { useRouter } from "next/router"
import { IMenuItem } from "./menu.interface"
import styles from './Menu.module.scss'
import Link from "next/link"
import MaterialIcon from "../../../../utils/MaterialIcon"
const MenuItem:React.FC<{menu:IMenuItem}> = ({menu}) => {
  const {asPath}=useRouter()
  return (
    <li className={asPath==menu.link ? styles.active : ""} >
      <Link href={menu.link} legacyBehavior >
        <a>
          <MaterialIcon name={menu.icon}/>
          <span>{menu.title}</span>
        </a>
      </Link>
    </li>
  )
}
export default MenuItem