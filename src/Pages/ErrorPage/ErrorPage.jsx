import { Link } from "react-router-dom";
import errorPic from '../../assets/image/errorpage.png.jpg'

const ErrorPage = () => {
    return (
        <div className="text-center mt-7 space-y-3">
       
      <img className=' w-48 mx-auto' src={errorPic} alt="" />
     <p className='font-bold'>404- PAGE NOT FOUND</p>
     <p>The page yor are looking for might have been removed had its name changed or temporary unavailable</p>
   <Link to={"/"}> 
   <button className="bnt btn-primary my-3 bg-green-600 text-white p-2 rounded-lg">Go to home page</button>
   </Link>
 </div>
    );
};

export default ErrorPage;