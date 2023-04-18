import Link from "next/link"
import { IMovie } from "../../../../shared/types/movies.types"
import MovieItem from "./MovieItem"

import styles from './MovieList.module.scss'
import { useRouter } from "next/router"
interface MovieListProps{
  link:string,
  title:string,
  movies:IMovie[]
}


const MovieList:React.FC<MovieListProps> = ({link,title,movies}) => {
  
  return (
    <div className={styles.list}>
      <div className={styles.heading}>
        {title}
      </div>
      {movies.map((movie)=>(
        <MovieItem movie={movie} key={movie._id} />
      ))}
      <Link href={link} legacyBehavior>
        <a className={styles.button}> See more </a>
      </Link>
    </div>
  )
}
export default MovieList