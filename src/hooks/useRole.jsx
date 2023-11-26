import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"


const useRole = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()
  const { data: role=[], isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () =>{
     const res = await axiosSecure.get(`/students/${user?.email}`)
     return res.data
    } ,
    queryKey: ['role'],
  })

  return [role, isLoading]
}

export default useRole