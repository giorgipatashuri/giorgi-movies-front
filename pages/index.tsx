import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query'
import Home from '../src/components/screens/home/Home'

const queryClient=new QueryClient()


const HomePage: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>
  )
}

export default HomePage
