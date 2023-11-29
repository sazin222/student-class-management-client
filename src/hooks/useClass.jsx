import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const useClass = () => {
    const { user,} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: SingleClass=[], isLoading } = useQuery({
      queryKey:['Single'],
      queryFn: async () =>{
       const res = await axiosSecure.get(`/single/class/${user?.email}`)
       return res.data
      } ,
    
    })
    return [SingleClass, isLoading]
    
  }


export default useClass;