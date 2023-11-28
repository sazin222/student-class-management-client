import { Link } from 'react-router-dom';
import picture from '../../../assets/image/businessman-black-suit-holding-his-tasklist-makes-thumb-up.jpg'

const TeacherAdding = () => {
    return (
        <div className=' my-5 lg:my-20'>

      <div className="text-center my-4">
              <h1 className="text-3xl mt-7 font-bold">JOIN<span 
            className="text-green-500"> TEACHER</span></h1>
             <h1 className="text-center mt-3 mx-auto w-20 border-2 border-green-600"></h1>
            </div>

 <div className="max-w-[85rem] my-10 mx-auto  px-6 sm:px-6 lg:px-6">
 
  <div className="grid lg:grid-cols-9 lg:gap-x-11 xl:gap-x-12 lg:items-center ">
    
    <div className="lg:col-span-5 mt-10  lg:mt-0">
      <img className="w-full rounded-xl" src={picture} alt="Image Description"/>
    </div>


    <div className="lg:col-span-4">
      <div className='flex '>
      <h1 className="block text-3xl font-bold text-green-600 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Become an instructor</h1>
      </div>
      <em className="mt-3  text-gray-800 dark:text-gray-400">At Creative Study we believe that education has the power to transform lives. Be part of a community that values knowledge, fosters creativity, and supports the growth of both instructors and learners.</em>
      
      
      <div className="mt-6 lg:mt-12">
    
      <Link to={'/creativeStudy'}>
      <button type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-black hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
      Start teaching today
       </button>
      </Link>
      </div>
    </div>
  </div>
 
</div>

        </div>
    );
};

export default TeacherAdding;