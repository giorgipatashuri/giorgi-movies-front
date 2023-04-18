import { useQuery } from "react-query"
import { MovieService } from "../../../../services/movie.service"
import SkeletonLoader from "../../../../ui/SkeletonLoader"
import MovieList from "./MovieList"

const PopularMovies:React.FC = () => {

  const {isLoading,data} = useQuery('popular movies',()=>MovieService.getMostPopularMovies())


  return (
    isLoading ? (<div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>) : <MovieList title="Popular Movies" link="/trending" movies={data || []}/>
  )
}
export default PopularMovies