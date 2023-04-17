import SearchField from "../../../../ui/searchfield/SearchField"
import styles from "./Search.module.scss"
import SearchList from "./searchlist/SearchList"
import { useSearch } from "./useSearch"

const Search:React.FC = () => {
  const {isSuccess,data,handleSearch,searchTerm}=useSearch()
  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch}  />
      {isSuccess && <SearchList movies={data || []}/>}
    </div>
  )
}
export default Search