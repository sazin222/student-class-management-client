/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleClass = ({item}) => {
    return (
        <div>
        { item?.status === 'approved' &&(
             <div
             className="flex h-[90%] px-3 flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
             href="#"
           >
             <div className="relative rounded-t-xl overflow-hidden">
               <img
                 className="w-full h-[90%] mx-auto top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                 src={item?.image}
                 alt="Image Description"
               />
             </div>
             <div className="p-4 md:p-5">
               <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                 {item?.title}
               </h3>
     
               <div className="flex-shrink-0 group block my-3">
                 <div className="flex items-center">
                   <div className="">
                     <h3 className="font-semibold text-gray-800 dark:text-white">
                       Teacher Name: {item?.name}
                     </h3>
                     <h3 className="font-semibold text-gray-800 dark:text-white">
                       {" "}
                       Teacher Email:{item?.email}
                     </h3>
                   </div>
                 </div>
               </div>
     
               <div>
                 <p>
                   <span className="font-semibold mr-1">Price:</span>
                   {item?.price}
                 </p>
               </div>
     
               <p className="mt-1 text-gray-800 dark:text-gray-400">
                 {item?.description}
               </p>
             </div>
     
             <div className="flex gap-3 justify-center">
              <Link to={`/class/payment/${item?._id}`}>
             
         <button type="button" className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
           Enroll
         </button>
              </Link>
             </div>
              </div>
        )
         
        
        } 
        </div>
    );
};

export default SingleClass;