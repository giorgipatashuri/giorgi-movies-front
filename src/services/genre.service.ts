import { axsiosClassic } from "../api/interceptors"
import { getGenresUrl } from "../config/api.config"
import { IGenre } from "../shared/types/movies.types"

export const GenreService={
  async getAll(searchTerm?:string){
    return axsiosClassic.get<IGenre[]>(getGenresUrl(''),{
      params:searchTerm ? {
        searchTerm
      } : {}
    })
  }
}