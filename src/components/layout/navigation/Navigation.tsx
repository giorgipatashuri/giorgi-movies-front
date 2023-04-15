import styles from './Navigation.module.scss'
import MenuContainer from './menucontainer/MenuContainer'

const Navigation:React.FC = () => {
  return (
    <div className={styles.navigation}>
      <div className=' text-2xl mb-10 font-bold text-white px-layout'>Movies</div>
      <MenuContainer/>
    </div>
  )
}
export default Navigation