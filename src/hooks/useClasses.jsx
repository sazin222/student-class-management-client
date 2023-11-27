import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
    const axiosSecure = useAxiosSecure()
    const {data: classes=[], isLoading, refetch }= useQuery({
        queryKey:['classes'],
        queryFn: async ()=>{
          const res = await axiosSecure.get('/classes')
          return res.data
        }
    })
    return [classes, isLoading, refetch]
};

export default useClasses;