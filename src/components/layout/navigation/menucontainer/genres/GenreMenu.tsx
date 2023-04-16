import Menu from "../Menu"
import { usePopularGenres } from "./usePopularGenres"

const GenreMenu:React.FC = () => {
  const {isLoading,data}=usePopularGenres()
  return isLoading ? <div>Loading...</div> : <Menu menu={{title:"Popular Genre",items:data || []}} />
}
export default GenreMenu