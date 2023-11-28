import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ClassDetails = () => {

    const {id} =useParams()
    console.log(id);
   const axiosSecure = useAxiosSecure()
  
   const {data: singleData=[],}= useQuery({
    queryKey:['singleData'],
    queryFn: async ()=>{
        const res= await  axiosSecure.get(`/class/${id}`)
      return res.data
    }
})
    
         
    return (
        <div>
            <div
        className="flex my-5 mx-auto w-3/5 h-[60%] px-3 flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
     <div className="relative rounded-t-xl overflow-hidden">
        <img
         className="w-full h-[300px] mx-auto top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
        src={singleData?.image}
            alt="Image Description"
          />
    </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {singleData?.title}
          </h3>

          <div className="flex-shrink-0 group block my-3">
            <div className="flex items-center">
              <div className="">
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Teacher Name: {singleData?.name}
                </h3>
              </div>
            </div>
          </div>

          <div>
            <p>
              {" "}
              <span className="font-semibold mr-1">Price:</span>
              {singleData?.price}
            </p>
          </div>

          <p className="mt-1 text-gray-800 dark:text-gray-400">
            {singleData?.description}
          </p>
        </div>

        <div className="flex gap-3 justify-center">

        <Link
            to={`/pay/amount/${singleData?._id}`}
          >
            <button
              type="button"
              className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-red-400 border border-transparent font-semibold text-white hover:text-white hover:bg-red-200 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Pay
            </button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default ClassDetails;