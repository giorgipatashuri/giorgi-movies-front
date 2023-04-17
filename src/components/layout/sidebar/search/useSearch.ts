import React, { ChangeEvent } from "react"
import { useDebounce } from "../../../../hooks/useDebounce"
import { useQuery } from "react-query"
import { MovieService } from "../../../../services/movie.service"

export const useSearch=()=>{
  const [searchTerm,setSearchTerm]=React.useState('')
  const debouncedSearch = useDebounce(searchTerm,500)
  const { data,isSuccess }=useQuery(['search movie list',debouncedSearch],()=>MovieService.getAll(debouncedSearch),{
    select:({data})=>data,
    enabled:!!debouncedSearch
  })
  const handleSearch = (e:ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(e.target.value)
  }
  return {isSuccess,handleSearch,data,searchTerm}
}