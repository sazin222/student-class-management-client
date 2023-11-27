import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { TbFidgetSpinner } from "react-icons/tb";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddClass = () => {
    const {user,loading}= useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        reset,
        handleSubmit,
      } = useForm()

      const onSubmit = async (data) =>{
        console.log(data);
        const imageFiles= {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFiles,{
          headers:{
            'content-type': 'multipart/form-data'
          }
        }) 

        console.log(res.data);

        if(res.data.success){
            const classItem={
                title: data.title,
                name: data.name,
                email: data.email,
                price: data.price,
                description: data.description,
                image: res.data.data.display_url,
                status: 'pending'

            }

            const classItemRes= await axiosSecure.post('/classes', classItem)
            console.log(classItemRes.data);
            if(classItemRes.data.insertedId){
              reset()
              Swal.fire({
          position: "top-center",
          icon: "success",
         title: "Your class has been saved",
         showConfirmButton: false,
         timer: 1500
        });
            }
            
        }

        
      }
    return (
        <div>
           
            <div>
            <div className="overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
        Add the class for your student
        </p>
        
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-2xl sm:grid grid-cols-3 sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
          <div className="pb-2 sm:pb-4 sm:flex-[1_0_0%]">
            <label htmlFor="hs-hero-name-1" className="block text-sm font-medium dark:text-white"><span className="sr-only"> Title</span></label>
            <input type="text"{...register("title",{required: true})} id="hs-hero-name-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder=" Title"/>
          </div>
          <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
            <label htmlFor="hs-hero-name-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Name</span></label>
            <input readOnly type="text" defaultValue={user?.displayName}  {...register("name",{required: true})} id="hs-hero-name-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder=" Name"/>
          </div>
          <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
            <label htmlFor="hs-hero-name-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Email</span></label>
            <input readOnly type="text" defaultValue={user?.email}  {...register("email",{required: true})} id="hs-hero-name-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder=" email"/>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700">
            <label htmlFor="hs-hero-email-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">price</span></label>
            <input type="number"  {...register("price",{required: true})} id="hs-hero-email-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder="Price"/>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700">
            <label htmlFor="hs-hero-email-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Description</span></label>
            <textarea  {...register("description",{required: true})} id="hs-hero-email-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder="Description" cols="20" rows="0">

            </textarea>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700">
            <label htmlFor="hs-hero-email-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Image</span></label>
            <input type="file"
            id="hs-hero-email-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400"
            {...register("image",{required: true})}
           />
           
          </div>
          
        </div>
        <div className="text-center">
         <button type="submit" className=" text-center mx-auto py-3 px-4 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        
         {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                '  Add class'
              )}
        </button>
         </div>
      </form>
     
    
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default AddClass;