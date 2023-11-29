
import { Helmet } from "react-helmet-async";
// import useClasses from "../../../hooks/useClasses";
import ClassCard from "./ClassCard";
import useClass from "../../../hooks/useClass";

const Myclass = () => {
    // const [classes] =useClasses()
    const [SingleClass] = useClass()
    console.log(SingleClass);
    return (
        <div>
            <Helmet>
        <title>Creative Study | My Class</title>
      </Helmet>
           <h1 className="font-semibold text-center mt-3 text-2xl">Your added Classes</h1>
          { SingleClass?.length > 0 ? <div className="grid gap-3 mt-3 grid-cols-1 lg:grid-cols-3">
            {
                SingleClass.map(item=> <ClassCard
                key={item._id}
                item={item}
                >

                </ClassCard> )
            }
           </div>: <div>
             <h1 className="mt-8 text-2xl text-red-400 text-center">There is no your added class</h1>
            </div>}
        </div>
    );
};

export default Myclass;