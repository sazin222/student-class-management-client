import { useQuery } from '@tanstack/react-query';
import about from '../../../assets/image/training-study-knowledge-e-learning-concept.jpg'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useClasses from '../../../hooks/useClasses';
import useEnroll from '../../../hooks/useEnroll';

const AboutUS = () => {
    const AxiosPublic = useAxiosPublic()
    const [classes] = useClasses()
    const [enroll]= useEnroll()
     
    const {data: user=[], }= useQuery({
        queryKey:['user'],
        queryFn: async ()=>{
          const res = await AxiosPublic.get('/users')
          return res.data
        }
    })
   
    return (
        <div className=' my-5 lg:my-20'>

        <div className="text-center my-4">
                <h1 className="text-3xl mt-7 font-bold">ABOUT<span 
              className="text-green-500"> US</span></h1>
               <h1 className="text-center mt-3 mx-auto w-20 border-2 border-green-600"></h1>
              </div>
  
   <div className="max-w-[85rem] my-10 mx-auto  px-6 sm:px-6 lg:px-6">
   
    <div className="grid lg:grid-cols-9 lg:gap-x-11 xl:gap-x-12 lg:items-center ">
      <div className="lg:col-span-4"> 

        <div className='flex  '>
           <div className='bg-yellow-100  h-40 w-44 p-8 '>
           <h1 className='flex justify-center font-bold'>Total users</h1>
            <span className='flex text-3xl mt-3 justify-center items-center'>{user?.length}</span>
           </div>
           <div className='bg-gray-100 h-40 w-44 p-8'>
           <h1 className='flex justify-center font-bold'>Total classes</h1>
            <span className='flex text-3xl mt-3 justify-center items-center'>{classes?.length}</span>
           </div>
          
        </div> 
        <div className='bg-green-100 h-40 w-44 p-8'>
        <h1 className='flex justify-center font-bold'>Total enroll</h1>
            <span className='flex text-3xl mt-3 justify-center items-center'>{enroll?.length}</span>
        </div>

        
        
        
      </div>
     
      <div className="lg:col-span-5 mt-10  lg:mt-0">
        <img className="w-full rounded-xl" src={about} alt="Image Description"/>
      </div>
    </div>
   
  </div>
  
          </div>
    );
};

export default AboutUS;