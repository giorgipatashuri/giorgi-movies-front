import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})


const MainProvider:React.FC = () => {
  return (
    <QueryClientProvider client={queryClient} >

    </QueryClientProvider>
  )
}
export default MainProvider