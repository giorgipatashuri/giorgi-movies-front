import Menu from "./Menu"
import GenreMenu from "./genres/GenreMenu"
import { firstMenu } from "./menu.data"
import { IMenuItem } from "./menu.interface"


const MenuContainer = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu/>
    </div>
  )
}
export default MenuContainer