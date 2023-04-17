import styles from './SideBar.module.scss'
import Search from './search/Search'

const SideBar:React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search/>
    </div>
  )
}
export default SideBar