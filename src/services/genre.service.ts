import { axsiosClassic } from "../api/interceptors"
import { getGenresUrl } from "../config/api.config"
import { IGenre } from "../shared/types/movies.types"

export const GenreService={
  async getPopularGenres(){
    return axsiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
  }
}