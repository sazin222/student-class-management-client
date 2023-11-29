import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useClasses from "../../../hooks/useClasses";
import { Link } from "react-router-dom";
const Class = () => {
  const [classes] = useClasses();
  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-3xl mt-7 font-bold">
          STUDENT FAVORITE
          <span className="text-green-500"> CLASSES</span>
        </h1>
        <h1 className="text-center mt-3 mx-auto w-20 border-2 border-green-600"></h1>
      </div>

      <Carousel className="text-center">
        {classes.map((item) => (
          <div key={item._id} className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-2 sm:px-3 lg:px-4 ">
              <div className="mt-10 relative ">
                <div
                  className="w-3/5 mx-auto
               object-cover h-96 sm:h-[550px] bg-center  bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${item?.image})` }}
                ></div>

                <div className="absolute inset-0 w-full md:w-3/5 mx-auto h-full">
                  <div
                    className="flex h-[90%] px-3 flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    href="#"
                  >
                    <div className="relative rounded-t-xl overflow-hidden">
                      <img
                        className="w-3/5 h-[90%] mx-auto top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
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
                          <div className=""></div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          Teacher Name: {item?.name}
                        </h3>
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {" "}
                          Teacher Email:{item?.email}
                        </h3>
                        <p>
                          {" "}
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
                        <button
                          type="button"
                          className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-400 border border-transparent font-semibold text-white hover:text-white hover:bg-green-300 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                          Enroll
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
                  <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
                </div>

                <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Class;
