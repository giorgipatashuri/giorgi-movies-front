import Link from 'next/link'
import { IMovie } from '../../../../../shared/types/movies.types'
import styles from './SearchList.module.scss'
import { getMovieUrl } from '../../../../../config/url.config'
import Image from 'next/image'

const SearchList:React.FC<{movies:IMovie[]}> = ({movies}) => {
  console.log("test")
  return (
    <div className={styles.list}>
      {movies.length ? movies.map(movie=>(
        <Link key={movie._id} href={getMovieUrl(movie.slug)} legacyBehavior >
          <a>
              <Image src={movie.poster} width={50} height={50} alt={movie.title} objectFit='cover' objectPosition='top' draggable={false} />
              <span>{movie.title}</span>
          </a>
        </Link>
      )):<div className='text-white text-center'>Movies Not Found!</div>}
    </div>
  )
}
export default SearchList