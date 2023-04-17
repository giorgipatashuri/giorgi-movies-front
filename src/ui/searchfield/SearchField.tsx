import MaterialIcon from '../../utils/MaterialIcon'
import styles from './SearchField.module.scss'


interface SearchFieldProps{
  searchTerm:string,
  handleSearch:(e:React.ChangeEvent<HTMLInputElement>)=>void,
}



const SearchField:React.FC<SearchFieldProps> = ({searchTerm,handleSearch}) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name='MdSearch' />
      <input placeholder='Search' type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  )
}
export default SearchField