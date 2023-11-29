/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyEnrollDetails = ({item}) => {
    return (
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
              </div>
            </div>
          </div>

        </div>

        <div className="flex gap-3 justify-center">
         <Link to={`/dashboard/myEnroll-class/${item?._id}`}>
         <button
            type="button"
            className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-400 border border-transparent font-semibold text-white hover:text-white hover:bg-green-300 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
           Continue
          </button>
         </Link>
        </div>
         </div>
    );
};

export default MyEnrollDetails;