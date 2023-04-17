import { axsiosClassic } from "../api/interceptors"
import { getGenresUrl, getMoviesUrl } from "../config/api.config"
import { IGenre, IMovie } from "../shared/types/movies.types"

export const MovieService={
  async getAll(searchTerm?:string){
    return axsiosClassic.get<IMovie[]>(getMoviesUrl(''),{
      params:searchTerm ? {
        searchTerm
      } : {}
    })
  }
}