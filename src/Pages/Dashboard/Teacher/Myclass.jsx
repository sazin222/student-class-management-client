import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ClassCard from "./ClassCard";

const Myclass = () => {
    const axiosSecure = useAxiosSecure()
    const {data: classes=[], refetch }= useQuery({
        queryKey:['classes'],
        queryFn: async ()=>{
          const res = await axiosSecure.get('/classes')
          return res.data
        }
    })
    console.log(classes);
    return (
        <div>
           <h1 className="font-semibold text-center mt-3 text-2xl">Your added Classes</h1>
           <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                classes.map(item=> <ClassCard
                key={item._id}
                item={item}
                refetch={refetch}
                >

                </ClassCard> )
            }
           </div>
        </div>
    );
};

export default Myclass;