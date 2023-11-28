import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useEnroll = () => {
   
    const axiosSecure = useAxiosSecure()
    const {data: enroll=[], isLoading, refetch }= useQuery({
        queryKey:['enroll'],
        queryFn: async ()=>{
          const res = await axiosSecure.get('/enroll')
          return res.data
        }
    })
    return [enroll, isLoading, refetch]
    


};


export default useEnroll;