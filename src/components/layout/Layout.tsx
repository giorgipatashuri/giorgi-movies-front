import styles from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import SideBar from './sidebar/SideBar'


interface LayoutProps{
  children:React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Navigation/>
      <div className={styles.center}>
        {children}
      </div>
      <SideBar/>
    </div>
  )
}
export default Layout