import Menu from "./Menu"
import { firstMenu } from "./menu.data"
import { IMenuItem } from "./menu.interface"


const MenuContainer = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
    </div>
  )
}
export default MenuContainer