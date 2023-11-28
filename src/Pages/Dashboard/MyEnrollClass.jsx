import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyEnrollDetails from "./MyEnrollDetails";

const MyEnrollClass = () => {
  const {user}= useAuth()
  const axiosSecure = useAxiosSecure();
  const { data: enrollClass=[], } = useQuery({
    queryKey: [" enrollClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollClass/${user?.email}`);
      return res.data;
    },
  });

  console.log(enrollClass);

    return (
        <div>
            <h1 className="text-center font-semibold text-2xl mt-3"> Your total enroll class : {enrollClass?.length} </h1>

        <div className="grid grid-cols-1 mt-5 gap-3 lg:grid-cols-3">
            {
              enrollClass.map(item=> <MyEnrollDetails
               key={item._id}
               item={item}
              >

              </MyEnrollDetails>)
            }
        </div>

        </div>
    );
};

export default MyEnrollClass;