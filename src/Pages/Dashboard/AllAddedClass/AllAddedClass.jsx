import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import SingleClass from "./SingleClass";


const AllAddedClass = () => {
    const [classes] = useClasses()
    return (
    <div>
        <Helmet>
        <title>Creative Study | All Class</title>
      </Helmet>
        <h1 className="text-center text-2xl mt-3 font-semibold "> 
        All classes
        </h1>
        <div className="grid grid-cols-1 mt-3 lg:grid-cols-3 gap-3">
            {
              classes.map(item=> <SingleClass
              key={item._id}
              item={item}
              >

              </SingleClass>)
            }
        </div>
    </div>
    );
};

export default AllAddedClass;