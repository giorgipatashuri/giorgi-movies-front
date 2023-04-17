import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query'
import Home from '../src/components/screens/home/Home'



const HomePage: NextPage = () => {
  return (
      <Home/>
  )
}

export default HomePage
