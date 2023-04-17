import { QueryClient, QueryClientProvider } from "react-query"


interface MainProviderProps{
  children:React.ReactNode
}


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})


const MainProvider:React.FC<MainProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  )
}
export default MainProvider