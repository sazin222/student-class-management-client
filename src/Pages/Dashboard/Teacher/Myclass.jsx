
import useClasses from "../../../hooks/useClasses";
import ClassCard from "./ClassCard";

const Myclass = () => {
    const [classes] =useClasses()
    return (
        <div>
           <h1 className="font-semibold text-center mt-3 text-2xl">Your added Classes</h1>
           <div className="grid gap-3 mt-3 grid-cols-1 lg:grid-cols-3">
            {
                classes.map(item=> <ClassCard
                key={item._id}
                item={item}
                >

                </ClassCard> )
            }
           </div>
        </div>
    );
};

export default Myclass;