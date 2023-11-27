/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ClassCard = ({item,}) => {
    return (
        <div>
       
    <div className="flex h-[90%] px-3 flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
  <div className="relative rounded-t-xl overflow-hidden">
    <img className="w-full h-full mx-auto top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={item?.image} alt="Image Description"/>
  </div>
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {item?.title}
    </h3>
   
    <div className="flex-shrink-0 group block my-3">
  <div className="flex items-center">
    <div className="">
      <h3 className="font-semibold text-gray-800 dark:text-white">Teacher Name: {item?.name}</h3>
      <h3 className="font-semibold text-gray-800 dark:text-white"> Teacher Email:{item?.email}</h3>
    </div>
  </div>
</div>
   
   <div>
   <p> <span className="font-semibold mr-1">Price:
    </span>

    {item?.price}</p>
   <p> <span className="font-semibold mr-1">Status:
    </span>

    {item?.status}</p>

   

   </div>

    <p className="mt-1 text-gray-800 dark:text-gray-400">
      {item?.description}
    </p>
  </div>
 
  <div className="flex gap-3 justify-center">
  <button type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
       See Details
       </button>
  <Link to={`/dashboard/updateDetails/${item?._id}`}>
  <button type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
       Update
       </button>
  </Link>
  <button type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-red-400 border border-transparent font-semibold text-white hover:text-white hover:bg-red-200 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
       Delete
       </button>
  </div>
    </div>

       </div>
    );
};

export default ClassCard;