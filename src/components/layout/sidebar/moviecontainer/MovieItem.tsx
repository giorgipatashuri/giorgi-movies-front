import Link from "next/link"
import { IMovie } from "../../../../shared/types/movies.types"

// import styles from "./MovieItem.module.scss"
import styles from './MovieList.module.scss'
import { getGenreUrl, getMovieUrl } from "../../../../config/url.config"
import Image from "next/image"
import { getGenresListEach } from "../../../../utils/getGenresList"
import MaterialIcon from "../../../../utils/MaterialIcon"
import { useRouter } from "next/router"

const MovieItem:React.FC<{movie:IMovie}> = ({movie}) => {
  const {asPath} = useRouter()
  console.log("onClick",asPath)
  console.log(getMovieUrl(movie.slug))
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>

        <Image width={65} height={97} src={movie.poster} alt={movie.title} draggable={false} priority  />

      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>
            {movie.title}
          </div>
          <div className={styles.ganre}>
            {movie.genres.map((genre,idx)=>(<Link key={genre._id} href={getGenreUrl(genre.slug)} legacyBehavior>
              <a>{getGenresListEach(idx,movie.genres.length,genre.name)}</a>
            </Link>))}
          </div>
        </div>
        <div className={styles.rating}>
          <MaterialIcon name="MdStarRate" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}
export default MovieItem