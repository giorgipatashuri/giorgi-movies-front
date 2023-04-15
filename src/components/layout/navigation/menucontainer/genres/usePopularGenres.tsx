import { useQuery } from "react-query"
import { GenreService } from "../../../../../services/genre.service"
import { IGenre } from "../../../../../shared/types/movies.types"
import { IMenuItem } from "../menu.interface"

export const usePopularGenres=()=>{
  const queryData = useQuery('popular genre menu',()=>GenreService.getPopularGenres(),{
    select: ({data})=>data.map(genre=> ({
      icon:genre.icon,
      link:genre.slug,
      title:genre.name
    } as IMenuItem)).splice(0,4),
    onError(error){
      //error
    }
  })
  return queryData
}