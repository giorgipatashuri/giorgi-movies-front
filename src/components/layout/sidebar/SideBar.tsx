import styles from './SideBar.module.scss'
import MovieContainer from './moviecontainer/MovieContainer'
import Search from './search/Search'

const SideBar:React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search/>
      <MovieContainer/>
    </div>
  )
}
export default SideBar